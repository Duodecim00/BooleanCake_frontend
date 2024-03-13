import { useState } from 'react';
import AdminNav from '../../components/navs/AdminNav/AdminNav.jsx';
import PostModal from "../../components/ModalAddProducts/ModalAddProducts.jsx";
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { SearchResultsList } from '../../components/SearchBar/SearchResultsList/SearchResultsList.jsx';
import ShowProducts from '../../components/ShowAllProducts/ShowAllProducts.jsx';


const Products = () => {
  const [results, setResults] = useState([]);
    return (
      <div>
        <AdminNav></AdminNav>
                <div className="SearchBar">
                  <div className="search-bar-container">
                    <SearchBar setResults={setResults}/>
                    <SearchResultsList results={results}/>
                  </div>
                </div>
        <ShowProducts/>
        <PostModal/>
      </div>

        
    );
  };
  
  export default Products;