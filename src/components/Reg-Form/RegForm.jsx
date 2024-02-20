import React from "react";
import './RegForm.css'
import {Link} from "react-router-dom";

function RegForm(){

    return(
        <>
            <div className="form-container" >
                <h2 className="form-tittle_reg">Registrate</h2>
                <form className="form-container_reg" action="/registro" method="post">
                    
                    <div className="form-grid-cell">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>

                    <div className="form-grid-cell">
                        <label htmlFor="usermane">Username</label>
                        <input type="text" id="user" name="user" required/>
                    </div>

                    <div className="form-grid-cell ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>

                    <div className="form-grid-cell ">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" name="contrasena" required/>
                    </div>

                    <div className="form-grid-cell-btn">
                        <button type="submit" className="btn-submit_reg">Crear cuenta</button>
                        <span className="form-text_reg">Ya tienes una cuenta? <Link className="form-text-link_reg" to="/login">Iniciar Sesion</Link></span>
                    </div>
                </form>
                
            </div>
        </>
    )
}

export default RegForm