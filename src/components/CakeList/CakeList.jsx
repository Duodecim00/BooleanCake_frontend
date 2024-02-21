import React, { useState, useEffect, useRef } from 'react';
import './CakeList.css';
const CakeList = () => {
  const [cakes, setCakes] = useState(['Pastel de chocolate', 'Pastel de vainilla', 'Pastel de fresa']);
  const [newCake, setNewCake] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setNewCake(e.target.value);
  };

  const handleAddCake = () => {
    if (newCake.trim() !== '') {
      setCakes([...cakes, newCake]);
      setNewCake('');
    }
  };

  const handleEditCake = (index) => {
    setEditIndex(index);
  };

  const handleUpdateCake = (index, updatedCake) => {
    const updatedCakes = [...cakes];
    updatedCakes[index] = updatedCake;
    setCakes(updatedCakes);
    setEditIndex(null);
  };

  const handleDeleteCake = (index) => {
    const updatedCakes = [...cakes];
    updatedCakes.splice(index, 1);
    setCakes(updatedCakes);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setEditIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="cake-list-container">
      <ul>
        {cakes.map((cake, index) => (
          <li key={index} className="cake-item">
            {editIndex === index ? (
              <input
                type="text"
                value={cake}
                onChange={(e) => handleUpdateCake(index, e.target.value)}
                ref={inputRef}
              />
            ) : (
              <span className="cake-name">{cake}</span>
            )}
            <button className="delete-button" onClick={() => handleDeleteCake(index)}>Borrar</button>
            <button className="edit-button" onClick={() => handleEditCake(index)}>Editar</button>
          </li>
        ))}
      </ul>
  
      <input  className="cake-input" type="text" value={newCake} onChange={handleInputChange} />
      <button  className="add-cake-button" onClick={handleAddCake}>Agregar pastel</button>
    </div>
  );
};

export default CakeList;