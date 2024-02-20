import React from "react";
import RegBand from "../../components/Reg-Band/RegBand";
import LogForm from "../../components/Log-Form/LogForm";
import styled from 'styled-components';
import './Login.css'

function LoginPage(){

    return(
        <>
            <LogCont className="Login-container">
                <RegBand></RegBand>
                <LogForm></LogForm>
            </LogCont>
        </>
    )
}

export default LoginPage

const LogCont = styled.div`

    

`