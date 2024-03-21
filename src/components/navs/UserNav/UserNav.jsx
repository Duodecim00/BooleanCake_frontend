import './UserNav.css';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import RegionSelector from '../../RegionSelector/RegionSelector';

function NavLogin() {
  const region = import.meta.env.VITE_REGION;
  var primaryColor;
  switch (region) {
      case 'VEN':
        primaryColor = '#333'; // Rojo para la región US
        break;
      case 'EU':
        primaryColor = '#020b5e'; // Azul para la región EU
        break;
      case 'USA':
        primaryColor = '#b30e0e'; // Azul para la región EU
        break;
      case 'HYRULE':
        primaryColor = '#d4af4a'; // Azul para la región EU
        break;
      default:
        primaryColor = '#ffd700'; // Negro por defecto
    }
    return (
      <NavContainer className="nav-container">
        <h1 className="nav-titulo" style={{color: primaryColor}}>ButterCream!</h1>
        <section className="container">

          <Link className="nav-btn selected" to="/">Inicio</Link>
          <Link className="nav-btn" to="/">Productos</Link>
          <Link className="nav-btn" to="/">Contacto</Link>

        </section>
        {/* <section>
          <RegionSelector/>
        </section> */}
        <section>
          <Link to="/login" className="nav-btn_login">Iniciar Sesion</Link>
          <Link to="/registro" className="nav-btn_register">Registrarse</Link>
        </section>
      </NavContainer>
    );
  }

export default NavLogin

const NavContainer = styled.nav`
    

`