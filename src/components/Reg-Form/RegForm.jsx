import React from "react";
import './RegForm.css'

function RegForm(){

    return(
        <>
            <div className="form-container_reg" >
                <h2 className="form-tittle_reg">Registrate</h2>
                <form action="/registro" method="post">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" required/>
                </form>
                <button type="submit" className="btn-submit_reg">Crear cuenta</button>`
            </div>
        </>
    )
}

export default RegForm