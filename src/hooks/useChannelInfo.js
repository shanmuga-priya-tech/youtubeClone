// hooks/useChannelInfo.js
import { useState, useEffect } from "react";
import { YOUTUBE_GET_CHANNEL_INFO_BY_ID } from "../utils/constants";

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!channelId) return; // Early return if no channelId

    const fetchChannelInfo = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${YOUTUBE_GET_CHANNEL_INFO_BY_ID}&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        setChannelInfo(data.items?.[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannelInfo();
  }, [channelId]);

  return { channelInfo, loading, error };
};

export default useChannelInfo;
