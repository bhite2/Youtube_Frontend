import React, { useState } from "react";
import axios from "axios";

const CommentList = () => {
  const [comments, setComments] = useState([])

  async function allComments() {
    const response = await axios.get("http://127.0.0.1:8000/api/comments/all/")
    console.log(response.data);
    setComments(response.data);
  }


  return ( 
    
    <div>
      {comments.map((comment) => {
        return (
          <div>
          {comment.text}
          </div>
      )
     })}
    </div>
  );
  
}

 
export default CommentList;