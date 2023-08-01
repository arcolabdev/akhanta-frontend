import React from "react";
import { Navigate, Outlet } from "react-router";
import jwt_decode from "jwt-decode";

const ProtectedRoutes = ({ children }) => {
  const jwt = localStorage.getItem("token");
  let decoded = null;
  try {
    decoded = jwt_decode(jwt);
  } catch (error) {
    return <Navigate to="/login" />;
  }

  const expiryDate = new Date(decoded.exp * 1000);

  if (jwt && expiryDate > Date.now()) {
    return children ? children : <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
