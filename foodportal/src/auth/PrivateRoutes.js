import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoutes = ({ element }) => {
  return (isAuthenticated()) ? (
    element
  ) : (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
  );
};

export default PrivateRoutes;
