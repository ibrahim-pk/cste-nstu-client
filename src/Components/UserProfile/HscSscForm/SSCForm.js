import React, { useEffect, useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function SSCForm() {
  const [board, setBoard] = useState("");
  const [roll, setRoll] = useState("");
  const [regNo, setRegNo] = useState("");
  const [gpa, setGPA] = useState("");
  const [year, setYear] = useState("");
  const [loginStudent, setLoginStudent] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    setLoginStudent(user?.student);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(
      `https://cste-club-ibrahimecste.vercel.app/api/student/ssc/${loginStudent?._id}`,
      {
        board,
        roll,
        regNo,
        gpa,
        year,
      }
    );
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.msg);
      setBoard("");
      setGPA("");
      setRegNo("");
      setRoll("");
      setYear("");
    }
  };
  return (
    <div className="pt-2 px-5  max-w-screen-xl	mx-auto w-full  mb-4">
      <h2 className="text-2xl">SSC Details</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setBoard}
          fieldValue={board}
          label="Board"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setRegNo}
          fieldValue={regNo}
          label="Registration No"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setRoll}
          fieldValue={roll}
          label="Roll"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setYear}
          fieldValue={year}
          label="Year"
          requiredField="true"
        ></InputField>
        <InputField
          type="text"
          setField={setGPA}
          fieldValue={gpa}
          label="GPA"
          requiredField="true"
        ></InputField>
        <div className="w-full text-center mx-auto">
          <SubmitBtn value="Edit"></SubmitBtn>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
