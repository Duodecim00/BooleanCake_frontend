import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPhone } from "react-icons/fa6";
function Footer() {
    return <>
            <div className='footer'>
                <h className="footerHeaderText">Más de 91 recetas disponibles</h>
                <h className="footerText">Elige entre una gran variedad de recetas disponibles en nuestro catalogo en linea</h>
                <div className='line'></div>
                <div className='footer2'>
                <div className='whoweare'>
                    <h className="footerText">¿Quiénes somos?</h>
                    <h className="footerText">Ponte en contacto con nosotros</h>
                </div>
                <div className='whoweare'>
                <h className="footerText">Ayuda y asistencia</h>
                    <h className="footerText">Politica y serviciosasdas</h>
                </div>
                <IconContext.Provider value={{ color: "white"}}>
  <div className='logos'>
  <FaFacebook className='logo'/>
  <FaInstagram className='logo'/>
  <FaPhone className='logo' />
  </div>
</IconContext.Provider>;
                </div>
            </div>
    </>;
}

export default Footer;