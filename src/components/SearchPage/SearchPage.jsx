import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { KEY } from "../../localKey";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("Monster Jam");

  async function fetchVideos() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=${KEY}&part=snippet&maxResults=6`
    );
    console.log(response.data.items);
    setVideos(response.data.items);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchVideos();
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <div className="searchbar">
        <SearchBar
          search={searchInput}
          setSearch={setSearchInput}
          handleSubmit={handleSubmit}
        />
      </div>
           {videos.map((video) => {
        return (
          <div>
            <div>
              <Link to={`/video/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} />
              </Link>
            </div>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
