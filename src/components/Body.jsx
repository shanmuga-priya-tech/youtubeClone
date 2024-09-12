import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function Body() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
