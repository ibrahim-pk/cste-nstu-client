import React, { useState } from 'react';
import InputField from '../../Common/InputField';
import SubmitBtn from '../../Common/SubmitBtn';
import { toast, Toaster } from "react-hot-toast";

const JobCirculer = () => {
    const token = JSON.parse(localStorage.getItem("UserDetails"));
    const [postName, setPostName] = useState("");
    const [postPerson, setPostPerson] = useState();
    const [dept, setDept] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fees, setFees] = useState("");
    const [viewLink, setViewLink] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cste-club-ibrahimecste.vercel.app/api/online/job/circuler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token?.token}`,
      },
      body: JSON.stringify({
        postName,
        postPerson,
        dept,
        endDate,
        fees,
        viewLink,
        date: new Date().toISOString().split("T")[0],


      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.success(data.error);
          return;
        } else {
          toast.success(data.msg);
          setPostName('')
          setPostPerson('')
          setDept('')
          setEndDate('')
          setFees('')
          setViewLink('')
        }
      });
  };
    return (
        <div>
            <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">
          Add job circular
        </h2>

        <form action="" onSubmit={handleSubmit}>
        <InputField
            type="text"
            setField={setPostName}
            fieldValue={postName}
            requiredField="true"
            label="Post Name"
          ></InputField>
          <InputField
            type="number"
            setField={setPostPerson}
            fieldValue={postPerson}
            requiredField="true"
            label="How many person?"
          ></InputField>
          <InputField
            type="text"
            setField={setDept}
            fieldValue={dept}
            requiredField="true"
            label="Dept Name"
          ></InputField>
          <InputField
            type="date"
            setField={setEndDate}
            fieldValue={endDate}
            requiredField="true"
            label="End Date"
          ></InputField>
          <InputField
            type="number"
            setField={setFees}
            fieldValue={fees}
            requiredField="true"
            label="Fees"
          ></InputField>
          <InputField
            type="text"
            setField={setViewLink}
            fieldValue={viewLink}
            requiredField="true"
            label="View Link"
          ></InputField>
          
          <div className="w-full text-right">
            <SubmitBtn value="Submit"></SubmitBtn>
            <Toaster />
          </div>
        </form>
      </div>
        </div>
    );
};

export default JobCirculer;