import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Library from "../../pages/Library/Library";
import Search from "../../pages/Search/Search";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='container__sidebar'>
      <div className='sidebar__list'>
        <div className='nav main'>
          <li>
            <Home />
          </li>
          <li>
            <Library />
          </li>
          <li>
            <Search />
          </li>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
