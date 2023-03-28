
const SearchBar = (props) => {
    
    return ( 
        <div>
            <form onSubmit={props.handleSubmit}>
                <input value = {props.search} type= 'text' placeholder="Search..." onChange={(event) => props.setSearch(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;