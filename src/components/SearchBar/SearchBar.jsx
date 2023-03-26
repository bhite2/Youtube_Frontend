import React, {useState} from "react";

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSearchInput(e.target.value);
      };

    return ( 
        <div>
            <form>
                <input value = {searchInput} type= 'text' placeholder="Search..." onChange={handleChange}/>
                <button onClick={(e) => setSearchInput(e.target.value)}>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;