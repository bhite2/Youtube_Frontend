const CommentForm = (props) => {
    const [entries, setEntries] = useState([])

    function addNewEntry(entry){
      let tempEntries = [...entries, entry]
      setEntries(tempEntries);
    }

    return ( 
        
     );
}
 
export default CommentForm;