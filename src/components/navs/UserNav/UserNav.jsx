import { useState } from "react";
import "./UserNav.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

// import SearchBar from '../../SearchBar/SearchBar';
function NavLogin() {
  const [clickCount, setClickCount] = useState(0);
  const rol = Cookies.get("role");
  const region = import.meta.env.VITE_REGION;
  var primaryColor;
  switch (region) {
    case "VEN":
      primaryColor = "#333"; // Rojo para la región US
      break;
    case "EU":
      primaryColor = "#020b5e"; // Azul para la región EU
      break;
    case "USA":
      primaryColor = "#b30e0e"; // Azul para la región EU
      break;
    case "HYRULE":
      primaryColor = "#d4af4a"; // Azul para la región EU
      break;
    default:
      primaryColor = "#ffd700"; // Negro por defecto
  }

  const handleTitleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    if ((clickCount + 1) % 4 === 0) {
      // llrevo 10 minutos riéndome btw
      const randomImages = [
        "https://pbs.twimg.com/media/DxRpe6-XcAAcqgv.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sehvCZ2DZD7qHYY15m80ZH5girhELOvV3Cu-XpAX0XUFounu3DhJOZUFr3lvafuSk5I",
        "https://i.pinimg.com/originals/53/92/b1/5392b14294984da8bc7930ac5fc0c5a1.jpg",
        "https://dg9aaz8jl1ktt.cloudfront.net/the_files/92354/std.jpg?1666730706",
        "https://i.ytimg.com/vi/skUuxxhW39k/sddefault.jpg",
        "https://www.entrelaluna.com/g/2/cesar/te-quiero-mucho-cesar.gif",
      ];
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      const randomImageUrl = randomImages[randomIndex];
      const windowWidth = 600;
      const windowHeight = 400;
      const left = (screen.width - windowWidth) / 2;
      const top = (screen.height - windowHeight) / 2;
      window.open(
        randomImageUrl,
        `VentanaEmergente`,
        `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`
      );
    }
  };

  return (
    <div className="nav-container">
      <h1
        className="nav-titulo"
        style={{ color: primaryColor }}
        onClick={handleTitleClick}
      >
        ButterCream!
      </h1>
      <section className="container">
        <Link className="nav-btn selected" to="/">
          Inicio
        </Link>
        <Link className="nav-btn" to="/aboutus">
          Nosotros
        </Link>
        <Link className="nav-btn" to="/contact">
          Contacto
        </Link>
        <Link className="nav-btn" to="/sabeslopeor">
          Sabias que..?
        </Link>
      </section>
      {rol ? (
        <section>
          {/* <SearchBar/> */}
          <Link>
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link>
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link>
            <span className="material-symbols-outlined">grid_view</span>
          </Link>
        </section>
      ) : (
        <section>
          <Link to="/login" className="nav-btn_login">
            Iniciar Sesion
          </Link>
          <Link to="/registro" className="nav-btn_register">
            Registrarse
          </Link>
        </section>
      )}
    </div>
  );
}

export default NavLogin;
