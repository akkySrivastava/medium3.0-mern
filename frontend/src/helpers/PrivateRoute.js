import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function PrivateRoute({ children }) {
  const user = useSelector(selectUser);

  return user ? children : <Navigate to="/getting-started" />;
}

export default PrivateRoute;
