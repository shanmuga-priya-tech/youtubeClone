import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_QUERY_LIST } from "../utils/constants";
import VideoCard from "./VideoCard";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const fetchSearchQuery = async () => {
      const res = await fetch(
        `${YOUTUBE_SEARCH_QUERY_LIST}${searchParams.get("search_query")}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`
      );
      const data = await res.json();

      setSearchResults(data.items);
    };
    fetchSearchQuery();
  }, [searchParams]);

  if (!searchResults) return null;

  return (
    <div className="flex  flex-wrap">
      {searchResults?.map((listItems) => (
        <Link
          to={
            listItems.id.videoId
              ? `/watch?v=${listItems.id.videoId}`
              : `/playlist?list=${listItems.id.playlistId}`
          }
        >
          <VideoCard key={listItems.title} info={listItems} />
        </Link>
      ))}
    </div>
  );
}

export default SearchPage;
