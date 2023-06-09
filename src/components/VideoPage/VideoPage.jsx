import React from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SearchBar from "../SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import "./VideoPage.css"


const VideoPage = () => {
  const { videoId } = useParams();

  return (
    <div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="flex-container">
        <div className="flex-a">
          <VideoPlayer videoId={videoId} />
          <Comment videoId={videoId}/>
        </div>
        <div className="flex-b">
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
