function VideoCard({ info }) {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 h-[20rem]  p-2 m-2 ml-3 cursor-pointer shadow-lg  ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics.viewCount}views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
