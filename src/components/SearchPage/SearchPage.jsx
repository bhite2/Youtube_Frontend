import React, {useState, useEffect} from "react";
import axios from "axios";
import './SearchPage.css';
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (props) => {

    const [videos, setVideos] = useState([]);
    const key = 'AIzaSyD5zvbsn67fOSLOXa_1AqsN7ijcWb-gOqk';
    const query = props.searchInput

    useEffect(() => {
        fetchVideos();
      }, [])

    async function fetchVideos() {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${key}&part=snippet&maxresult=6q=gravedigger`);
        console.log(response.data.items)
        setVideos(response.data.items);
      }


    return ( 

      <div>
        <div>
          <SearchBar/>
        </div>
         {videos.map((video) => {
          return (
          
          <div className='container'>  
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