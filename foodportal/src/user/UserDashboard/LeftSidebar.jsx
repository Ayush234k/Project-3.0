import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ThreePIcon from "@mui/icons-material/ThreeP";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background: "#181819",
            color: "white",
            height: "100%",
            width: "15%",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {<h1>Logo</h1>}
          {["Dashboard", "Entire Menu", "Feedback", "Notice"].map(
            (text, index) => (
              <ListItem key={text} disablePadding >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "white",
                  // height: "50%",
                }}>
                    {(() => {
                      switch (index) {
                        case 0:
                          return <DashboardIcon />;
                        case 1:
                          return <RestaurantMenuIcon />;
                        case 2:
                          return <RateReviewIcon />;
                        case 3:
                          return <NewReleasesIcon />;
                      }
                    })()}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
          {["Support", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white",}}>
                  {(() => {
                    switch (index) {
                      case 0:
                        return <ThreePIcon />;
                      case 1:
                        return <SettingsIcon />;
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          {["Log Out"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{
              // marginTop: "380px",
            }}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white", }}>
                  {(() => {
                    switch (index) {
                      case 0:
                        return <LogoutIcon />;
                    }
                  })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
