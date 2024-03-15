import React from "react";
import { Box } from "@mui/material";

import LeftSidebar from "./LeftSidebar.jsx";
import RightSidebar from "./RightSidebar.jsx";
import Middle from "./Middle.jsx";

const UserDashboard = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "white",
        height:"100%",
        display: "grid",
        gridTemplateColumns: "15% 62% 23%",
        gap: "0px",
      }}
    >
      <LeftSidebar/>
      <Middle/>
      <RightSidebar/>
    </Box>
  );
};

export default UserDashboard;
