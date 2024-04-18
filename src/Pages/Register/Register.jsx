import RegBand from "../../components/Reg-Band/RegBand";
import RegForm from "../../components/forms/Reg-Form/RegForm";

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import './Register.css'

function RegPage(){
    const rol = Cookies.get("rol")
    if(rol){
       return <Navigate to="/"></Navigate>
        // return null 
    }else {
        return(
            <>
                <div className="Register-container">
                    <RegBand></RegBand>
                    <RegForm></RegForm>
                </div>
            </>
        )
    }
}

export default RegPage