import React from "react";
import "./Sidebar.css"
// import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <div className="container__sidebar">
    <div className="sidebar__list">
      <div className="nav main">
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </div>

      <div className="nav">
        <li>
          <span className="test">SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="">Seus Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados Recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbums</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </div>

      <div className="nav">
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Melhores do rock</a>
        </li>
      </div>
    </div>
    <div className="new__playList" >
      {/* <img src={AddPlaylistIcon} alt="Adicionar playlist" /> */}
      Nova Playlist
    </div >
  </div>
);

export default Sidebar;
