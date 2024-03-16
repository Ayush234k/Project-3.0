import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Settings from "./Pages/Settings";

import AdminRoutes from "./auth/AdminRoutes.js";
import PrivateRoutes from "./auth/PrivateRoutes.js";

import AdminDashboard from "./user/AdminDashboard/AdminDashboard.js";
import UserDashboard from "./user/UserDashboard/UserDashboard.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/user/dashboard"
          element={<PrivateRoutes element={<UserDashboard />} />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminRoutes element={<AdminDashboard />} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
