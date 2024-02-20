import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import InicioPage from './Pages/Inicio/Inicio.jsx';
import RegPage from './Pages/Register/Register.jsx';
import LoginPage from './Pages/login/Login.jsx';
import CakeList from './components/CakeList/CakeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPage/>}/>
        <Route exact path="/registro" element={<RegPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/products" element={<CakeList/>}/>
        

      </Routes>
    </Router>
  );
}

export default App
