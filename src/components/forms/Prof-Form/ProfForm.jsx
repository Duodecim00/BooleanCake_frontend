import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateUser, logoutUser } from '../../../api/user.api'; // Asegúrate de ajustar la ruta de importación según tu estructura

const Profile = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div>
      <h2>Editar Perfil</h2>
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
      <button onClick={() => logoutUser().then(() => {
          console.log('Sesión cerrada con éxito');
          // Aquí puedes redirigir al usuario a la página de inicio o de login
        }).catch((error) => {
          console.error('Error al intentar cerrar sesión:', error);
          // Manejar el error, mostrando un mensaje al usuario si es necesario
        })}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
