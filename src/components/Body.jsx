import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default Body;
