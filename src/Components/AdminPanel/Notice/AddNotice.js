import React from "react";
import "../Notice/style.css";
import { Link } from "react-router-dom";
export default function AddNotice() {
  return (
    <div className="max-w-screen-sm md:mt-28 mt-16 mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card noticeCard1 shadow-md text-center p-2 my-2 text-xl font-bold">
            <Link to="/notice/public">Public</Link>
          </div>
          <div className="card noticeCard2 shadow-md text-center p-2 my-2 text-xl font-bold">
            <Link to="/notice/student">Student</Link>
          </div>
          <div className="card noticeCard3 shadow-md text-center p-2 my-2 text-xl font-bold">
            <h1>Teacher</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
