import RegBand from "../../components/Reg-Band/RegBand";
import LogForm from "../../components/forms/Log-Form/LogForm";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import './Login.css'

function LoginPage(){
    const rol = Cookies.get("rol")
    if(rol){
        return <Navigate to="/"></Navigate>
    }else {
            return(
                <>
                    <div className="Login-container">
                        <RegBand></RegBand>
                        <LogForm></LogForm>
                    </div>
                </>
            )
    }

}

export default LoginPage