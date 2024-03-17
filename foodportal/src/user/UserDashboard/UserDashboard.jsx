import React from "react";
import { Box } from "@mui/material";

import LeftSidebar from "./LeftSidebar/LeftSidebar.jsx";
import RightSidebar from "./RightSidebar/RightSidebar.jsx";
import Middle from "./Middle/Middle.jsx";

import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    // <Box 
    //   sx={{
    //     backgroundColor: "white",
    //     height:"100%",
    //     display: "grid",
    //     overflow: "hidden",
    //     gridTemplateColumns: "11rem auto 35rem",
    //     gap: "0px",
    //   }}
    // >
    //   <LeftSidebar/>
    //   <Middle/>
    //   <RightSidebar/>
    // </Box>
  <div className="Dashboard">
    <div className="DashboardGlass">
      <LeftSidebar/>
      <Middle/>
    </div>
  </div>
  );
};

export default UserDashboard;
