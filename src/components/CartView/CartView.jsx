import { useState, useEffect } from 'react';
import axios from 'axios';

function CartView() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:7338/api/v1/order/cart');
        setCartItems(response.data); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            <p>Producto: {item.product}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.unitPrice}</p>
            <p>Subtotal: ${item.subtotal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartView;
