import React from "react";

import LeftSidebar from "./LeftSidebar/LeftSidebar.jsx";
import RightSidebar from "./RightSidebar/RightSidebar.jsx";
import Middle from "./Middle/Middle.jsx";

import "./UserDashboard.css";

const UserDashboard = () => {
  return (
  <div className="Dashboard">
    <div className="DashboardGlass">
      <LeftSidebar/>
      <Middle/>
      <RightSidebar/>
    </div>
  </div>
  );
};

export default UserDashboard;