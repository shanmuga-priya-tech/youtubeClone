import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addToCache } from "../utils/searchSlice";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  //retreving result from if cache if already in cache
  const searchCache = useSelector((store) => store.search);

  //making an api call to search suggestion API
  useEffect(() => {
    const getSearchSuggestion = async () => {
      const res = await fetch(`${YOUTUBE_SEARCH_API}${searchText}`);
      const data = await res.json();
      setSuggestions(data[1]);
      //console.log(data[1]);

      //update cache
      dispatch(
        addToCache({
          [searchText]: data[1],
        })
      );
    };
    //setting the debouncing delay time
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setShowSuggestion(searchCache[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    //clearing the timer for each key press inorder to start fresh timer on every re-render
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, dispatch, searchCache]);

  //fn to toggle sidebar
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2  shadow-lg ">
      <div className=" flex gap-1 items-center col-span-1">
        <img
          className="w-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png "
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img
          className="w-24 "
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg.webp "
          alt="youtube-logo"
        />
      </div>
      <div>
        <div className="flex items-center col-span-10 ml-60">
          <input
            className="border p-2 px-3 w-[550px] rounded-l-3xl border-gray-400"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />

          <button className="border py-2.5  px-3 rounded-r-3xl border-gray-400 bg-gray-200">
            <img
              className="w-5 h-5" // Keep the size fixed, without padding
              src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
              alt="search-icon"
            />
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-5 ml-60 w-[550px] rounded-lg shadow-lg border border-gray-100 ">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center gap-5 py-2 hover:bg-gray-100 "
                >
                  <img
                    className="w-4 h-4" // Keep the size fixed, without padding
                    src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
                    alt="search-icon"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-6 items-center  col-start-13">
        <img
          className="w-6 "
          src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/video-512.png"
          alt="video-player"
        />
        <img
          className="w-6 "
          src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png"
          alt="notification"
        />
        <img
          className="w-6 "
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
