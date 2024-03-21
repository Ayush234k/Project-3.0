import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Cal from "./Cal";
import Calendar from "./Cal";
import Notify from "../Cards/Notify";
//import './Rightpanel.css';
export default function Rightpanel() {
  return (
    <div className="RightSide">
      <div>
      <h3>Select Date</h3>
      <Calendar/>
      </div>
      <div>
        <h3>Notice</h3>
      </div>
    </div>
  );
}
