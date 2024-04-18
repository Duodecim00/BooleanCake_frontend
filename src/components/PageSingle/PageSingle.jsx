
import React, { useEffect, useState } from 'react';
import "./PageSingle.css"
import img from "../../assets/images/band-regimg.jpg"
import { useSearchParams } from 'react-router-dom';
import { searchProduct } from "../../api/products.api";

function PageSingle(props) {
    let baseurl = window.location.href
    const myArray = baseurl.split("/");
    const [productData,setproductData] = useState([])

async function obtenerdatos() {
    var datos = await searchProduct(myArray[4])
    
    console.log(datos.data[0])
    setproductData(datos.data[0])
}

 useEffect(() => {
    obtenerdatos()
  },[]);

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
                <img className='img' src={productData.image} alt="torta" />
            </div>

            <div className='product-details'>

                <h className="product-header">{productData.name}</h>

                <div className='product-description'>
                    <h className="description-text">Stock: {productData.stock}</h>
                </div>

                <div className='price'>${productData.price}</div>

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