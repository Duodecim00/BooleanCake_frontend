import { useState, useEffect, useRef } from 'react';
import './CakeList.css';

const CakeList = () => {
  const [cakes, setCakes] = useState(['Pastel de chocolate','Rosa Pastel', 'Pastel de vainilla', 'Pastel de fresa']);
  const [newCake, setNewCake] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [updatedCake, setUpdatedCake] = useState('');
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

  const handleEditCake = (index, e) => {
    e.stopPropagation();
    setEditIndex(index);
    setNewCake(cakes[index]);
    setUpdatedCake(cakes[index]);
  };

  const handleUpdateCake = (index) => {
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

  const handleBlur = (index) => {
    handleUpdateCake(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      handleUpdateCake(index);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        handleUpdateCake(editIndex);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editIndex]);

  return (
    <div className="cake-list-container">
      <ul>
        {cakes.map((cake, index) => (
          <li key={index} className="cake-item">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={updatedCake}
                  onChange={(e) => setUpdatedCake(e.target.value)}
                  onBlur={() => handleBlur(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={inputRef}
                />
                {/* <button onClick={() => handleUpdateCake(index)}>Guardar</button> */}
              </div>
            ) : (
                  <span className="cake-name">{cake}</span>
                )}
                <button className="delete-button option-button" onClick={() => handleDeleteCake(index)}>Borrar</button>
                <button className="edit-button option-button" onClick={(e) => handleEditCake(index, e)}>Editar</button>
          </li>
        ))}
      </ul>

      <input className="cake-input" type="text" value={newCake} onChange={handleInputChange} />
      <button className="add-cake-button" onClick={handleAddCake}>Agregar pastel</button>
    </div>
  );
};

export default CakeList;