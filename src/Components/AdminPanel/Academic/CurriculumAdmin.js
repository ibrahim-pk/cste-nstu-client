import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
const CurriculumAdmin = () => {
  const [courseCode, setCourseCode] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [hour, setHour] = useState("");
  const [credit, setCredit] = useState("");
  const [courseType, setCourseType] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cste-club-ibrahimecste.vercel.app/api/add/curriculum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseCode,
        courseTitle,
        hour,
        credit,
        courseType,
        formData: year + term,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.success(data.error);
          return;
        } else {
          toast(data.msg);
          setCourseCode("");
          setCourseTitle("");
          setCourseType("");
          setYear("");
          setTerm("");
          setHour("");
          setCredit("");
        }
      });
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Curriculum</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setCourseCode}
          fieldValue={courseCode}
          requiredField="true"
          label="Course Code"
        ></InputField>
        <InputField
          type="text"
          setField={setCourseTitle}
          fieldValue={courseTitle}
          label="Course Title"
        ></InputField>
        <InputField
          type="number"
          setField={setHour}
          fieldValue={hour}
          label="Hour/Week"
          requiredField="true"
        ></InputField>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setCredit}
            fieldValue={credit}
            label="Credit"
            requiredField="true"
          ></InputField>
          <InputField
            type="text"
            setField={setCourseType}
            fieldValue={courseType}
            label="Course Type"
            requiredField="true"
          ></InputField>
        </div>
        <div className="flex gap-4">
          <InputField
            type="text"
            setField={setYear}
            fieldValue={year}
            label="Year"
          ></InputField>
          <InputField
            type="text"
            setField={setTerm}
            fieldValue={term}
            label="Term"
            requiredField="true"
          ></InputField>
        </div>
        <div className="w-full text-right">
          <SubmitBtn value="Add Student"></SubmitBtn>
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default CurriculumAdmin;
