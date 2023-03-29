import React, {useState, useEffect} from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import { Link } from "react-router-dom";

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
              <Link to={`/video/${relatedvideo.id.videoId}`}>
                <img src={relatedvideo.snippet.thumbnails.default.url} />
              </Link>
              
            </div>
            <div>{relatedvideo.snippet.title}</div>
          </div>
        );
      })}
        </div>
     );
}
 
export default RelatedVideos;