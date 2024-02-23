import { useState, useEffect } from 'react';
import { deleteIngredient, getAllIngredient,  } from '../../Routes/ingredients.routes';

function ShowIngredient() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const ingredients = await getAllIngredient();
        console.log(ingredients);
        setData(ingredients.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    // Lógica para editar el elemento con el ID proporcionado
  };

  const handleDelete = (id) => {
        deleteIngredient(id);
  };

  return (
        <div>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div className="item_container" key={item._id}>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock}</p>
            <p>Unidad de medida: {item.unitMeasure}</p>
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

export default ShowIngredient;