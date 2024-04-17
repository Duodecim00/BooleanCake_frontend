import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);

  const refreshProducts = () => {
    setRefreshCount(refreshCount + 1);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, refreshProducts, refreshCount }}>
      {children}
    </ProductContext.Provider>
  );
};