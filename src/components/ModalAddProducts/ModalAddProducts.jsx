import { useState } from 'react';
import {Navigate} from "react-router-dom"
import { createProductsPost } from '../../api/products.api';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './ModalAddProducts.css'
import { uploadFile } from '../../firebase/config';
const PostModal = () => {
  const pred = 'Venezuela'
  const [file, setFile] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const region = import.meta.env.VITE_REGION;
  return (
    <div className='container-component-products'>
      <button className='insert-products-btn' onClick={handleOpenModal}>Subir Producto</button>

      {isOpen && (
        <div className="modal-product" id='popup'>
          <div className="modal-content-product">
            <Formik
                initialValues={{
                    stock: 0,
                    name:'',
                    price: 0,
                    expireDate:'',
                    isPersonalized:false,
                    category:'torta',
                    region: region,
                    image:''
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
                    onSubmit={async (values, {resetForm})=>{
                      try{
                        const result = await uploadFile(file);
                        console.log(result);
                        const data = {
                            name:values.name,
                            stock:values.stock,
                            price:values.price,
                            expireDate:values.expireDate,
                            category:values.category,
                            isPersonalized:values.isPersonalized,
                            region: region,
                            image: result
                        }

                        const jason = JSON.stringify(data)
                        console.log(jason);
                        console.log(typeof(data.price));
                        createProductsPost(data);
                        <Navigate to="/products"></Navigate>
                      }
                      catch(error){
                        console.error(error)
                        }
                        handleCloseModal();
                        // cambiarFormularioEnviado(true);
                        // setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    }}
            >
             {({errors}) => (
                <Form className="container-form-product">

                            <div className="grid-container-form-product">
                                <label htmlFor="name" className='label-modal-product'>Producto</label>
                                <Field
                                className="modal-product-input"
                                type="name"
                                id="name"
                                name="name"
                                placeholder=""
                                />
                            </div>
                            <div className="grid-container-form-product">
                                <label htmlFor="category">Categoria</label>
                                <Field
                                    as="select"
                                    type="category"
                                    id="category"
                                    name="category"
                                    placeholder=""
                                    className="modal-product-input"
                                >
                                  <option value="torta">torta</option>
                                  <option value="cupcakes">cupcakes</option>
                                  <option value="brownies">brownies</option>
                                </Field>
                            </div>
                            <div className="grid-container-form-product">
                                <label htmlFor="isPersonalized">Es personalizada</label>
                                <Field
                                    as="select"
                                    type="isPersonalized"
                                    id="isPersonalized"
                                    name="isPersonalized"
                                    placeholder=""
                                    className="modal-product-input"
                                >
                                  <option value="true">Si</option>
                                  <option value="false">No</option>
                                </Field>
                            </div>
                            <div className="grid-container-form-product">
                                <label htmlFor="price">Precio</label>
                                <Field
                                    className="modal-product-input"
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder=""
                                />
                            </div>
                            <div className="grid-container-form-product">
                                <label htmlFor="stock">Cantidad</label>
                                <Field
                                    className="modal-product-input"
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    placeholder=""
                                />
                                {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                            </div>
                            <div className="grid-container-form-product">
                                <label htmlFor="expireDate">Fecha de expiracion</label>
                                <Field
                                    className="modal-product-input"
                                    type="date"
                                    id="expireDate"
                                    name="expireDate"
                                    placeholder=""
                                />
                            </div>
                            <div className="modal-product-img-container">
                              <input className='modal-product-img' type="file" name="image" id="image" onChange={e => uploadFile(e.target.files[0])}></input>
                                {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                            </div>
                            <div className='modal-product-btn-container'>
                              <button className='modal-product-btn product-submit-btn' type="submit">Subir</button>
                              <button className='modal-product-btn product-exit-btn' onClick={handleCloseModal}>Salir</button>
                            </div>
                            
                </Form>
            )}
            
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostModal;