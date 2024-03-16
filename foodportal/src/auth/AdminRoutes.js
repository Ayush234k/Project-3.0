import React from "react";
import { isAuthenticated } from "./index";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ element }) => {
  return isAuthenticated() && isAuthenticated().user.isAdmin ? (
    element
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
    />
  );
};

export default AdminRoutes;
