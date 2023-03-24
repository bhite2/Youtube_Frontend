import React, {useState, useEffect} from "react";
import axios from "axios";

const SearchPage = (props) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
      }, [])

    async function fetchVideos() {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=airjordan1&key=AIzaSyD5zvbsn67fOSLOXa_1AqsN7ijcWb-gOqk&part=snippet&maxresult=5q=gravedigger');
        console.log(response.data.items)
        setVideos(response.data.items);
      }


    return ( 

      <div>
         {videos.map((video) => {
          return (
          <div>  
            <div>
              <img src={video.snippet.thumbnails.medium.url}/>
              
            </div>
            <div>
              {video.snippet.title}
            </div>
            <div>
              {video.snippet.description}
            </div>
          </div>
          )
         })}
 
      </div>
 
     );
}
 
export default SearchPage;