import RegBand from "../../components/Reg-Band/RegBand";
import RegForm from "../../components/forms/Reg-Form/RegForm";
import styled from 'styled-components';
import './Register.css'

function RegPage(){

    return(
        <>
            <RegCont className="Register-container">
                <RegBand></RegBand>
                <RegForm></RegForm>
            </RegCont>
        </>
    )
}

export default RegPage

const RegCont = styled.div`

    

`