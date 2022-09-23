import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Player from "../../components/Player/Player.jsx";
import "rc-slider/assets/index.css";

function Dashboard() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Player />
  
    </>
  )
}

export default Dashboard
