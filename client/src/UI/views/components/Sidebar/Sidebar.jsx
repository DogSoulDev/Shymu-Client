import { Link } from "react-router-dom";

import "./Sidebar.css"

const Sidebar = () => {
  return (
  <div className="container__sidebar">
    <div className="sidebar__list">
      <div className="nav main">
        <li>
        <Link to='/home'>Home</Link>
        </li>
        <li>
        <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/library'>Library</Link>
        </li>
      </div>

      <div className="nav">
        <li>
          <span className="sidebar__titles">Your Library</span>
        </li>
        <li>
          <a className="sidebar__links" href="">Your Daily Mix</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Last Played</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Music</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Álbums</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Artists</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Videos</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Podcasts</a>
        </li>
      </div>

      <div className="nav">
        <li>
          <span className="sidebar__titles">PLAYLISTS</span>
        </li>
       
      </div>
    
    {/* <div className="nav"> */}
    <div className="sidebar__links">
      {/* <img src={AddPlaylistIcon} alt="Adicionar playlist" /> */}
      New Playlist
      </div>
    </div >
 </div>
);
}
export default Sidebar;
