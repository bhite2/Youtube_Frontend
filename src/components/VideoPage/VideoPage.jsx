import React from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SearchBar from "../SearchBar/SearchBar";
import { useParams } from "react-router-dom";

const VideoPage = () => {
    const {videoId} = useParams()

    return ( 
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <VideoPlayer videoId = {videoId}/>
            </div>
            <div>
                <RelatedVideos videoId = {videoId}/>
            </div>
        </div>
     );
}
 
export default VideoPage;