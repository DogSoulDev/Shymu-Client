import React from "react";
import "./Sidebar.css"
// import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <div className="container__sidebar">
    <div className="sidebar__list">
      <div className="nav main">
        <li>
          <a className="sidebar__titles__links" href="">Navegar</a>
        </li>
        <li>
          <a className="sidebar__titles__links"  href="">Rádio</a>
        </li>
      </div>

      <div className="nav">
        <li>
          <span className="sidebar__titles">SUA BIBLIOTECA</span>
        </li>
        <li>
          <a className="sidebar__links" href="">Seus Daily Mix</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Tocados Recentemente</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Músicas</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Álbums</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Artistas</a>
        </li>
        <li>
          <a className="sidebar__links" href="">Vídeos</a>
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
      Nova Playlist
      </div>
    </div >
 </div>
);

export default Sidebar;
