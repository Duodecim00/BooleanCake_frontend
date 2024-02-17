import React from "react";
import './Inicio-nav.css';
import styled from 'styled-components';


function NavLogin(){
    return (
        <>
            <NavContainer className="nav-container">

                <a href="#" className="nav-titulo">ButterCream</a>
                <section className="container">
                    <p className="nav-btn">Productos</p>
                    <p className="nav-btn">Nuestra Empresa</p>
                    <p className="nav-btn">Contactanos</p>
                </section>
                <section>
                    <a href="#" className="nav-btn_login">Iniciar Sesion</a>
                    <a href="#" className="nav-btn_register">Registrarse</a>
                </section>
            </NavContainer>
        </>
    )
}

export default NavLogin

const NavContainer = styled.nav`
    

`