import { useState } from "react";
// import {useHistory} from 'react-router-dom';
import './LogForm.css'
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginPost } from "../../Routes/user.routes";
function LogForm(){
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    // const history = useHistory();
    return(
        <>
            <div className="component-container_log" >
                <h2 className="form-tittle_log">Bienvenido/a de vuelta!</h2>
                 <Formik 
                    initialValues={{
                        email:'',
                        password:''
                 }}
                 validate={(values)=>{
                    let errors = {}
                    //Validacion de email
                    if(!values.email){
                        errors.email = 'Ingrese un email valido'
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }
                    //Validacion contrase;a
                    // if(!values.password){
                    //     errors.password = 'Por favor ingresa una contraseña'
                    // } else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                    //     errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                    // }

                 }}
                 onSubmit={(values, {resetForm})=>{
                    try{
                        loginPost(values);
                        resetForm();
                        alert('Login Successful');
                    }
                    catch(e){
                        console.log(e);
                    }
                 }}
                 >
                {({errors}) => (
                    <Form className="container-form-grid_log" action="/login" method="post">
                        
                        <div className="form-grid-cell_log ">
                            <label htmlFor="email">Email</label>    
                            <Field
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="correo@correo.com"
                            />
                            <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                        </div>

                        <div className="form-grid-cell_log ">
                            <label htmlFor="contrasena">Contraseña</label>
                            <Field
								type="password" 
								id="password" 
								name="password" 
								placeholder="" 
							/>
                            <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                        </div>

                        <div className="form-grid-cell-btn_log">
                            <button type="submit" className="btn-submit_log">Iniciar Sesion</button>
                            {formularioEnviado && console.log('boton') && <p className="success">Formulario enviado con exito!</p>}
                            <span className="form-text_reg">No tienes una cuenta? <Link className="form-text-link_reg" to="/registro">Registrate</Link></span>
                        </div>
                        
                    </Form>)}
                    
                 </Formik>
                
            </div>
        </>
    )
}

export default LogForm