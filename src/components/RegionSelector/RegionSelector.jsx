import { useState } from 'react';
import FoticoComponent from './FoticoComponent';
import './styleSelector.css'
const RegionSelector = () => {
  const [selectedOption, setSelectedOption] = useState('China');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='selectContainer'>
      <select value={selectedOption} onChange={handleOptionChange}
      style={{ width: '70px', height: '50px', borderRadius: '15px' }}>
        <option value="China">China</option>
        <option value="EU">EU</option>
        <option value="US">US</option>
        <option value="Hyrule">Hyrule</option>
      </select>
      <FoticoComponent selectedOption={selectedOption} />
    </div>
  );
};

export default RegionSelector;