import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ApplicantRouter = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("JobUser"));

  let location = useLocation();
  if (!token?.userInfo) {
    return <Navigate to="/career/online/job/apply/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ApplicantRouter;
