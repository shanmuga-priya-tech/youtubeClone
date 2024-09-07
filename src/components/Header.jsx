import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
  const dispatch = useDispatch();
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
      <div className="flex items-center col-span-10 ml-60">
        <input
          className="border p-2 px-3 w-[550px] rounded-l-3xl border-gray-400"
          type="text"
          placeholder="Search"
        />
        <button className="border py-2.5  px-3 rounded-r-3xl border-gray-400 bg-gray-200">
          <img
            className="w-5 h-5" // Keep the size fixed, without padding
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search-icon"
          />
        </button>
      </div>

      <div className="flex gap-6 items-center col-span-1">
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
