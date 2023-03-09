import React from "react";
import { Link } from "react-router-dom";

const ExamFeePayment = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="card  w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center my-4">Exam Fee</h2>
          <div className="card-actions">
            <button className="btn w-full btn-primary  hover:text-white">
              <Link to="/registrationform">All Exam</Link>
            </button>
            <button className="btn w-full btn-primary hover:text-white">
              <Link to="/registrationform">Backlog</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamFeePayment;
