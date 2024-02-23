import { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../../Routes/products.routes';

function ShowProducts() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const products = await getAllProducts();
        console.log(products);
        setData(products.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    // Lógica para editar el elemento con el ID proporcionado
  };

  const handleDelete = (id) => {
        deleteProduct(id);
  };

  return (
        <div>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.storage}</p>
            <p>Fecha de vencimiento: {item.expireDate}</p>
            <img src={item.image} alt={item.name} />
            <button onClick={() => handleEdit(item._id)}>Editar</button>
            <button onClick={() => handleDelete(item._id)}>Borrar</button>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default ShowProducts;