import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Cal from "./Cal"; 
import Notify from "../Cards/Notify";
export default function Rightpanel() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "23%",
            boxSizing: "border-box",
            background: "white",
            color: "black",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ marginTop: "200px" }}>
          <ListItem>
            <Cal />
          </ListItem>
          <ListItem sx={{marginTop: "600px"}}>
            <Notify/>
          </ListItem>
          
        </List>
      </Drawer>
    </Box>
  );
}
