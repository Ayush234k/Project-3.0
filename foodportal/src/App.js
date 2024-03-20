import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About";
import Contact from "./Pages/Contact";
import Feedback from "./Pages/Feedback.jsx";
import NotFound from "./Pages/NotFound";
import Settings from "./Pages/Settings";


import AdminRoutes from './auth/AdminRoutes.js';
import PrivateRoutes from './auth/PrivateRoutes.js';

import AdminDashboard from './user/AdminDashboard.js';
import UserDashboard from './user/UserDashboard.js';
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Banner from "./Pages/Banner.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
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
    </>
  );
}

export default App;
