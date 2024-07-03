import { SearchIcon } from "../../../assets";

export default function Search() {
  return (
    <div className="main-navigation__search">
      <span>
        <SearchIcon />
      </span>
      <div>
        <input type="text" placeholder="Search by patients..." />
      </div>
    </div>
  );
}
