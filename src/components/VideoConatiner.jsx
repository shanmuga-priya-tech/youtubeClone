import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LINK } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoConatiner() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(YOUTUBE_VIDEO_LINK);
      const data = await res.json();
      //console.log(data);
      setVideos(data.items);
    };
    fetchVideo();
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoConatiner;
