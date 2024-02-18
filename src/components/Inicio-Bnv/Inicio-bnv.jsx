import React from "react";
import styled from "styled-components";
import './Inicio-bnv.css'

function InicioBnv(){

    return <>
    
        <BnvDiv className="div-container">
            <div className="text-container">
                <h1>Buttercream <span>- Deliciosas tartas personalizadas</span></h1>
                <p>Haz que tus vacaciones sean aun mejores. Con nosotros tendras tranquilidad sobre tus eventos</p>
            </div>
            <div className="img-container">
                <img src="../public/images/InicioTorta.png" alt="Una tortica"/>
            </div>
        </BnvDiv>
    
    </>   
}

export default InicioBnv


const BnvDiv = styled.div`
`