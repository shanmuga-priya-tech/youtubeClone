export const YOUTUBE_VIDEO_LINK = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHAT_COUNT = 20;

export const YOUTUBE_GET_VIDEO_INFO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_GET_CHANNEL_INFO_BY_ID =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet";

export const FILL_LIKE_IMG =
  "https://img.icons8.com/?size=24&id=83166&format=png";
export const OUTLINE_LIKE_IMG =
  "https://img.icons8.com/?size=24&id=3RR8QoUJMAri&format=png";

export const FILL_DISLIKE_IMG =
  "https://img.icons8.com/?size=32&id=2CXfjId0nLMx&format=png";
export const OUTLINE_DISLIKE_IMG =
  "https://img.icons8.com/?size=32&id=15957&format=png";

export const MAX_DESCRIPTION_LENGTH = 200;
