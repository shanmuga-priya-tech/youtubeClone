import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_PLAYLIST } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

function PlayList() {
  const [searchParams] = useSearchParams();
  const playListId = searchParams.get("list");
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlayList = async () => {
      const res = await fetch(
        `${YOUTUBE_PLAYLIST}${playListId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();

      setPlaylist(data.items);
    };
    fetchPlayList();
  }, [playListId]);

  if (!playlist) return null;

  return (
    <div className="flex flex-wrap">
      {playlist?.map((listItem) => (
        <Link
          to={`/watch?v=${listItem.contentDetails.videoId}`}
          key={listItem.contentDetails.videoId}
        >
          <VideoCard info={listItem} />
        </Link>
      ))}
    </div>
  );
}

export default PlayList;
