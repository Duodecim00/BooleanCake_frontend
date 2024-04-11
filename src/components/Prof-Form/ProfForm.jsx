import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateUser } from '../../Routes/user.routes'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ProfForm() {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

 
    const logout = () => {
        console.log('Cerrar sesión');
    };

    return (
        <>
            <div className="component-container_reg">
                <h2 className="form-tittle_reg">Editar Perfil</h2>

                <Formik
                    initialValues={{
                        name: '',
                        lastname: '',
                        email: '',
                        select: '',
                        cellphone: '',
                        password: '',
                        confirmPass: ''
                    }}
                    validate={(values) => {
                        let errors = {};
             

                        // Validación nombre
                        if (!values.name) {
                            errors.name = 'Por favor ingresa un nombre';
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                            errors.name = 'El nombre solo puede contener letras y espacios';
                        }

                        // Validación apellido
                        if (!values.lastname) {
                            errors.lastname = 'Por favor ingresa un apellido';
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
                            errors.lastname = 'El apellido solo puede contener letras y espacios';
                        }

                        // Validación email
                        if (!values.email) {
                            errors.email = 'Por favor ingresa un correo electrónico';
                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                            errors.email = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo';
                        }

                        // Validación selección de código telefónico
                        if (!values.select || values.select === undefined) {
                            errors.select = 'Selecciona un código';
                        }

                        // Validación número de teléfono
                        if (!values.cellphone) {
                            errors.cellphone = 'Por favor ingresa un número válido';
                        } else if (!/^\d{7}$/.test(values.cellphone)) {
                            errors.cellphone = 'El número de teléfono debe tener 7 dígitos';
                        }

                        // Validación contraseña
                        if (!values.password) {
                            errors.password = 'Por favor ingresa una contraseña';
                        } else if (!/^(?=.*\W).{8,}$/.test(values.password)) {
                            errors.password = 'La contraseña debe contener 8 caracteres o más y mínimo un carácter especial';
                        }

                        // Validación confirmación de contraseña
                        if (!values.confirmPass) {
                            errors.confirmPass = 'Por favor ingresa una contraseña';
                        } else if (!(values.password === values.confirmPass)) {
                            errors.password = 'Las contraseñas deben coincidir';
                            errors.confirmPass = 'Las contraseñas deben coincidir';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        const data = {
                            name: values.name,
                            lastname: values.lastname,
                            email: values.email,
                            cellphone: `${values.select}${values.cellphone}`,
                            password: values.password,
                        };

                        updateUser(data); // Asegúrate de que esta función maneja la lógica de actualización correctamente
                        resetForm();
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    }}
                >
                    {({ errors }) => (
                        <Form className="form-container_reg">
                            {/* Los campos del formulario van aquí */}
                            <button type="submit" className="btn-submit_reg">Actualizar Datos</button>
                            {formularioEnviado && <p className="success">Perfil actualizado con éxito!</p>}
                        </Form>
                    )}
                </Formik>
                <button onClick={logout} className="btn-submit_reg">Cerrar Sesión</button>
            </div>
        </>
    );
}

export default ProfForm;
