import React, { useState } from 'react';
import './InputText.css'
const InputText = ({ label, type, validationFunctions }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    setError('');
  };

  const handleBlur = () => {
    // Validar el texto ingresado utilizando las funciones de validación
    validationFunctions.forEach((validationFunction) => {
      const errorMessage = validationFunction(text);
      if (errorMessage) {
        setError(errorMessage);
      }
    });
  };

  return (
    <div className=''>
      <label className='labelInput'>{label}</label>
      <input className=''
        type={type}
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default InputText;