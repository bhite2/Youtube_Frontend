import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { KEY } from "../../localKey";

const SearchPage = (props) => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("deadpool");

  async function fetchVideos() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=${KEY}&part=snippet&maxresult=6q=gravedigger`
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
    <div>
      <div className="searchbar">
        <SearchBar
          search={searchInput}
          setSearch={setSearchInput}
          handleSubmit={handleSubmit}
        />
      </div>
      {videos.map((video) => {
        return (
          <div className="container">
            <div>
              <img src={video.snippet.thumbnails.medium.url} />
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
