import React from 'react';
import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
import CakeList from '../../components/CakeList/CakeList';
import InputText from '../../components/InputText/InputText.1.jsx';

const products = () => {
    
    return (
        <div>
            <NavLogin/>
            <h1>hola</h1>
        <CakeList/>
        <InputText label="Correo electrónico" type="email" validationFunctions={console.log("holaa")} />
        </div>
    );
};

export default products;