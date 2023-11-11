import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { loading, isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );
  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
