import { useSelector } from "react-redux";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className="shadow-lg h-screen w-28 text-[12px] pt-8">
      <ul>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/2948/2948025.png"
            alt="home"
          />
          Home
        </li>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/15768/15768387.png"
            alt="shorts"
          />
          Shorts
        </li>
        <li className="flex flex-col items-center  py-3 cursor-pointer hover:bg-gray-200">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
            alt="subscription"
          />
          Subscriptions
        </li>
        <li className="flex flex-col items-center py-3 cursor-pointer hover:bg-gray-200">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/3502/3502477.png"
            alt="downloads"
          />
          Downloads
        </li>
      </ul>
    </div>
  ) : (
    <div className=" shadow-lg w-56 ">
      <ul className="p-5">
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2948/2948025.png"
            alt="home"
          />
          Home
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/15768/15768387.png"
            alt="shorts"
          />
          Shorts
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
            alt="subscription"
          />
          Subscriptions
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className=" px-5 font-bold text-xl pt-3">You</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/8371/8371328.png"
            alt="channel"
          />
          Your Channel
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/3503/3503786.png"
            alt="history"
          />
          History
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/9297/9297069.png"
            alt="playlist"
          />
          Playlists
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2991/2991195.png"
            alt="vidoes"
          />
          Your videos
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/15469/15469061.png"
            alt="watch later"
          />
          Watch Later
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
            alt="liked videos"
          />
          Liked videos
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/3502/3502477.png"
            alt="downloads"
          />
          Downloads
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-xl pt-3">Subscriptions</h1>
      <ul className="p-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/4505/4505288.png"
            alt="music"
          />
          Music
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/1152/1152912.png"
            alt="sports"
          />
          Sports
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/686/686589.png"
            alt="game"
          />
          Gaming
        </li>
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/860/860306.png"
            alt="movies"
          />
          Movies
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-xl pt-3">Explore</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2 hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/1946/1946485.png"
            alt="trending"
          />
          Trending
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/263/263056.png"
            alt="sports"
          />
          Sports
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png"
            alt="shopping"
          />
          Shopping
        </li>
        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2537/2537926.png"
            alt="news"
          />
          News
        </li>

        <li className="flex gap-3 py-2  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/2989/2989838.png"
            alt="live"
          />
          Live
        </li>
      </ul>
      <hr className="bg-black border-1 mt-1 "></hr>
      <h1 className="px-5 font-bold text-lg pt-3">More Form YouTube</h1>
      <ul className="px-5">
        <li className="flex gap-3 py-2">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/174/174883.png"
            alt="premium"
          />
          YouTube Premium
        </li>
        <li className="flex gap-3 py-2">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/15047/15047447.png"
            alt="studio"
          />
          YoutUbe Studio
        </li>
        <li className="flex gap-3 py-2">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/15047/15047466.png"
            alt="music"
          />
          YouTube Music
        </li>
        <li className="flex gap-3 py-2">
          <img
            className="w-5"
            src="https://cdn-icons-png.flaticon.com/128/720/720320.png"
            alt="kids"
          />
          YouTube Kids
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
