import React from "react";
import InputText from "../../components/InputText/InputText";
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
            <h1>hola mundo</h1>
            <div>
          <InputText label="Correo electrónico" type="email" validationFunctions={validationFunctions} />
          <InputText label="password" type="password" validationFunctions={validationFunctions} />
        </div>
        </>
    );
}

export default Login;

// const Cont = styled.div`

    

// `

