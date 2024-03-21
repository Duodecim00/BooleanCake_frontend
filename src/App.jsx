import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import InicioPage from './Pages/Inicio/Inicio.jsx';
import RegPage from './Pages/Register/Register.jsx';
import LoginPage from './Pages/login/Login.jsx';
import Products from './Pages/Products/Products.jsx'
import Inventory from './Pages/Inventory/Inventory.jsx';
import SplashScreen from './components/splashScreen/SplashScreen.jsx';
import Testfb from './Pages/test/testfirebase.jsx';

function App() {
  // const region=import.meta.env.VITE_REGION

  return (
      <>
        <SplashScreen/>        
        <Router>
          <Routes>
            <Route exact path="/" element={<InicioPage/>}/>
            <Route exact path="/registro" element={<RegPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/adminInventory" element={<Inventory/>}/>
            <Route exact path="/test" element={<Testfb/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App
