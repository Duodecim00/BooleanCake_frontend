import './UserNav.css';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import RegionSelector from '../RegionSelector/RegionSelector';

function NavLogin() {
    return (
      <NavContainer className="nav-container">
        <h1 className="nav-titulo">ButterCream!</h1>
        <section className="container">

          <Link className="nav-btn selected" to="/">Inicio</Link>
          <Link className="nav-btn" to="/">Productos</Link>
          <Link className="nav-btn" to="/">Contacto</Link>

        </section>
        <section>
          <RegionSelector/>
        </section>
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