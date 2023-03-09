import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";

const Materials = () => {
  const [driveLink, setDriveLink] = useState("");
  const [batch, setBatch] = useState("");
  const [term, setTerm] = useState("");
  const [accesTerm, setAccessTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!driveLink && !term && !accesTerm && !batch) {
      toast.error("Fillup the form properly");
      return;
    } else {
      setLoading(true);
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/add/material",
        {
          driveLink,
          term,
          accesTerm,
          batch,
        }
      );
      console.log(data);
      toast.success(data.msg);
      setDriveLink("");
      batch("");
      setTerm("");
      setAccessTerm("");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl my-5 w-full mx-auto p-4">
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">Drive Link Add Here</h2>
        <form action="" onSubmit={handleSubmit}>
          <InputField
            type="text"
            setField={setDriveLink}
            fieldValue={driveLink}
            label="Google Drive Link"
          ></InputField>
          <InputField
            type="number"
            setField={setBatch}
            fieldValue={batch}
            label="Batch"
          ></InputField>
          <InputField
            type="text"
            setField={setTerm}
            fieldValue={term}
            label="Term"
          ></InputField>
          <InputField
            type="number"
            setField={setAccessTerm}
            fieldValue={accesTerm}
            label="Access Batch"
          ></InputField>
          <div className="w-full text-right">
            {!loading && <SubmitBtn value="Submit"></SubmitBtn>}
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Materials;
