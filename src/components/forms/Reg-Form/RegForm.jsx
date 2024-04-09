import './RegForm.css';
import {Link} from "react-router-dom";
import { registerPost } from "../../../api/user.routes";
import { Formik, Form, Field, ErrorMessage } from "formik";

function RegForm(){
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
                    onSubmit={(values) => {
                        const data = {
                            name:values.name,
                            lastname:values.lastname,
                            email:values.email,
                            cellphone:`${values.select}${values.cellphone}`,
                            password:values.password,
                        }
                        try{
                            console.log(data)
                            console.log(values);


                            registerPost(data);
                            console.log('hola soy el data:');

                        }catch(e){
                            console.error(e);
                        }
                        // console.log(data);
                    }}  
                >
                {({errors, touched} ) => (
                    <Form className="form-container_reg">
                        
                        <div className={`form-grid-cell ${touched.name && errors.name ? 'error':''}`}>
                            <label htmlFor="name">Nombre</label>
                            {/* Field contiene todos los elementos handle, blur, etc. Cotenidos dentro de el */}
                            <Field 
                                type="text" 
								id="name" 
								name="name" 
                                className={`input-register ${touched.name && errors.name ? 'error' : ''}`}
                                placeholder=""
							/>
                            {touched.name && errors.name &&( <ErrorMessage name="name" component={() => (<div className="error-message">{errors.name}</div>)} />)}
                        </div>

                        <div className={`form-grid-cell ${touched.lastname && errors.lastname ? 'error':''}`}>
                            <label htmlFor="lastname">Apellido</label>
                            <Field
                                // className="input-register"
                                className={`input-register ${touched.lastname && errors.lastname ? 'error' : ''}`}
                                type="text" 
								id="lastname" 
								name="lastname" 
								placeholder=""
							/>
                                {touched.lastname && errors.lastname &&( <ErrorMessage name="lastname" component={() => (<div className="error-message">{errors.lastname}</div>)} />)}

                        </div>

                        <div className={`form-grid-cell ${touched.cellphone && errors.cellphone ? 'error':''}`}>
                                <label htmlFor="cellphone">Número de tlf</label>
                                <div className="phone-input-container">
                                    <Field as="select" id="option" name="select" className="input-register selector cellphonecode-input_reg">
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
                                        className="input-register cellphone-input_reg"
                                    />
                                </div>
                                {touched.cellphone && errors.cellphone &&( <ErrorMessage name="cellphone" component={() => (<div className="error-message">{errors.cellphone}</div>)} />)}
                                {touched.select && errors.select &&( <ErrorMessage name="select" component={() => (<div className="error-message">{errors.select}</div>)} />)}
                            </div>

                        <div className={`form-grid-cell ${touched.email && errors.email ? 'error':''}`}>
                            <label htmlFor="email">Correo Electronico</label>
                            <Field
                                className={`input-register ${touched.email && errors.email ? 'error' : ''}`}
								type="email" 
								id="email" 
								name="email" 
								placeholder="correo@correo.com" 
							/>
                                {touched.email && errors.email &&( <ErrorMessage name="email" component={() => (<div className="error-message">{errors.email}</div>)} />)}
                        </div>

                        <div className={`form-grid-cell ${touched.password && errors.password ? 'error':''}`}>
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                className={`input-register ${touched.password && errors.password ? 'error' : ''}`}
								type="password" 
								id="password" 
								name="password" 
								placeholder="" 
							/>
                                {touched.password && errors.password &&(<ErrorMessage name="password" component={() => (<div className="error-message">{errors.password}</div>)} />)}
                            
                        </div>

                        <div className={`form-grid-cell ${touched.confirmPass && errors.confirmPass ? 'error':''}`}>
                            <label htmlFor="confirmPass">Confimar contraseña</label>
                            <Field
                                className={`input-register ${touched.confirmPass && errors.confirmPassword ? 'error' : ''}`}
								type="password" 
								id="confirmPass" 
								name="confirmPass" 
								placeholder="" 
							/>
                                {touched.confirmPass && errors.confirmPass &&(<ErrorMessage name="confirmPass" component={() => (<div className="error-message">{errors.confirmPass}</div>)} />)}
                            
                        </div>                            
                        <div className="form-grid-cell-btn">
                        <button type="submit" className="btn-submit_reg">Crear cuenta</button>
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