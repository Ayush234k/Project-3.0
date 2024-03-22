import React from "react";
import { useState } from "react";
// import { UilEstate } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data.js";
import "./Sidebar.css";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/* {JSON.stringify(SidebarData)} } */}
      {/* <div className="logo"> */}
        <span>Foodportal</span>
      {/*  */}
        <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ?"menuItem active":"menuItem"}
              key={index}
              onClick={()=>setSelected(index)}
            >
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
