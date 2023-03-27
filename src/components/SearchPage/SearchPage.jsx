import React, {useState, useEffect} from "react";
import axios from "axios";
import './SearchPage.css';
import SearchBar from "../../components/SearchBar/SearchBar";
// import {KEY} from './localKey.js';

const SearchPage = (props) => {

    const [videos, setVideos] = useState([]);
    const key =  'AIzaSyD5zvbsn67fOSLOXa_1AqsN7ijcWb-gOqk';
    

    useEffect(() => {
        fetchVideos();
      }, [])

    async function fetchVideos() {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${key}&part=snippet&maxresult=6q=gravedigger`);
        console.log(response.data.items)
        setVideos(response.data.items);
      }

      const [searchInput, setSearchInput] = useState('');
      const query = searchInput

      const handleChange = (event) => {
          event.preventDefault();
          console.log(event.target.value)
          setSearchInput(event.target.value);
        };

    return ( 

      <div>
        <div>
          <SearchBar search={searchInput} setSearch={setSearchInput} change={handleChange}/>
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