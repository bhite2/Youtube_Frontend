import React, {useState, useEffect} from "react";
import axios from "axios";

const SearchPage = () => {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetchVideos();
      }, [])

    async function fetchVideos() {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=gravedigger&key=AIzaSyD5zvbsn67fOSLOXa_1AqsN7ijcWb-gOqk&part=snippet&maxresult=5q=gravedigger');
        console.log(response.data)
        setVideo(response.data);
      }


    return ( 

      <div>
        Hello World
      </div>
 
     );
}
 
export default SearchPage;