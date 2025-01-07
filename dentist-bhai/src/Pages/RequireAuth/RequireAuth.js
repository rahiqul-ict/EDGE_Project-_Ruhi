import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import SpinnerLoad from "../../Shared/SpinnerLoad/SpinnerLoad";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  console.log("Inside Require Auth", user);

  if (loading) {
    return <SpinnerLoad></SpinnerLoad>;
  }
  //   ***
  if (!user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  return children;
};
//   ***

export default RequireAuth;
