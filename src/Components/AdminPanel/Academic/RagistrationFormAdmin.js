import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
const RagistrationFormAdmin = () => {
  const token = JSON.parse(localStorage.getItem("UserDetails"));
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [yearAndTerm, setYearAndTerm] = useState("");
  const [batch, setBatch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cste-club-ibrahimecste.vercel.app/api/add/reg/time", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token?.token}`,
      },
      body: JSON.stringify({
        startDate,
        endtDate,
        yearAndTerm,
        batch,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.success(data.error);
          return;
        } else {
          toast.success(data.msg);
          setStartDate("");
          setEndDate("");
          setYearAndTerm("");
          setBatch("");
        }
      });
  };
  return (
    <div>
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">
          Registration Form circular
        </h2>

        <form action="" onSubmit={handleSubmit}>
          <InputField
            type="date"
            setField={setStartDate}
            fieldValue={startDate}
            requiredField="true"
            label="Start Date"
          ></InputField>
          <InputField
            type="date"
            setField={setEndDate}
            fieldValue={endtDate}
            requiredField="true"
            label="End Date"
          ></InputField>
          <div className="md:flex justify-between">
            <div className="my-2 w-full">
              <label for="">Select Year and Term:</label>
              <br />
              <select
                onChange={(e) => setYearAndTerm(e.target.value)}
                className="select 
            select-bordered form-control w-full max-w-xs"
              >
                <option disabled selected>
                  Selecte
                </option>
                <option value="11">Y-1,T-1</option>
                <option value="12">Y-1,T-2</option>
                <option value="21">Y-2,T-1</option>
                <option value="22">Y-2,T-2</option>
                <option value="31">Y-3,T-1</option>
                <option value="32">Y-3,T-2</option>
                <option value="41">Y-4,T-1</option>
                <option value="42">Y-4,T-2</option>
                <option value="51">Y-5,T-1</option>
                <option value="52">Y-5,T-2</option>
              </select>
            </div>
            <InputField
              type="number"
              setField={setBatch}
              fieldValue={batch}
              requiredField="true"
              label="Batch"
            ></InputField>
          </div>

          <div className="w-full text-right">
            <SubmitBtn value="Submit"></SubmitBtn>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RagistrationFormAdmin;
