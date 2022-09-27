import React from "react";
import "./Browse.css";

const Browser = () => (
<div className="container__browse">
    <div className="title__browse">Navegar</div>

    <div className="list__browse">
      <div className="playlist" to="/playlists/1">
        <img className="img__browse"
          src="https://avatars0.githubusercontent.com/u/22546201?v=4"
          alt="Playlist"
        />
        <strong>Them Shades</strong>
        <p className="p__browse">Got me Grooving</p>
      </div>
      <div className="playlist" to="/playlists/1">
        <img className="img__browse"
          src="https://avatars0.githubusercontent.com/u/22546201?v=4"
          alt="Playlist"
        />
        <strong>Them Shades</strong>
        <p className="p__browse">Got me Grooving</p>
      </div>
      <div className="playlist" to="/playlists/1">
        <img className="img__browse"
          src="https://avatars0.githubusercontent.com/u/22546201?v=4"
          alt="Playlist"
        />
        <strong>Them Shades</strong>
        <p className="p__browse">Got me Grooving</p>
      </div>
      <div className="playlist" to="/playlists/1">
        <img className="img__browse"
          src="https://avatars0.githubusercontent.com/u/22546201?v=4"
          alt="Playlist"
        />
        <strong>Them Shades</strong>
        <p className="p__browse"></p>
      </div>
    </div>
  </div>
);

export default Browser;
