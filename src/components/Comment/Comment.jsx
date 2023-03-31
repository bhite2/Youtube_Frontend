import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const Comment = (props) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
      allComments();
    }, [])
  
    async function allComments() {
      const response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.videoId}/`)
      console.log(response.data);
      setComments(response.data);
    }


    return ( 
        <div>
            <div>
                <CommentList comments={comments}/>
            </div>
            <div>
                <CommentForm allComments= {allComments} videoId={props.videoId}/>
            </div>
            
        </div>

     );
}
 
export default Comment;