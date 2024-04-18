// import { useEffect } from "react";
import { Link } from "react-router-dom";

import './AdminNav.css'
import '../UserNav/UserNav.css'
import Cookies from "js-cookie";

function AdminNav(){
    const rol = Cookies.get("role");
    const region = import.meta.env.VITE_REGION;
    var primaryColor;

    // function handleColor() {
    //     const hoverColor = region;
    //     document.documentElement.style.setProperty('--hover-color', hoverColor);
        
    // }
    
    // useEffect(() => {
    //     handleColor();
    // },[]);

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
    return(
        <>        
            <nav className="nav-container">
            <h1 className="nav-titulo" style={{color: primaryColor}}>ButterCream!</h1>
            <section className="container">
                <Link className="nav-btn" to="/products" >Inventario de Productos</Link>
                <Link className="nav-btn" to="/adminInventory">Inventario de Ingredientes</Link>
            </section>
            {
                rol ? (
                <section>
                    <Link to="/profile"><span className="material-symbols-outlined">person</span></Link>
                    <Link><span className="material-symbols-outlined">grid_view</span></Link>
                </section>
                ): (
                    <h1>puto</h1>
                )
            }
            </nav>
        
        </>
    )
} 

export default AdminNav 