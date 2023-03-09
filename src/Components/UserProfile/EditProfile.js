import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";

export default function EditProfile({ id }) {
  console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [session, setSession] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [batch, setBatch] = useState("");
  const [dept, setDept] = useState("");
  const [blood, setBlood] = useState("");
  const [address, setAddress] = useState("");
  const token = JSON.parse(localStorage.getItem("UserDetails"));
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://cste-club-ibrahimecste.vercel.app/api/user/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token?.token}`,
      },
      body: JSON.stringify({
        name,
        email,
        dept,
        blood,
        address,
        password,
        studentId: roll,
        session,
        contactNo,
        batch,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        } else {
          toast.success(data.msg);
          setName("");
          setDept("");
          setBlood("");
          setAddress("");
          setEmail("");
          setPassword("");
          setContactNo("");
          setRoll("");
          setSession("");
        }
      });
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto my-5">
      <h2 className="text-2xl mb-2 border-b pb-2">Edit Your Profile</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          label="Name"
        ></InputField>
        <InputField
          type="email"
          setField={setEmail}
          fieldValue={email}
          label="Email"
        ></InputField>
        <InputField
          type="text"
          setField={setPassword}
          fieldValue={password}
          label="Password"
        ></InputField>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setRoll}
            fieldValue={roll}
            label="Student Roll"
          ></InputField>
          <InputField
            type="text"
            setField={setBatch}
            fieldValue={batch}
            label="Batch"
          ></InputField>
          <InputField
            type="text"
            setField={setSession}
            fieldValue={session}
            label="Session"
          ></InputField>
        </div>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setBlood}
            fieldValue={blood}
            label="Blood"
          ></InputField>
          <InputField
            type="text"
            setField={setDept}
            fieldValue={dept}
            label="Dept"
          ></InputField>
        </div>
        <InputField
          type="text"
          setField={setContactNo}
          fieldValue={contactNo}
          label="Contact No"
        ></InputField>
        <InputField
          type="text"
          setField={setAddress}
          fieldValue={address}
          label="Address"
        ></InputField>
        <div className="w-full text-right">
          <SubmitBtn value="Edit"></SubmitBtn>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
