import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_QUERY_LIST } from "../utils/constants";

function SearchPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchSearchQuery = async () => {
      //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
      const res = await fetch(
        `${YOUTUBE_SEARCH_QUERY_LIST}${searchParams.get("search_query")}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      const data = await res.json();
      console.log(data);
    };
    fetchSearchQuery();
  }, [searchParams]);
  return <div>search</div>;
}

export default SearchPage;
