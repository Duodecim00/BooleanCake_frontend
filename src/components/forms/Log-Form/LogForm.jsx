import './LogForm.css'
import {Link, useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginPost } from "../../../Routes/user.routes";

function LogForm(){
    const navigate = useNavigate();

    return(
        <>
            <div className="component-container_log" >
                <h2 className="form-tittle_log">Bienvenido/a de vuelta!</h2>
                <Formik 
                    initialValues={{
                        email:'',
                        password:''
                    }}
                    validate={(values) => {
                        let errors = {};
                        //Validacion de email
                                       // Validacion correo
                        if(!values.email){
                            errors.email = 'Por favor ingresa un correo electronico'
                        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                        }

                       //Validar contraseñas
                        if(!values.password){
                            errors.password = 'Por favor ingresa una contraseña'
                        } else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                            errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                        }
                        return errors;
                    }}
                    onSubmit={(values)=>{
                        try{
                            loginPost(values);
                            alert('Login Successful');
                            navigate('/');
                        }
                        catch(e){
                            console.log(e);
                        }
                    }}
                >
                {({errors, touched}) => (
                    <Form className="container-form-grid_log">
                        <div className={`form-grid-cell_log ${touched.email && errors.email ? 'error':''}`}>
                            <label htmlFor="email">email</label>    
                            <Field
                                className={`input-login ${touched.email && errors.email ? 'error' : ''}`}
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="correo@correo.com"
                            />
                                {touched.email && errors.email &&( <ErrorMessage name="email" component={() => (<div className="error-message">{errors.email}</div>)} />)}
                        </div>
                        <div className={`form-grid-cell_log ${touched.password && errors.password ? 'error':''}`}>
                            <label htmlFor="contrasena">Contraseña</label>
                            <Field
                                className={`input-login ${touched.password && errors.password ? 'error' : ''}`}
                                type="password" 
								id="password" 
								name="password" 
								placeholder="" 
							/>
                                {touched.password && errors.password &&(<ErrorMessage name="password" component={() => (<div className="error-message">{errors.password}</div>)} />)}
                            {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                        </div>
                        <div className="form-grid-cell-btn_log">
                            <button type="submit" className="btn-submit_log">Iniciar Sesion</button>
                            <span className="form-text_reg">No tienes una cuenta? <Link className="form-text-link_reg" to="/registro">Registrate</Link></span>
                        </div>
                    </Form>)}
                </Formik>
            </div>
        </>
    )
}

export default LogForm