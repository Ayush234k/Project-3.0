import React from "react";
import "./RightSidebar.css";

import Calendar from "../Calendar";

const RightSidebar = () => {

  return (
    <div className="RightSidebar">
      <div>
        <h3>Select Date</h3>
        <Calendar/>
      </div>
      <div>
        <h3>Notice</h3>
        
      </div>
    </div>
  )
}

export default RightSidebar;