import axios from 'axios';

export const addToCart = async (productName) => {
    try {
        const response = await axios.post(`http://localhost:7338/api/v1/order/cart/${productName}`);
        return response.data; 
    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        throw new Error('Error al agregar producto al carrito');
    }
};