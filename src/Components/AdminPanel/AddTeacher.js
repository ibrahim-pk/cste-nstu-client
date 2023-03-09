import React, { useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function AddTeacher() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const handleImageUpload = async (e) => {
  //   setLoading(true);
  //   const imageFile = e.target.files[0];
  //   const data = new FormData();
  //   data.append("file", imageFile);
  //   //your folder name
  //   data.append("upload_preset", "WinnerImg");
  //   data.append("cloud_name", "ditdynru4");

  //   try {
  //     const result = await axios.post(
  //       //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
  //       "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
  //       data
  //     );
  //     // console.log(result?.data?.url);
  //     setImageUrl(result?.data?.url);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.massage);
  //     setLoading(false);
  //   }
  // };
  const token = JSON.parse(localStorage.getItem("UserDetails"));
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cste-club-ibrahimecste.vercel.app/api/teacher/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token?.token}`,
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role: "teacher",
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
          setEmail("");
          setPassword("");
        }
      });
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Teacher</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          requiredField="true"
          label="Name"
        ></InputField>

        <InputField
          type="email"
          setField={setEmail}
          fieldValue={email}
          label="Email"
        ></InputField>
        <InputField
          type="number"
          setField={setPassword}
          fieldValue={password}
          label="Password"
        ></InputField>

        {/* <div className="my-2">
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <div>
            {loading && (
              <h1 className="text-xl font-bold text-sky-700">Uploading....</h1>
            )}
          </div>
        </div> */}
        <div className="w-full my-2 text-right">
          <SubmitBtn value="Add Teacher"></SubmitBtn>
          <Toaster />
        </div>
      </form>
    </div>
  );
}
