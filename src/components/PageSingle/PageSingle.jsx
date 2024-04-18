import { useState } from 'react';
import "./PageSingle.css"
import img from "../../assets/images/band-regimg.jpg"

function PageSingle() {
    const [count, setCount] = useState(0);
    function subir() {
        setCount(count + 1)
    }
    function bajar() {
        setCount(count - 1)
    }
    return (
        
        <div className='div-container'>
            
           <div className='product-container'>

            <div className='product-img'>
                <img className='img' src={img} alt="torta" />
            </div>

            <div className='product-details'>

                <h className="product-header">Pastel de chocolate</h>

                <div className='product-description'>
                    <h className="description-text">Preparacion: 15min</h>
                    <h className="description-text">Coccion: 20min</h>
                    <h className="description-text">Dificultad: Dificil</h>
                </div>

                <div className='price'>$23.00</div>

                <div className='controles'>
                    <button onClick={bajar} className='button'><span style={{color:'white',backgroundColor:'black'}} className="material-symbols-outlined">arrow_back_ios</span></button>
                    <h1 className='amount'>{count}</h1>
                    <button onClick={subir} className='button'><span style={{color:'white',backgroundColor:'black'}} class="material-symbols-outlined">arrow_forward_ios</span></button>
                </div>

                <button className='add'>Agregar al carrito</button>
            </div>
           </div>
        </div>
    );
}

export default PageSingle;