import React, { useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../../../assets/foodicon.png";
import MenuIcon from "@mui/icons-material/Menu";

import "./LeftSidebar.css";
import { LeftSidebarData } from "../Data";
import { motion } from "framer-motion";

const LeftSidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="menuIcon"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={()=>setExpanded(!expanded)}
      >
        <MenuIcon />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo"/>
          <span>Food Portal</span>
        </div>

        {/* menu */}
        <div className="menu">
          {LeftSidebarData.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                onClick={() => setSelected(index)}
                className={selected === index ? "menuItem active" : "menuItem"}
                style={{color: "inherit",textDecoration: "none"}}
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default LeftSidebar;
