import React from "react";
import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
import IngreList from '../../components/IngreList/IngreList.jsx'

function Inventory(){

    return(
        <>
        <div className="products-container">
            <NavLogin/>
            <h1 className="products-title">Ingredientes</h1>
            <IngreList/>
        </div>
        </>
    )
}

export default Inventory