import React from "react";
import "./Navbar.css"


const Header = () => (
  <div className="container__navbar">
    <div className="search">
      <input className="input__navbar" type="text" placeho="Search" />
    </div>
    <div className="user">
    <img className="img__user"
        src="https://avatars0.githubusercontent.com/u/22546201?v=4"
        alt="Avatar"
      />
     Adrià Vallès
      
    </div>
  </div>
);

export default Header;
