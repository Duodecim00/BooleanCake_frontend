import React from "react";
import RegBand from "../components/Reg-Band/RegBand";
import RegForm from "../components/Reg-Form/RegForm";
import styled from 'styled-components';


function RegPage(){

    return(
        <>
            <RegCont>
                <RegBand></RegBand>
                <RegForm></RegForm>
            </RegCont>
        </>
    )
}

export default RegPage

const RegCont = styled.div`

    

`