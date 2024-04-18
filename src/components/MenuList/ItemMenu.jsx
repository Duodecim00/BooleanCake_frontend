
import './MenuList.css'
import { useState } from 'react';
import { addToCart } from '../../api/cart.api';

export default function ItemMenu(props){

    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async () => {
        try {
            setIsAdding(true);
            await addToCart(props.name); // Llama a la función addToCart con el nombre del producto como parámetro
            setIsAdding(false);
            console.log('Producto añadido al carrito correctamente');
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
            setIsAdding(false);
        }
    };

        return(
                    <div className="item_container">
                        <div className="image_container">
                            <img className="product--image"
                            src={props.url}
                            alt="product image"
                                />
                        </div>
                        <div className="information">
                            <h3 className="nameProduct">{props.name}</h3>
                            <p className="prices">${props.price}</p>
                            <div className='controls'>
                                <button onClick={console.log('hoola')} className='plusButton'><span style={{color:'white',backgroundColor:'black'}} className="material-symbols-outlined">arrow_back_ios</span></button>
                                {/* <h1 className='amount'>{count}</h1> */}
                                <button onClick={console.log('hola')} className='plusButton'><span style={{color:'white',backgroundColor:'black'}} className="material-symbols-outlined">arrow_forward_ios</span></button>
                            </div>
                            <div className='add_container'>
                                <button onClick={handleAddToCart} className='addProduct' disabled={isAdding}>
                                    {isAdding ? 'Agregando...' : 'Agregar al carrito'}
                                </button>
                            </div>
                        </div>
                    </div>

                    
        );
}