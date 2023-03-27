
const SearchBar = (props) => {
    
    return ( 
        <div>
            <form onSubmit={(event) => props.setSearch(event.target.value)}>
                <input value = {props.search} type= 'text' placeholder="Search..." onChange={props.change} />
                <button>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;