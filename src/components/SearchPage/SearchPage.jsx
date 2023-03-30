import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { KEY } from "../../localKey";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("Monster Jam Freestyle");

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
    <div>
      <div className="searchbar">
        <SearchBar
          search={searchInput}
          setSearch={setSearchInput}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="grid-container">
           {videos.map((video) => {
        return (
          <div className="videocard">
            <div>
              <Link to={`/video/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} />
              </Link>
            </div>
            <div className="title">{video.snippet.title}</div>
            <div className="description">{video.snippet.description}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SearchPage;
