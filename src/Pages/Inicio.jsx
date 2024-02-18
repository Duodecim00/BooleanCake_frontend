import React from "react";
import NavLogin from '../components/Inicio-nav.jsx'
import InicioBnv from '../components/Inicio-bnv.jsx'

function InicioPage(){
    return(
        <>
            <div>
                <NavLogin></NavLogin>
                <InicioBnv></InicioBnv>
            </div>
        
        </>
    )
}

export default InicioPage