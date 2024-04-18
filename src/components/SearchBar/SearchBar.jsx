import { useState, } from 'react';
import {FaSearch} from "react-icons/fa"
import './SearchBar.css'
import {getAllProducts,} from '../../api/products.api';


function SearchBar({setResults}){

    const [input, setInput]= useState("")

    const fetchData = (value) => {

        //data sin filtrar
        const results = getAllProducts();
        
        //filtrar data
        
        //setResults(results);
        console.log(results);
        //data filtrada
        //searchProduct(value)
       // fetch("https://jsonplaceholder.typicode.com/users")
       // .then((response) => response.json())
       // .then((json) =>{
       //     const results = json.filter((user) =>{
       //         return (value && user && user.name && user.name.toLowerCase().includes(value)) 
                
       //     });
       //     setResults(results);
       // });
    };

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    };

    return(
  
            <div className='input-wrapper'>
                <input placeholder='recetas' 
                value={input} 
                onChange={(e) => handleChange(e.target.value)} />
                    <FaSearch id='search-icon'/>
            </div>
           
 
    );

}

export default SearchBar;