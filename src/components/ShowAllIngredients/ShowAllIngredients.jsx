import { useState, useEffect } from 'react';
import { deleteIngredient, getAllIngredient, updateIngredient } from '../../Routes/ingredients.routes';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function ShowIngredient() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedItem, setEditedItem] = useState({});
    const [editModalOpen, setEditModalOpen] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const ingredients = await getAllIngredient();
            console.log(ingredients);
            setData(ingredients.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEdit = (id) => {
        // Lógica para editar el elemento con el ID proporcionado
        setSelectedItem(id);
        setEditedItem({ ...id });
        setEditModalOpen(true);
    };

    const handleCancel = () => {
        setEditModalOpen(false);
    };

    const handleDelete = (id) => {
        deleteIngredient(id);
    };

    return (
        <div className='container-admin-view'>
            <h1>Ingredientes</h1>
            {Array.isArray(data) ? (
                data.map((item) => (
                <div key={item._id}>
                    <div className='slide'>
                        <div className='block'>
                            <p>{item.name}</p>
                        </div>
                        <div className='block'>
                            <p>Price: {item.price}</p>
                        </div>
                        <div className='block'>
                            <p>Stock: {item.stock}</p>
                        </div>
                        <div className='block'>
                            <p>Unidad de medida: {item.unitMeasure}</p>
                        </div>
                        <div className='block'>
                            <button className='btnoption' onClick={() => handleEdit(item) }>Editar</button>
                            <button className='btnoption' onClick={() => handleDelete(item._id)}>Borrar</button>
                        </div>
                    </div>
                </div>
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
            {selectedItem && editModalOpen && (
                
                <div className='backdrop'>
                
                                        <div className='form_container'>

                <Formik
                        initialValues={selectedItem}
                            // validate={(values)=>{
                            //     let errors = {}
                            //     //Validacion de email
                            //     if(!values.email){
                            //         errors.email = 'Ingrese un email valido'
                            //     }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            //         errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                            //     }
                            //     //Validacion contrase;a
                            //     // if(!values.password){
                            //     //     errors.password = 'Por favor ingresa una contraseña'
                            //     // } else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                            //     //     errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                            //     // }
                            // }}
                            onSubmit={(values, {resetForm})=>{
                                console.log(values);
                                updateIngredient(values)
                                // handleCloseModal();
                                resetForm();
                                handleCancel();
                                // cambiarFormularioEnviado(true);
                                // setTimeout(() => cambiarFormularioEnviado(false), 5000);
                            }}
                    >
                    {({errors}) => (
                        <Form className="container-form-grid_products">
                                    <div className="form-grid-cell form-grid-cell-big">
                                        <label htmlFor="name">Nombre</label>
                                        <Field
                                        type="name"
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        />
                                    </div>
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="price">Precio</label>
                                        <Field
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="unitMeasure">Unidad de medida</label>
                                        <Field
                                            type="text"
                                            id="unitMeasure"
                                            name="unitMeasure"
                                            placeholder=""
                                        />
                                    </div>                            
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="stock">Almacenamiento</label>
                                        <Field
                                            type="number"
                                            id="stock"
                                            name="stock"
                                            placeholder=""
                                        />
                                        {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                                    </div>
                                    <button className='modal-products-submit' type="submit">
                                        Subir
                                    </button>
                                    <button className="modal-products-submit" onClick={handleCancel}>Cancelar</button>
                        </Form>
                    )}  
                    </Formik>
                </div>
                </div>
            )}
        </div>
    );
}

export default ShowIngredient;