import React, {useState} from "react";
import './RegBand.css'
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function RegBand(){
    const [isComponentVisible, setComponentVisible] = useState(true);

    const hideComponentOnMobile = useMediaQuery({ maxWidth: 400  }); // Ocultar componente en dispositivos con ancho máximo de 768px
  // Función para alternar la visibilidad del componente
  const toggleComponentVisibility = () => {
    setComponentVisible(!isComponentVisible);
  };
    return(
        <>
         <div className="img-container_reg">
                    <Link to="/" className="band-tittle">Buttercream!</Link>  
            </div>   
            {/* <div> */}
      {/* {isComponentVisible && ( */}
        {/* <div> */}
          {/* Contenido del componente */}
        {/* </div>
      )} */}

      {/* {hideComponentOnMobile && (
        <button onClick={toggleComponentVisibility}>
          {isComponentVisible ? 'Ocultar' : 'Mostrar'} componente
        </button>
{/*  */}
     {/* {hideComponentOnMobile && (
        <div className="img-container_reg">
                    <Link to="/" className="band-tittle">Buttercream!</Link>  
            </div>  
      )} 
            </div> */}
        </>
    )

}

export default RegBand