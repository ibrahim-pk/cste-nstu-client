import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function AddResult() {
  const [cgpa, setCGPA] = useState("");
  const [roll, setRoll] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Add Result</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Session</span>
            </label>
            <select className="select select-bordered">
              <option>2019-20</option>
              <option>2020-21</option>
              <option>2021-22</option>
              <option>2022-23</option>
              <option>2023-24</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Term</span>
            </label>
            <select className="select select-bordered">
              <option>1-1</option>
              <option>1-2</option>
              <option>2-1</option>
              <option>2-2</option>
              <option>3-1</option>
              <option>3-2</option>
              <option>4-1</option>
              <option>4-2</option>
            </select>
          </div>
        </div>

        <InputField
          type="text"
          setField={setRoll}
          fieldValue={roll}
          label="Roll"
        ></InputField>
        <InputField
          type="text"
          setField={setCGPA}
          fieldValue={cgpa}
          label="CGPA"
        ></InputField>

        <div className="w-full text-right">
          <SubmitBtn value="Add Result"></SubmitBtn>
        </div>
      </form>
    </div>
  );
}
