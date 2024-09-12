import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CHANNEL,
  DOWNLOAD_ICON,
  GAME,
  HISTORY,
  HOME,
  KIDS,
  LIKED_VIDEO,
  LIVE,
  MOVIES,
  MUSIC,
  NEWS,
  PLAYLIST,
  PREMIUM,
  SHOPPING,
  SHORTS,
  SPORTS,
  STUDIO,
  SUBSCRIPTION,
  TRENDING,
  UTUBE_MUSIC,
  VIDEO,
  WATCH_LATER,
} from "../utils/constants";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className="shadow-lg h-screen w-28 text-[12px] pt-8">
      <ul>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <Link to="/">
            <img className="w-8" src={HOME} alt="home" />
            Home
          </Link>
        </li>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <img className="w-8" src={SHORTS} alt="shorts" />
          Shorts
        </li>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <img className="w-8" src={SUBSCRIPTION} alt="subscription" />
          Subscriptions
        </li>
        <li className="flex flex-col items-center py-3 cursor-pointer hover:bg-gray-200">
          <img className="w-8" src={DOWNLOAD_ICON} alt="downloads" />
          Downloads
        </li>
      </ul>
    </div>
  ) : (
    <div className=" shadow-lg w-56 ">
      <ul className="p-5">
        <li>
          <Link
            to="/"
            className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer"
          >
            <img className="w-5" src={HOME} alt="home" />
            Home
          </Link>
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={SHORTS} alt="shorts" />
          Shorts
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={SUBSCRIPTION} alt="subscription" />
          Subscriptions
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className=" px-5 font-bold text-xl pt-3">You</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={CHANNEL} alt="channel" />
          Your Channel
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={HISTORY} alt="history" />
          History
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={PLAYLIST} alt="playlist" />
          Playlists
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={VIDEO} alt="vidoes" />
          Your videos
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={WATCH_LATER} alt="watch later" />
          Watch Later
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={LIKED_VIDEO} alt="liked videos" />
          Liked videos
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={DOWNLOAD_ICON} alt="downloads" />
          Downloads
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-xl pt-3">Subscriptions</h1>
      <ul className="p-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={MUSIC} alt="music" />
          Music
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={SPORTS} alt="sports" />
          Sports
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={GAME} alt="game" />
          Gaming
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={MOVIES} alt="movies" />
          Movies
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-xl pt-3">Explore</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={TRENDING} alt="trending" />
          Trending
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={SPORTS} alt="sports" />
          Sports
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={SHOPPING} alt="shopping" />
          Shopping
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={NEWS} alt="news" />
          News
        </li>

        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img className="w-5" src={LIVE} alt="live" />
          Live
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-lg pt-3">More Form YouTube</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2">
          <img className="w-5" src={PREMIUM} alt="premium" />
          YouTube Premium
        </li>
        <li className="flex gap-3 py-2">
          <img className="w-5" src={STUDIO} alt="studio" />
          YoutUbe Studio
        </li>
        <li className="flex gap-3 py-2">
          <img className="w-5" src={UTUBE_MUSIC} alt="music" />
          YouTube Music
        </li>
        <li className="flex gap-3 py-2">
          <img className="w-5" src={KIDS} alt="kids" />
          YouTube Kids
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
