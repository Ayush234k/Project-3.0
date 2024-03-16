import * as React from "react";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Calendar from "./Calendar";
import MaterialUISwitch from "./Switch";
import zIndex from "@mui/material/styles/zIndex";

export default function RightSidebar() {
  return (
    <div>
      <Box>
        {/* <MaterialUISwitch
          sx={{
            zIndex: "1201",
          }}
        /> */}
      </Box>
      <Box sx={{ display: "flex", padding: "250px" }}>
        {/* <CssBaseline /> */}
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              height: "100%",
              width: "23%",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <List>
            <Calendar />
          </List>
        </Drawer>
      </Box>
    </div>
  );
}
