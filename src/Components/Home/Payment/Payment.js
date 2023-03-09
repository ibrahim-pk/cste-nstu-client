import React, { useState } from "react";
import ExamFeePayment from "./ExamFeePayment";
import RegistrationPayment from "./RegistrationPayment";

const Payment = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="flex justify-center items-center my-10 gap-4">
      <div className="card  w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center my-4">Online Payment</h2>
          <div className="card-actions">
            <button
              onClick={() => setPage(1)}
              className="btn w-full btn-primary  hover:text-white"
            >
              REGISTRATION
            </button>
            <button
              onClick={() => setPage(2)}
              className="btn w-full btn-primary hover:text-white"
            >
              EXAM FEE
            </button>
          </div>
        </div>
      </div>
      {page === 1 && <RegistrationPayment />}
      {page === 2 && <ExamFeePayment />}
    </div>
  );
};

export default Payment;
