import React from "react";
import './LogForm.css'
import {Link} from "react-router-dom";

function LogForm(){

    return(
        <>
            <div className="component-container_log" >
                <h2 className="form-tittle_log">Bienveido/a de vuelta!</h2>
                <form className="container-form-grid_log" action="/login" method="post">
                    
                    <div className="form-grid-cell_log ">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>

                    <div className="form-grid-cell_log ">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" name="contrasena" required/>
                    </div>

                    <div className="form-grid-cell-btn_log">
                        <button type="submit" className="btn-submit_log">Iniciar Sesion</button>
                        <span className="form-text_reg">No tienes una cuenta? <Link className="form-text-link_reg" to="/registro">Registrate</Link></span>
                    </div>
                    
                </form>
                
            </div>
        </>
    )
}

export default LogForm