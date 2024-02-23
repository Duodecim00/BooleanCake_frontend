import { useState, useEffect } from 'react';
import { deleteIngredient, getAllIngredient, updateIngredient } from '../../Routes/ingredients.routes';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function ShowIngredient() {
  const [data, setData] = useState([]);
//   const [itemz, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
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
  const handleSave = () => {
    // Lógica para guardar los cambios del item editado en la API
    // axios.put(`API_URL/${selectedItem.id}`, editedItem)
    //   .then((response) => {
    //     const updatedItems = items.map((item) =>
    //       item.id === selectedItem.id ? response.data : item
    //     );
    //     setItems(updatedItems);
    //     setEditModalOpen(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error updating item:', error);
    //   });
    console.log('Aqui intentando guardarte los datos papu, dont worry');
  };

  const handleCancel = () => {
    setEditModalOpen(false);
  };

  const handleDelete = (id) => {
        deleteIngredient(id);
  };

  return (
        <div>
            {Array.isArray(data) ? (
                data.map((item) => (
                <div className="item_container" key={item._id}>
                    <h2>{item.name}</h2>
                    <p>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Unidad de medida: {item.unitMeasure}</p>
                    <button onClick={() => handleEdit(item) }>Editar</button>
                    <button onClick={() => handleDelete(item._id)}>Borrar</button>
                </div>
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
            {editModalOpen && (
                <div>
                <Formik
                        initialValues={{
                            stock: data.stock,
                            price: data.price,
                            name: data.name,
                            unitMeasure: data.unitMeasure,
                            }}
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
            )}
        </div>
    );
};

export default ShowIngredient;
  {/* <div className="modal">
    <div className="modal-content">
      <h2>Editar Item</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={editedItem.nombre}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Descripción:
        <input
          type="text"
          name="descripcion"
          value={editedItem.descripcion}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSave}>Guardar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  {/*</div> */}