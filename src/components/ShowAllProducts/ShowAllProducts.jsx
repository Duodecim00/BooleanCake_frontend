import { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../../Routes/products.routes';
import './ShowAllProducts.css'

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
        <div className='cuadro'>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div  key={item._id}>
            <div className='slide'>

              <div className='block'>
               <p>{item.name}</p> 
              </div>

              <div className='block'>
                <p>Category: {item.category}</p>
              </div>
              <div className='block'>
                <p >Price: {item.price}</p>
              </div>
              <div className='block'>
                 <p >Stock: {item.storage}</p>
              </div>
              <div className='block'>
                <p >Fecha de vencimiento: {item.expireDate}</p>
              </div>
              <div className='block'>
              <button className='btnoption' onClick={() => handleEdit(item._id)}>Editar</button>
              <button className='btnoption' onClick={() => handleDelete(item._id)}>Borrar</button>
              </div>

                          <div className='sample'>
                <img src={item.image} alt={item.name} />
              </div>
            </div>

          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default ShowProducts;