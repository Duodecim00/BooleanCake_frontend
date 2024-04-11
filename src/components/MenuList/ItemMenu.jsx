
import './MenuList.css'
export default function ItemMenu(props){

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
                                <button className='addProduct'>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                    
        );
}