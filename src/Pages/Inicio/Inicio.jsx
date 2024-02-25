import React from "react";
import NavLogin from "../../components/UserNav/UserNav.jsx";
import InicioBnv from '../../components/Inicio-Bnv/Inicio-bnv.jsx'


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