import "./SearchResultsList.css"
import { SearchResult } from "./SearchResult";


export const SearchResultsList = ({results}) => {
    return(
        <div className="results-list">
        <span>aqui van los resultados</span>
            {
                results.map((result, id) =>{
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    )
}