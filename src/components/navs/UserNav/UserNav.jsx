import './UserNav.css';
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
// import SearchBar from '../../SearchBar/SearchBar';
function NavLogin() {
  const rol = Cookies.get("rol");
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
      <div className="nav-container">
        <h1 className="nav-titulo" style={{color: primaryColor}}>ButterCream!</h1>
        <section className="container">

          <Link className="nav-btn selected" to="/">Inicio</Link>
          <Link className="nav-btn" to="/aboutus">Nosotros</Link>
          <Link className="nav-btn" to="/contact">Contacto</Link>
          <Link className="nav-btn" to="/sabeslopeor">Sabias que..?</Link>
          

        </section>
        {
                rol ? (
                <section>
                    {/* <SearchBar/> */}
                    <Link><span className="material-symbols-outlined">person</span></Link>
                    <Link><span className="material-symbols-outlined">grid_view</span></Link>
                </section>
                ): (
                <section>
                  <Link to="/login" className="nav-btn_login">Iniciar Sesion</Link>
                  <Link to="/registro" className="nav-btn_register">Registrarse</Link>
                </section>
                )
            }
      </div>
    );
  }

export default NavLogin