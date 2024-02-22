import React from 'react';
import NavLogin from '../../components/Inicio-Nav/Inicio-nav';
import CakeList from '../../components/CakeList/CakeList';
// import './Products.css';

const Products = () => {
    return (
      <div className="products-container">
        <NavLogin/>
        <h1 className="products-title">Productos</h1>
        <CakeList/>
      </div>
    );
  };
  
  export default Products;