import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom para la redirección
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateUser, logoutUser } from '../../../api/user.api'; // Asegúrate de ajustar la ruta de importación según tu estructura
import { CgProfile } from "react-icons/cg";
import './ProfForm.css';

const Profile = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState('');
  const navigate = useNavigate(); // Hook para la redirección

  const handleLogout = async () => {
    try {
        await logoutUser();
        console.log('Sesión cerrada con éxito');
       
        navigate('/login'); // Redirige al usuario tras el cierre de sesión exitoso
    } catch (error) {
        console.error('Error durante el cierre de sesión:', error);
    }
};

  return (
    <div className="div-container">


      <div className='profile-page'>

        <div className='profile-sidebar'>

          <div className='wtf'>
          <CgProfile className='picture'/>
          <div className='main-text'>Sophia Molina</div>
          </div>
        
          <div className='options'>
          <div className='my-profile-subtext-sidebar'>Mi perfil</div>
          <div className='my-profile-subtext-sidebar'>Fotografía</div>
          <div className='my-profile-subtext-sidebar'>Métodos de pago</div>
          <div className='my-profile-subtext-sidebar'>Notificaciones</div>
          <div onClick={handleLogout} className='logout'>Cerrar cuenta</div>
          </div>
          
        
        </div>

        <div className='profile-content'>
        <div className='profile-header'>
          <div className='my-profile'>Mi Perfil</div>
          <div className='my-profile-subtext'>Agrega información sobre ti</div>
        </div>
        <div className='profile-form'>
        <Formik
        initialValues={{
          name: '',
          lastname: '',
          email: '',
          cellphone: '',
          password: '',
        }}
        validate={(values) => {
          let errors = {};
          // Aquí deberías añadir tus validaciones

            // Validacion nombre
                        if(!values.name){
                            errors.name = 'Por favor ingresa un nombre'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                            errors.name = 'El nombre solo puede contener letras y espacios'
                        }
                        // Validacion Apellido
                        if(!values.lastname){
                            errors.lastname = 'Por favor ingresa un Apellido'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)){
                            errors.lastname = 'El Apellido solo puede contener letras y espacios'
                        }

                        // Validacion correo
                        if(!values.email){
                            errors.email = 'Por favor ingresa un correo electronico'
                        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                        }

                        //Validar numeros de telefono
                        if(!values.select || values.select== undefined){
                            errors.select = 'Selecciona un codigo'
                        } 
                        // else if(!/^\d{7}$/.test(values.cellphone)){
                        //     errors.select = 'El numero de telefono solo puede contener numeros y el simbolo de +.'
                        // }
                        //Validar numeros de telefono
                        if(!values.cellphone){
                            errors.cellphone = 'Por favor ingresa un numero valido'
                        } else if(!/^\d{7}$/.test(values.cellphone)){
                            errors.cellphone = 'El numero de tlf debe tener 7 digitos.'
                        }
                        //Validar contraseñas
                        if(!values.password){
                            errors.password = 'Por favor ingresa una contraseña'
                        } else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                            errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                        }
                      //  Validar contraseñas
                        if(!values.confirmPass){
                            errors.confirmPass = 'Por favor ingresa una contraseña'
                        } else if(! (values.password == values.confirmPass)){
                            errors.confirmPass = 'Las contraseñas deben coincidir' 
                        }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            console.log('Intentando enviar el formulario', values);
              const updatedUser = await updateUser(values);
              console.log('Perfil actualizado con éxito:', updatedUser);
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 5000);
              resetForm(); // Reinicia el formulario solo después de una actualización exitosa
          } catch (error) {
              console.error('Error actualizando el perfil:', error);
              setErrorMensaje('Error al actualizar el perfil. Por favor, inténtalo de nuevo.');
          }
          setSubmitting(false); // Asegúrate de desactivar el estado de submitting independientemente del resultado
      }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="profile-form">

            <div style={{marginLeft:'67px',marginBottom:'30px'}} className={`form-grid-cell ${touched.name && errors.name ? 'error':''}`}>
                <div className='main-text'>Nombre</div>
                {/* Field contiene todos los elementos handle, blur, etc. Cotenidos dentro de el */}
                <Field 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`input ${touched.name && errors.name ? 'error' : ''}`}
                    placeholder=""
                />
                {touched.name && errors.name &&( <ErrorMessage name="name" component={() => (<div className="error-message">{errors.name}</div>)} />)}
            </div>

            <div style={{marginLeft:'67px',marginBottom:'30px'}} className={`form-grid-cell ${touched.lastname && errors.lastname ? 'error':''}`}>
            <div className='main-text'>Apellido</div>
                    <Field
                        // className="input-register"
                        className={`input ${touched.lastname && errors.lastname ? 'error' : ''}`}
                        type="text" 
                        id="lastname" 
                        name="lastname" 
                        placeholder=""
							/>
                    {touched.lastname && errors.lastname &&( <ErrorMessage name="lastname" component={() => (<div className="error-message">{errors.lastname}</div>)} />)}

              </div>

              <div style={{marginLeft:'67px',marginBottom:'30px'}} className={`form-grid-cell ${touched.cellphone && errors.cellphone ? 'error':''}`}>
              <div className='main-text'>Télefono</div>
              <div className="input-container">
                  <Field as="select" id="option" name="select" className="cellphonecode-input">
                      <option value="">04--</option>
                      <option value="0424">0424</option>
                      <option value="0414">0414</option>
                      <option value="0412">0412</option>
                      <option value="0416">0416</option>
                      <option value="0426">0426</option>
                        </Field>
                        <Field
                            type="number" 
                            id="cellphone" 
                            name="cellphone" 
                            placeholder="" 
                            className="input-cell"
                        />
              </div>
                    {touched.cellphone && errors.cellphone &&( <ErrorMessage name="cellphone" component={() => (<div className="error-message">{errors.cellphone}</div>)} />)}
                    {touched.select && errors.select &&( <ErrorMessage name="select" component={() => (<div className="error-message">{errors.select}</div>)} />)}
              </div>

              <div style={{marginLeft:'67px',marginBottom:'30px'}} className={`form-grid-cell ${touched.email && errors.email ? 'error':''}`}>
              <div className='main-text'>Email</div>
                <Field
                    className={`input ${touched.email && errors.email ? 'error' : ''}`}
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="correo@correo.com" 
                  />
                 {touched.email && errors.email &&( <ErrorMessage name="email" component={() => (<div className="error-message">{errors.email}</div>)} />)}
                          </div>

            <div style={{marginLeft:'67px',marginBottom:'30px'}} className={`form-grid-cell ${touched.password && errors.password ? 'error':''}`}>
            <div className='main-text'>Contraseña nueva</div>
            <Field
                className={`input ${touched.password && errors.password ? 'error' : ''}`}
                type="password" 
                id="password" 
                name="password" 
                placeholder="" 
              />
              {touched.password && errors.password &&(<ErrorMessage name="password" component={() => (<div className="error-message">{errors.password}</div>)} />)}
                            
            </div>

            <div style={{marginLeft:'67px'}} className='form-grid-cell-btn'>
            <button type="submit"   className="btn-submit_reg" disabled={isSubmitting}>
              Actualizar Datos
            </button>
            </div>
            {formularioEnviado && <p>Perfil actualizado con éxito!</p>}
            <div className='form-grid-cell-btn'> 
            </div>
          
          </Form>
        )}
      </Formik>
        </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;