import { useEffect, useState } from "react";
import {
  FILL_DISLIKE_IMG,
  FILL_LIKE_IMG,
  OUTLINE_DISLIKE_IMG,
  OUTLINE_LIKE_IMG,
  YOUTUBE_GET_CHANNEL_INFO_BY_ID,
  YOUTUBE_GET_VIDEO_INFO_BY_ID,
} from "../utils/constants";
import { formatCount } from "../utils/helper";

function Channelnfo({ videoId }) {
  const [videoInfo, setVideoInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const [likeCountNum, setLikeCountNum] = useState(0); // Initialize to 0
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const res = await fetch(
        `${YOUTUBE_GET_VIDEO_INFO_BY_ID}&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      const video = data.items?.[0];

      setVideoInfo(video);

      if (video) {
        // Set the like count after fetching video data
        setLikeCountNum(Number(video.statistics.likeCount));

        // Fetch Channel Info using the channelId
        const channelId = video.snippet.channelId;
        const channelRes = await fetch(
          `${YOUTUBE_GET_CHANNEL_INFO_BY_ID}&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const channelData = await channelRes.json();
        setChannelInfo(channelData.items?.[0]);
      }
    };
    fetchVideoDetail();
  }, [videoId]);

  //handle subscribe btn
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  // Like button handler
  const handleLike = () => {
    if (isLike) {
      // If already liked, undo the like
      setLikeCountNum((prevCount) => prevCount - 1);
      setIsLike(false);
    } else {
      // If not liked, increase like count
      setLikeCountNum((prevCount) => prevCount + 1);
      setIsLike(true);
      if (isDisLike) {
        setIsDisLike(false); // Reset dislike if it was active
      }
    }
  };

  const handleDislike = () => {
    if (isDisLike) {
      // If already disliked, undo the dislike
      setIsDisLike(false);
    } else {
      // If not disliked, set dislike
      setIsDisLike(true);
      setLikeCountNum((prevCount) => prevCount - 1);
      if (isLike) {
        //reset like
        setIsLike(false);
      }
    }
  };

  if (!videoInfo || !channelInfo) return <div>Loading...</div>;

  const { title, channelTitle } = videoInfo.snippet;
  const { viewCount } = videoInfo.statistics;
  const { thumbnails } = channelInfo.snippet;

  return (
    <div>
      <h1 className="font-bold text-xl pt-1">{title}</h1>
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center">
          <div>
            <img
              src={thumbnails?.default?.url}
              alt={channelTitle}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="pl-4">
            <h1 className="font-bold text-xl ">{channelTitle} ☑️</h1>
            <p className="text-gray-600">1M subscribers</p>
          </div>
          <button
            onClick={handleSubscribe}
            className={`py-2 px-5 ml-6 text-lg ${
              isSubscribed ? "bg-gray-100 text-black" : "bg-black text-white"
            } rounded-3xl cursor-pointer`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center px-5 py-2 bg-gray-200 rounded-3xl">
            {/* Like button */}
            <img
              className="w-7 h-7 mr-1 cursor-pointer"
              src={isLike ? FILL_LIKE_IMG : OUTLINE_LIKE_IMG}
              alt="like"
              onClick={handleLike}
            />
            <p>{formatCount(likeCountNum)}</p>

            {/* Dislike button */}
            <img
              className="w-8 h-8 ml-6 cursor-pointer"
              src={isDisLike ? FILL_DISLIKE_IMG : OUTLINE_DISLIKE_IMG}
              alt="dislike"
              onClick={handleDislike}
            />
          </div>
          <div className="flex items-center gap-1 px-5 py-2 bg-gray-200 rounded-3xl cursor-pointer">
            <img
              className="w-7 h-7 "
              src="https://img.icons8.com/?size=50&id=11504&format=png"
              alt="share"
            />
            <p>Share</p>
          </div>
          <div className="flex items-center gap-1 px-5 py-2 bg-gray-200 rounded-3xl cursor-pointer">
            <img
              className="w-7 h-7"
              src="https://img.icons8.com/?size=32&id=14100&format=png"
              alt="download"
            />
            <p>Download</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channelnfo;
