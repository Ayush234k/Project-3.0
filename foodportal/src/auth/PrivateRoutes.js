import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoutes = ({ element }) => {
  const {user} = isAuthenticated();
  return (isAuthenticated()) ? (
    user && !user.isAdmin ? (
      element
    ) : (
      <Navigate
        to={{
          pathname: "/admin/dashboard",
        }}
      />
    )
  ) : (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
  );
};

export default PrivateRoutes;
