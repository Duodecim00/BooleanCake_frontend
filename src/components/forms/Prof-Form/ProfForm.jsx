import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom para la redirección
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateUser, logoutUser } from '../../../api/user.api'; // Asegúrate de ajustar la ruta de importación según tu estructura
import { destroyCookie } from '../../../api/cookie';

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
    <div>
      <h2>Editar Perfil</h2>
      {errorMensaje && <p className="error">{errorMensaje}</p>}
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
            await updateUser(values);
            console.log('Perfil actualizado con éxito');
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
            resetForm();
          } catch (error) {
            console.error('Error actualizando el perfil:', error);
            setErrorMensaje('Error al actualizar el perfil. Por favor, inténtalo de nuevo.');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" placeholder="Nombre" />
            <ErrorMessage name="name" component="div" />

            <Field type="text" name="lastname" placeholder="Apellido" />
            <ErrorMessage name="lastname" component="div" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <Field type="text" name="cellphone" placeholder="Teléfono" />
            <ErrorMessage name="cellphone" component="div" />

            <Field type="password" name="password" placeholder="Contraseña nueva" />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Actualizar Datos
            </button>
          </Form>
        )}
      </Formik>
      {formularioEnviado && <p>Perfil actualizado con éxito!</p>}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;