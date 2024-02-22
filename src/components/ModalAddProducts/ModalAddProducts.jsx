import { useState } from 'react';
import { createProductsPost } from '../../Routes/products.routes';
import { Formik, Form, Field, ErrorMessage} from 'formik';

const PostModal = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [post, setPost] = useState({
//     precio: 0,
//     nombre: '',
//     stock: 0,
//     fecha: ''
//   });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPost({ ...post, [name]: value });
//   };

//   const handleCreatePost = () => {
//     // Aquí puedes realizar la lógica para enviar el post al servidor
//     console.log('Nuevo post:', post);
//     // createProductsPost(data);
//     // Aquí puedes realizar las validaciones y el envío de datos al servidor
//     // Puedes realizar una solicitud HTTP utilizando fetch o axios para enviar los datos
//     // al backend y guardar el post en la base de datos

//     // Después de enviar el post, puedes cerrar el modal
//     handleCloseModal();
//   };

  return (
    <div>
      <button onClick={handleOpenModal}>Crear Post</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Crear Post</h2>

            <Formik
                initialValues={{
                    storage: 0,
                    price: 0,
                    expireDate:'',
                    category:'',
                    password:''
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
                        createProductsPost(values);
                        handleCloseModal();
                        resetForm();
                        // cambiarFormularioEnviado(true);
                        // setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    }}
            >
             {({errors}) => (
                <Form className="container-form-grid_log">

                            <div>
                                <label htmlFor="storage">Almacenamiento:</label>
                                <Field
                                    type="number"
                                    id="storage"
                                    name="storage"
                                    placeholder=""
                                />
                                {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                            </div>
                            <div>
                                <label htmlFor="price">Precio:</label>
                                <Field
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="expireDate">Fecha de expiracion:</label>
                                <Field
                                    type="date"
                                    id="expireDate"
                                    name="expireDate"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="category">Nombre:</label>
                                <Field
                                type="category"
                                id="category"
                                name="category"
                                placeholder=""
                                />
                            </div>
                            <button type="submit">
                                Subir, brr
                            </button>
                            <button type="button" onClick={handleCloseModal}>
                                Cancelar
                            </button>
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

















//gptciño
//   <div className="modal">
//           <div className="modal-content">
//             <h2>Crear Post</h2>
//             <form>
//               <div>
//                 <label htmlFor="precio">Precio:</label>
//                 <input
//                   type="number"
//                   id="precio"
//                   name="precio"
//                   value={post.precio}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input
//                   type="text"
//                   id="nombre"
//                   name="nombre"
//                   value={post.nombre}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="stock">Stock:</label>
//                 <input
//                   type="number"
//                   id="stock"
//                   name="stock"
//                   value={post.stock}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="fecha">Fecha:</label>
//                 <input
//                   type="text"
//                   id="fecha"
//                   name="fecha"
//                   value={post.fecha}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <button type="button" onClick={handleCreatePost}>
//                 Publicar
//               </button>
//               <button type="button" onClick={handleCloseModal}>
//                 Cancelar
//               </button>
//             </form>
//           </div>
//         </div>