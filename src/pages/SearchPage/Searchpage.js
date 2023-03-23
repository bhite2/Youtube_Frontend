import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchPage from "../../components/SearchPage/SearchPage";
import './SearchPage.css';

const Search = (props) => {

   
    return ( 
        <div>
            <SearchBar/>
            <SearchPage/>
        </div>
     );
}
 
export default Search;