import styled from "styled-components";
import './Inicio-bnv.css'

function InicioBnv(){
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
                <h3 className="text-tittle">Bakery</h3>
                <p className="text-pa">
                    Deliciosas tartas personalizadas. Haz que tus vacaciones sean aun mejores con nosotros tendras tranquilidad sobre tus eventos
                </p>
                <button className="btn-leer" style={{backgroundColor: primaryColor}}>Leer mas</button>
            </div>
            <div className="img-container">
                <img src={imagelanding} alt="Una tortica"/>
            </div>
        </BnvDiv>
    
    </>   
}

export default InicioBnv


const BnvDiv = styled.div`
`