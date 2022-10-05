import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Player from "../../components/Player/Player.jsx";

import "rc-slider/assets/index.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Player />
    </div>
  );
}

export default Dashboard;
