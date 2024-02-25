import React from "react";
import { Link } from "react-router-dom";
import './AdminNav.css'

function AdminNav(){
    return(
        <>
        
            <nav className="nav-container">
                <h1 className="nav-titulo">ButterCream!</h1>
            <section className="container">
                <Link className="nav-btn" to="/products">Inventario de Productos</Link>
                <Link className="nav-btn" to="/adminInventory">Inventario de Ingredientes</Link>
            </section>
            <section>
                <Link><span class="material-symbols-outlined">search</span></Link>
                <Link><span class="material-symbols-outlined">person</span></Link>
                <Link><span class="material-symbols-outlined">grid_view</span></Link>
            </section>
            </nav>
        
        </>
    )
} 

export default AdminNav 