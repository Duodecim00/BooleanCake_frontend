import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import InicioPage from './Pages/Inicio';
import RegPage from './Pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPage/>}/>
        <Route exact path="/registro" element={<RegPage/>}/>
      </Routes>
    </Router>
  );
}

export default App
