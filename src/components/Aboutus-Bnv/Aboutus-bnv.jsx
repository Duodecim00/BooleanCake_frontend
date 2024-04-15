import styled from "styled-components";
import './Aboutus-bnv.css'

function AboutusBnv(){
    const region = import.meta.env.VITE_REGION;
    var primaryColor;
    var imagelanding;
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
    switch (region) {
        case 'VEN':
          imagelanding = '/src/assets/images/InicioCupcake.png'; // Rojo para la región US
          break;
        case 'EU':
          imagelanding = '/src/assets/images/unioneurope2.jpeg'; // Azul para la región EU
          break;
        case 'USA':
          imagelanding = '/src/assets/images/usacakecraig.jpg'; // Azul para la región EU
          break;
        case 'PERU':
          imagelanding = '/src/assets/images/sopita.jpeg'; // Azul para la región EU
          break;
        case 'HYRULE':
          imagelanding = "/src/assets/images/carrotcake.png"; // Azul para la región EU
          break;
        default:
          imagelanding = "/src/assets/images/InicioCupcake.png"; // Negro por defecto
      }
    return <>
        <BnvDiv className="div-container">
            <div className="text-container">
                <h3 className="text-tittle">Buttercream</h3>
                <p className="text-pad">
                Nosotros somos Buttercream, una exquisita repostería que se especializa en crear deliciosos postres artesanales con un toque único y creativo.
                Nuestros productos están elaborados con ingredientes de la más alta calidad y con un cuidado especial en cada detalle. 
                En Buttercream, nos apasiona endulzar la vida de nuestros clientes con sabores irresistibles y presentaciones elegantes. ¡Déjanos ser parte de tus momentos especiales y disfruta de la dulzura de Buttercream!
                </p>
            </div>
            <div className="img-container">
                <img src={imagelanding} alt="Una tortica"/>
            </div>
        </BnvDiv>
    
    </>   
}

export default AboutusBnv


const BnvDiv = styled.div`
`