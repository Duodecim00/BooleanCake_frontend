import './RegForm.css';
import { useState } from 'react';
import {Link} from "react-router-dom";
import { registerPost } from "../../Routes/user.routes";
import { Formik, Form, Field, ErrorMessage } from "formik";

function RegForm(){
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return(
        <>
            <div className="component-container_reg" >
                <h2 className="form-tittle_reg">Registrate</h2>
                    
                <Formik
                    initialValues={{
                        name:'',
                        lastname:'',
                        email:'',
                        select:'',
                        cellphone:'',
                        password:'',
                        confirmPass:''
                    }}
                    validate={(values) => {
                        let errors = {};
                        // Validacion nombre
                        if(!values.name){
                            errors.name = 'Por favor ingresa un nombre'
                        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                            errors.name = 'El nombre solo puede contener letras y espacios'
                        }
                        // } else if(!regexName(values.name)){
                        //     errors.name = 'El nombre solo puede contener letras y espacios'
                        // }

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
                       // } //else if(!/^0412\d{7}$/.test(values.cellphone)){
                            //errors.cellphone = 'El numero de telefono solo puede contener numeros y el simbolo de +.'
                        // }//
                        //Validar contraseñas
                        if(!values.password){
                            errors.password = 'Por favor ingresa una contraseña'
                        } //else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                          // errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                      // }
                      //  Validar contraseñas
                        if(!values.confirmPass){
                            errors.confirmPass = 'Por favor ingresa una contraseña'
                        } else if(! (values.password == values.confirmPass)){
                            errors.password = 'Las contraseñas deben coincidir' 
                            errors.confirmPass = 'Las contraseñas deben coincidir' 
                        }

                        return errors;


                    }}
                    onSubmit={(values,{resetForm}) => {
                        const data = {
                            name:values.name,
                            lastname:values.lastname,
                            email:values.email,
                            cellphone:`${values.select}${values.cellphone}`,
                            password:values.password
                        }
                        
                        registerPost(data);
                        console.log('hola soy el data:');
                        console.log(data);
                        resetForm();
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 5000);

                    }}  
                >
                {({errors} ) => (
                    <Form className="form-container_reg">
                        
                        <div className="form-grid-cell">
                            <label htmlFor="name">Nombre</label>
                            {/* Field contiene todos los elementos handle, blur, etc. Cotenidos dentro de el */}
                            <Field className="input-register"
								type="text" 
								id="name" 
								name="name" 
								placeholder=""
							/>
							<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
                        </div>

                        <div className="form-grid-cell">
                            <label htmlFor="lastname">Apellido</label>
                            <Field  className="input-register"
								type="text" 
								id="lastname" 
								name="lastname" 
								placeholder=""
							/>
							<ErrorMessage name="lastname" component={() => (<div className="error">{errors.lastname}</div>)} />
                        </div>

                        <div className="form-grid-cell form-grid-cell-input-cellphone">
                                <label htmlFor="cellphone">Numero de tlf</label>
                            <div className="select-container">
                                <Field className="input-cellphone-code" as="select" id="option" name="select">
                                    <option value="">Seleccione</option>
                                    <option value="0424">0424</option>
                                    <option value="0414">0414</option>
                                    <option value="0412">0412</option>
                                    <option value="0416">0416</option>
                                    <option value="0426">0426</option>
                                </Field>
                            </div>
                            <Field className="input-cellphone"
								type="number" 
								id="cellphone" 
								name="cellphone" 
								placeholder="" 
							/>
                            <ErrorMessage name="select" component={() => (<div className="error">{errors.select}</div>)}/>
                            <ErrorMessage name="cellphone" component={() => (<div className="error">{errors.cellphone}</div>)}/>
                        </div>

                        <div className="form-grid-cell ">
                            <label htmlFor="email">Correo Electronico</label>
                            <Field  className="input-register"
								type="email" 
								id="email" 
								name="email" 
								placeholder="correo@correo.com" 
							/>
                            <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                        </div>

                        <div className="form-grid-cell ">
                            <label htmlFor="password">Contraseña</label>
                            <Field  className="input-register"
								type="password" 
								id="password" 
								name="password" 
								placeholder="" 
							/>
                            <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                        </div>

                        <div className="form-grid-cell ">
                            <label htmlFor="confirmPass">Confimar contraseña</label>
                            <Field  className="input-register"
								type="password" 
								id="confirmPass" 
								name="confirmPass" 
								placeholder="" 
							/>
                            <ErrorMessage name="confirmPassword" component={() => (<div className="error">{errors.confirmPass}</div>)} />
                        </div>                            
                        <div className="form-grid-cell-btn">
                        <button type="submit" className="btn-submit_reg">Crear cuenta</button>
                            {formularioEnviado && console.log('boton') && <p className="success">Formulario enviado con exito!</p>}
                            <span className="form-text_reg">Ya tienes una cuenta? <Link className="form-text-link_reg" to="/login">Iniciar Sesion</Link></span>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </>
    )
}

export default RegForm



// function regexPhoneNumber(value){
//     if(!/^0414\d{7}$/.test(value)){
//         return false
//     }
//     if(!/^0424\d{7}$/.test(value)){
//         return false
//     }
//     if(!/^0412\d{7}$/.test(value)){
//         return false
//     }
//     if(!/^0426\d{7}$/.test(value)){
//         return false
//     }
//     if(!/^0416\d{7}$/.test(value)){
//         return false
//     }
//     if(!/^0416\d{7}$/.test(value)){
//         return false
//     }
// }
// //denme un premio reduje 8 lineas de codigo con esta funcion :D
// function regexName(value){
//     if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)){
//         return false
//     }
// }