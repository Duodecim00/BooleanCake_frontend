import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import InicioPage from './Pages/Inicio';
import RegPage from './Pages/Register/Register.jsx';
import Login from './Pages/login/login';
import CakeList from './components/CakeList/CakeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPage/>}/>
        <Route exact path="/registro" element={<RegPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/products" element={<CakeList/>}/>
        

      </Routes>
    </Router>
  );
}

export default App
