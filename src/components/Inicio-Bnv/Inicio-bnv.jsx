import styled from "styled-components";
import './Inicio-bnv.css'

function InicioBnv(){

    return <>
        <BnvDiv className="div-container">
            <div className="text-container">
                <h3 className="text-tittle">Bakery</h3>
                <p className="text-pa">
                    Deliciosas tartas personalizadas. Haz que tus vacaciones sean aun mejores con nosotros tendras tranquilidad sobre tus eventos
                </p>
                <button className="btn-leer">Leer mas</button>
            </div>
            <div className="img-container">
                <img src="/src/assets/images/InicioCupcake.png" alt="Una tortica"/>
            </div>
        </BnvDiv>
    
    </>   
}

export default InicioBnv


const BnvDiv = styled.div`
`