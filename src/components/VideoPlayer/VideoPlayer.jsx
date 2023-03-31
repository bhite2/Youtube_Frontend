import React, { useState, useEffect } from "react";
import axios from "axios";
import { KEY } from "../../localKey";

const VideoPlayer = (props) => {

  const [videoDetails, setVideoDetails] = useState([]);

  
  async function fetchVideoDetails() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${props.videoId}&part=snippet%2CcontentDetails%2Cstatistics &key=${KEY}`
    );
    console.log(response.data.items);
    setVideoDetails(response.data.items);
  }

  useEffect(() => {
    fetchVideoDetails();
  }, []);

  return (
            
          <div>
            <div>
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameborder="0"
              ></iframe>
            </div>
            <div>
              {videoDetails.map((videoDetail) => {
                return(
                  <div>
                    <div>{videoDetail.snippet.title}</div>
                    <div>{videoDetail.snippet.description}</div>
                  </div>
                  
                 ) 
              })}
            </div>
          </div>  
        )

};

export default VideoPlayer;
