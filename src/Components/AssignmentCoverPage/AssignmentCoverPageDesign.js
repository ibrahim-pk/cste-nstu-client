import React from "react";
import logo from "../../img/logo.png";
import logo2 from "../../img/logo2.png";
import "./AssignmentDesign.css";
export default function AssignmentCoverPageDesign({
  assignmentType,
  title,
  courseCode,
  studentName,
  roll,
  term,
  year,
  stduentDept,
  sirName,
  sirRole,
  sirDept,
  date,
}) {
  return (
    <div
      className="flex flex-col  justify-between border-2 border-blue-900 p-5"
      style={{
        width: "100%",
        height: "297mm",
        background: `url(${logo2}) no-repeat center center`,
      }}
    >
      <div className="flex-col justify-center gap-4 w-full flex mx-auto items-center gap-2">
        <img src={logo} alt="NSTU" className="w-24" />
        <div className="w-full text-center">
          <h2 className="text-3xl text-blue-900 text-center">
            Noakhali Science & Technology University
          </h2>
          <p>Noakhali-3814, Bangladesh</p>
        </div>
      </div>
      <div className="text-2xl text-center">
        <h2 className="mb-2">
          <span className="text-blue-900">{assignmentType} Title :</span>
          {title}
        </h2>
        <h2>
          <span className="text-blue-900">Course Code :</span> {courseCode}
        </h2>
      </div>

      <div className="flex space-between">
        <div className="w-1/2 p-4 border  border-blue-900 border-r-0">
          <h2 className="text-blue-900 uppercase text-xl">Submitted to</h2>
          <h3 className="text-xl">{sirName}</h3>
          <h4>{sirRole}</h4>
          <h4>Department of {sirDept}</h4>
          <h4>Noakhali Science & Technology University</h4>
        </div>
        <div className="w-1/2  p-4  border border-blue-900">
          <h2 className="text-blue-900 uppercase text-xl">Submitted by</h2>
          <h3 className="text-xl">{studentName}</h3>
          <h4>Roll : {roll}</h4>
          <h4>
            Year: {year} Term: {term}
          </h4>
          <h4>{stduentDept}</h4>
        </div>
      </div>
      <h2 className="text-xl text-blue-900 text-center">Date : {date}</h2>
    </div>
  );
}
