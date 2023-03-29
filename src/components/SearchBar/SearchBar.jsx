import { Link } from "react-router-dom";
import "./SearchBar.css"

const SearchBar = (props) => {
    
    return ( 
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input className="searchbar"  value = {props.search} type= 'text' placeholder="Search..." onChange={(event) => props.setSearch(event.target.value)} />
                </div>
                <div>
                    <Link to="/search">
                        <button>Search</button>
                    </Link>
                    
                </div>
            </form>
        </div>
     );
}
 
export default SearchBar;