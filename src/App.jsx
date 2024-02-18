import React from 'react'
import './App.css'
import InicioPage from './Pages/Inicio';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<InicioPage />} />
      </Routes>
    </Router>
  );
}

export default App
