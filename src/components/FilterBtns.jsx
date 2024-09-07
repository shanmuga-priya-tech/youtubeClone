import { useSelector } from "react-redux";
import FilterButton from "./FilterButton";

function FilterBtns() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const filterList = [
    "All",
    "Music",
    "News",
    "JavaScript",
    "Live",
    "Recruitment",
    "Coding",
    "Interview",
    "watched",
    "Recently uploaded",
    "New to you",
  ];
  return (
    <div className="flex">
      {filterList.map((item) => (
        <FilterButton key={item} title={item} />
      ))}
      {!isMenuOpen && <FilterButton title={"Movies"} />}
    </div>
  );
}

export default FilterBtns;
