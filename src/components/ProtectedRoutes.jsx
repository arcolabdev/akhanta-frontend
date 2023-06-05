import React from "react";
import { Navigate, Outlet } from "react-router";
import jwt_decode from "jwt-decode";

const ProtectedRoutes = ({ children }) => {
  const jwt = localStorage.getItem("token");

  const decoded = jwt_decode(jwt);

  const expiryDate = new Date(decoded.exp * 1000);

  console.log(expiryDate);

  if (expiryDate < Date.now()) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
