import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='container__sidebar'>
      <div className='sidebar__list'>
        <div className='nav main'>
          <li>
            <Link className="sidebar__links" to='/home'>Home</Link>
          </li>
          <li>
            <Link className="sidebar__links" to='/search'>Search</Link>
          </li>
          <li>
            <Link className="sidebar__links" to='/library'>Library</Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
