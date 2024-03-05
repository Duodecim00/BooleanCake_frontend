import { useEffect } from 'react';
import './SplashScreen.css'
import { preLoaderAnim } from './animations';
const SplashScreen = () => {
  useEffect(()=>{
      preLoaderAnim()
    },[])


  return (
    <div className="preloader">
      <div className="texts-container">
        <span className='text'>Buttercream!</span>
      </div>
    </div>
  );
};

export default SplashScreen;