import React from "react";
import InputText from "../../components/InputText/InputText";
import './login.css';
import RegBand from "../../components/Reg-Band/RegBand";
import '../../components/Reg-Form/RegForm.css'
// import styled from 'styled-components';


function Login(){
    const validateLength = (text) => {
        if (text.length < 5) {
          return 'El texto debe tener al menos 5 caracteres.';
        }
        return null;
      };
    
      const validateEmail = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
          return 'Ingrese un correo electrónico válido.';
        }
        return null;
      };
    
      const validationFunctions = [validateLength, validateEmail];

    return(
        <>
            <div className="login">
                <RegBand/>
                <div className="login__helperContainer">
                    <section className="login__container">
                        <h2 className="login__welcomeText">Bienvenido/a de vuelta!</h2>
                        <form className="login__container--form">
                            <InputText label="Correo electrónico" type="email" validationFunctions={validationFunctions} />
                            <InputText label="password" type="password" validationFunctions={validationFunctions} />
                            <button className="button">Iniciar sesion</button>
                            {/* <div className="login__container--remember-me">
                                <label>
                                    <input type="checkbox" id="cbox1" value="checkbox">Recuerdame
                                </label>
                                <a href="/">Olvide mi clave xd no tengo n con tilde xd</a>
                            </div> */}

                            <p className="login__container--register">No tienes ninguna cuenta?<a href="/registro">Registrate</a></p>
                        </form>
                        {/* <section className="login__container--social-media">
                            <div><img src="./icons/google-icon.png" alt="Google">Inicia sesion con google</div>
                            <div><img src="./icons/twitter-icon.png" alt="Google">Inicia sesion con Twitter</div>
                        </section> */}
                        
                    </section>        
                </div>
            </div>
        </>
    );
}

export default Login;