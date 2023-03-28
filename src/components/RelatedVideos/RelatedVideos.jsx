import React, {useState, useEffect} from "react";
import axios from "axios";
import { KEY } from "../../localKey";

const RelatedVideos = (props) => {

    const [relatedVideos, setRelatedVideos] = useState([]);

  
    async function fetchRelatedVideos() {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}&part=snippet&maxResults=3`
      );
      console.log(response.data.items);
      setRelatedVideos(response.data.items);
    }

    useEffect(() => {
        fetchRelatedVideos();
      }, []);

    return ( 
        <div>
        {relatedVideos.map((relatedvideo) => {
        return (
          <div>
            <div>
              <img src={relatedvideo.snippet.thumbnails.default.url} />
            </div>
            <div>{relatedvideo.snippet.title}</div>
          </div>
        );
      })}
        </div>
     );
}
 
export default RelatedVideos;