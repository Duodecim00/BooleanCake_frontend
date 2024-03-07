
const FoticoComponent = ({ selectedOption }) => {
  let imageUrl;
  if (selectedOption === 'China') {
    imageUrl = '/src/assets/images/china.png';
  } else if (selectedOption === 'EU') {
    imageUrl = '/src/assets/images/unioneuropea.png';
  } else if (selectedOption === 'US') {
    imageUrl = '/src/assets/images/USA.png';
  } else if (selectedOption === 'Hyrule') {
    imageUrl = '/src/assets/images/jairo.webp';
  }

  return <img src={imageUrl} alt="Imagen" 
    style={{ width: '50px', height: '50px', borderRadius: '15px' }}
  />;
};

export default FoticoComponent;