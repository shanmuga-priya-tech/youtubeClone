import useChannelInfo from "../hooks/useChannelInfo";
import { formatCount } from "../utils/helper";

function VideoCard({ info }) {
  const { channelInfo } = useChannelInfo(info?.snippet?.channelId);

  const profile = channelInfo?.snippet?.thumbnails?.default?.url;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 h-[20rem]  p-2 m-2 ml-3 cursor-pointer shadow-lg  ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <div className="flex gap-3">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={profile}
              alt="channel-img"
            />
          </div>
          <div>
            <li className="text-gray-500">{channelTitle}</li>
            <li className="text-gray-500">
              {formatCount(statistics.viewCount)} views
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default VideoCard;
