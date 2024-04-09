import { useState, useEffect } from 'react';
import './ShowAllProducts.css';
import { getAllProducts, deleteProduct, updateProduct } from '../../api/products.routes';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './ShowAllProducts.css'

function ShowProducts() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const products = await getAllProducts();
        console.log(products);
        setData(products.data);
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

  const handleDelete = (id) => {
        deleteProduct(id);
  };
  const handleCancel = () => {
    setEditModalOpen(false);
};

  return (
        <div className='container-admin-view'>
            <h1>Productos</h1>
                            {Array.isArray(data) ? (
                                data.map((item) => (
                                <div  key={item._id}>
                                    <div className='slide'>
                                        <div className='block'>
                                            <p>{item.name}</p> 
                                        </div>
                                        <div className='block'>
                                            <p>Category: {item.category}</p>
                                        </div>
                                        <div className='block'>
                                            <p >Price: {item.price}</p>
                                        </div>
                                        <div className='block'>
                                            <p >Stock: {item.storage}</p>
                                        </div>
                                        <div className='block'>
                                            <p >Fecha de vencimiento: {item.expireDate}</p>
                                        </div>
                                        <div className='block'>
                                            <button className='btnoption' onClick={() => handleEdit(item)}>
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button className='btnoption' onClick={() => handleDelete(item._id)}>Borrar</button>
                                        </div>
                                        <div className='block'>
                                                    <div className='sample'>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        
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
                                                        try{
                                                            console.log(values);
                                                            updateProduct(values);
                                                            setSubmitCount(submitCount + 1);
                                                            // handleCloseModal();
                                                            resetForm();
                                                            handleCancel();

                                                        }catch(e){
                                                            console.log(e)
                                                        }
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
                                                                    <label htmlFor="storage">Unidad de medida</label>
                                                                    <Field
                                                                        type="text"
                                                                        id="storage"
                                                                        name="storage"
                                                                        placeholder=""
                                                                    />
                                                                </div>                            
                                                                <div className="form-grid-cell aparence-disable">
                                                                    <label htmlFor="category">Unidad de medida</label>
                                                                    <Field
                                                                        type="text"
                                                                        id="category"
                                                                        name="category"
                                                                        placeholder=""
                                                                    />
                                                                </div>                            
                                                                <div className="form-grid-cell aparence-disable">
                                                                    <label htmlFor="expireDate">Fecha de vencimiento</label>
                                                                    <Field
                                                                        type="text"
                                                                        id="expireDate"
                                                                        name="expireDate"
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

export default ShowProducts;