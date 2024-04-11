
export default function ItemMenu(props){

        return(
                    <div className="card_container">
                    <img className="product--image"
                    src={props.url}
                    alt="product image"
                        />
                    <h2>{props.name}</h2>
                    <p className="price">${props.price}</p>

                    </div>

                    
        );
}