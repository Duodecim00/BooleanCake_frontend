import { useState, useEffect } from "react";
import "./ShowAllProducts.css";
import {
  getAllProducts,
  deleteProduct,
  updateProduct,
  testCookie,
} from "../../api/products.api";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./ShowAllProducts.css";

function ShowProducts() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
    fetchData();
    testCookie2();
  }, []);

  const fetchData = async () => {
    try {
      const products = await getAllProducts();
      //const cookie = await testCookie();
      console.log(products);
      //console.log(cookie);
      setData(products.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const testCookie2 = async () => {
    try {
      const cookie = await testCookie();
      console.log(cookie);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    <div className="container-admin-view">
      <h1>Productos</h1>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div className="admin-product-container" key={item._id}>
              <div className="grid-admin-product">
                <p className="grid-admin-product-text">{item.name}</p>
              </div>
              <div className="grid-admin-product">
                <p className="grid-admin-product-text">Category: <span className="grid-admin-product-text-info">{item.category}</span></p>
              </div>
              <div className="grid-admin-product">
                <p className="grid-admin-product-text">Price: <span className="grid-admin-product-text-info">{item.price}</span></p>
              </div>
              <div className="grid-admin-product">
                <p className="grid-admin-product-text">Stock: <span className="grid-admin-product-text-info"> {item.storage}</span></p>
              </div>
              <div className="grid-admin-product">
                <p className="grid-admin-product-text">Fecha de vencimiento: <span className="grid-admin-product-text-info">{item.expireDate}</span></p>
              </div>
              <div className="grid-admin-product">
                <button className="btnoption" onClick={() => handleEdit(item)}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button
                  className="btnoption"
                  onClick={() => handleDelete(item._id)}
                >
                  <span class="material-symbols-outlined ">
                  delete
                  </span>
                </button>
              </div>
              <div className="grid-admin-product">
                <div className="sample">
                  <img className="admin-product-img" src={item.image} alt={item.name} />
                </div>
              </div>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
      {selectedItem && editModalOpen && (
        <div className="backdrop">
          <div className="form_container container-modal-edit-products">
          <button
                    className="gap-btn-edit-exit"
                    onClick={handleCancel}
                  >
                    X
                  </button>
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
              onSubmit={(values, { resetForm }) => {
                try {
                  console.log(values);
                  updateProduct(values);
                  setSubmitCount(submitCount + 1);
                  // handleCloseModal();
                  resetForm();
                  handleCancel();
                } catch (e) {
                  console.log(e);
                }
                // cambiarFormularioEnviado(true);
                // setTimeout(() => cambiarFormularioEnviado(false), 5000);
              }}
            >
              {({ errors }) => (
                <Form className="container-form-grid_products">
                  
                  <div className="form-grid-cell form-grid-cell-big">
                    <label htmlFor="name">Nombre</label>
                    <Field  className="cosa" type="name" id="name" name="name" placeholder="" />
                  </div>
                  <div className="form-grid-cell aparence-disable form-grip-gap-edit margin">
                    <label htmlFor="price">Precio</label>
                    <Field
                      className="cosa"
                      type="number"
                      id="price"
                      name="price"
                      placeholder=""
                    />
                  </div>
                  <div className="form-grid-cell aparence-disable form-grip-gap-edit">
                    <label htmlFor="storage">Unidad de medida</label>
                    <Field
                      className="cosa"
                      type="text"
                      id="storage"
                      name="storage"
                      placeholder=""
                    />
                  </div>
                  <div className="form-grid-cell aparence-disable form-grip-gap-edit margin">
                    <label htmlFor="category">Category</label>
                    <Field
                      className="cosa"
                      type="text"
                      id="category"
                      name="category"
                      placeholder=""
                    />
                  </div>
                  <div className="form-grid-cell aparence-disable form-grip-gap-edit">
                    <label htmlFor="expireDate">Fecha de vencimiento</label>
                    <Field
                      type="text"
                      id="expireDate"
                      name="expireDate"
                      placeholder=""
                    />
                    {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                  </div>
                  <div>
                    <button className="gap-btn-edit" type="submit">
                    Subir
                  </button>
                  </div>
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
