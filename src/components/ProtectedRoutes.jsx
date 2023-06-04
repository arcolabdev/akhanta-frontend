import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const jwt = localStorage.getItem("token");

  console.log(jwt);

  if (!jwt) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
