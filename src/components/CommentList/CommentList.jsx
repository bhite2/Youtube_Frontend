import { useState } from "react";

const CommentList = () => []

    const [comments, setComments] = useState{[]}
    
    async function getAllComments() {
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data)
        setSongs(response.data);
      }

    return (  );

 
export default CommentList;