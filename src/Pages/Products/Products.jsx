import { useState } from 'react';
import PostModal from "../../components/ModalAddProducts/ModalAddProducts.jsx";
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { SearchResultsList } from '../../components/SearchBar/SearchResultsList/SearchResultsList.jsx';
import ShowProducts from '../../components/ShowAllProducts/ShowAllProducts.jsx';
import RenderNav from '../../components/navs/RenderNav/RenderNav.jsx';
// import { ProductProvider } from '../../contexts/ProductContext/ProductContext.jsx';


const Products = () => {
  const [results, setResults] = useState([]);
    return (
      <div>
          <RenderNav/>
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