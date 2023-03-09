import React, { useEffect, useState } from "react";
import logo from "../../../img/logo.png";
import "./Registration.css";

export default function RegFormMoneyRecipt() {
  const [studentDetails, setStudentDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    setStudentDetails(user?.student?.form?.studentInfo);
    setPaymentDetails(user?.student?.form?.paymentDetails);
  }, []);
  return (
    <div id="divToPrint" className="pb-20 max-w-screen-lg mx-auto px-5">
      <div className="flex justify-center gap-10 border-black	border-b pb-4">
        <div>
          <img src={logo} alt="NSTU" className="w-14" />
        </div>
        <div className="text-center">
          <h4 className="text-3xl font-semibold">
            Noakhali Science & Technology University
          </h4>
          <p>Noakhali-3814, Bangladesh</p>
          <h3 className="text-2xl">Course Registration Money Recipt</h3>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-2">
          <div className="flex w-2/3 gap-2 items-end">
            <p className="font-semibold">Session</p>
            <div className="flex-1 border-black	border-b  text-xl">
              {studentDetails?.session}
            </div>
          </div>
          <div className="flex flex-1 items-end gap-2">
            <p className="font-semibold">Term</p>
            <div className="flex-1 border-black	border-b text-xl">
              {studentDetails?.term}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-2">
          <div className="flex w-2/3 gap-2 items-end">
            <p className="font-semibold">SI No</p>
            <div className="flex-1 border-black	border-b  text-xl">
              <h1>----</h1>
            </div>
          </div>
          <div className="flex flex-1 items-end gap-2">
            <p className="font-semibold">Date</p>
            <div className="flex-1 border-black	border-b text-xl">
              <h1>----</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h1 className="font-semibold text-xl">Ac No:-0200005326568</h1>
        <h1 className="font-semibold">Agroni Bank,nobiprobi shakha</h1>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <div className="flex  gap-2 items-end">
          <p className="font-semibold">Department</p>
          <div className="flex-1 border-black	border-b text-xl ">
            {studentDetails?.department}
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <p className="font-semibold">Name of Student</p>
          <div className="flex-1 border-black	border-b  text-xl">
            {studentDetails?.name}
          </div>
        </div>
        <div className="flex flex-1 items-end gap-2">
          <p className="font-semibold">Roll</p>
          <div className="flex-1 border-black	border-b text-xl">
            {studentDetails?.studentID}
          </div>
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <table border="1">
          <tr>
            <th>Amount</th>
            <td>{paymentDetails.amount} Tk</td>
          </tr>
          <tr>
            <th>Tran_Id</th>
            <td>{paymentDetails.tran_id}</td>
          </tr>
          <tr>
            <th>Bank_Tran_Id</th>
            <td>{paymentDetails.bank_tran_id}</td>
          </tr>
          <tr>
            <th>card_brand</th>
            <td>{paymentDetails.card_brand}</td>
          </tr>
          <tr>
            <th>card_issuer</th>
            <td>{paymentDetails.card_issuer}</td>
          </tr>
          <tr>
            <th>Tran_Date</th>
            <td>{paymentDetails.tran_date}</td>
          </tr>
        </table>
      </div>
      <div className="flex justify-around mt-20 my-5">
        <h1>Officer Sign</h1>
        <h1>1</h1>
        <h1>Cashiar Sign</h1>
      </div>
    </div>
  );
}
