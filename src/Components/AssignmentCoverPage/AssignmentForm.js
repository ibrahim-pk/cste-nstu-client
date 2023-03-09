import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import AssignmentCoverPageDesign from "./AssignmentCoverPageDesign";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Loading from "../Common/Loading";

export default function AssignmentForm() {
  const [downloading, setDownloading] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [assignmentType, setAssignmentType] = useState("Assignment");
  const [studentName, setStudentName] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [studnetDept, setStudentDep] = useState("");
  const [term, setTerm] = useState("");
  const [sirName, setSirName] = useState("");
  const [sirRole, setSirRole] = useState("");
  const [sirDept, setSirDept] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("makePDF");
    setDownloading(true);
    input.removeAttribute("hidden");
    var options = {
      quality: 1,
      scale: 5,
      dpi: 192,
      scrollX: 0,
      scrollY: -window.scrollY,
    };
    html2canvas(input, options).then((canvas) => {
      // var imgData = new Image();

      const imgData = canvas.toDataURL("image/png");

      // imgData.width = 500;
      const pdf = new jsPDF();
      input.setAttribute("hidden", "true");

      pdf.addImage(imgData, "PNG", 10, 10, 190, 280);

      // pdf.output('dataurlnewwindow');
      pdf.save(`assignment_${roll}.pdf`);
      setDownloading(false);
    });
  };

  return (
    <>
      {downloading ? (
        <Loading data="Downloading"></Loading>
      ) : (
        <div className="mx-auto max-w-screen-md mx-auto w-full px-4 mt-16 mb-4">
          <h2 className="text-3xl mb-4 text-center">
            Assignment/Lab Cover Page Generator
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <h3 className="font-semibold text-xl mb-2 mt-2">Basic Info</h3>
            <div>
              <p className="mb-1">Type:</p>
              <select
                className="select select-bordered w-full"
                onChange={(e) => setAssignmentType(e.target.value)}
              >
                <option value="Assignment">Assignment</option>
                <option value="Lab">Lab</option>
              </select>
            </div>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={title}
              label="Title"
              setField={setTitle}
            ></InputField>
            <div className="flex gap-2">
              <InputField
                type="text"
                requiredField="true"
                fieldValue={courseCode}
                label="Course Code"
                setField={setCourseCode}
              ></InputField>
              <InputField
                type="text"
                requiredField="true"
                fieldValue={date}
                label="Date"
                setField={setDate}
              ></InputField>
            </div>
            <h3 className="font-semibold text-xl mt-4">Submitted By</h3>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={studentName}
              label="Student Name"
              setField={setStudentName}
            ></InputField>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={studnetDept}
              label="Department"
              setField={setStudentDep}
            ></InputField>
            <div className="flex gap-2">
              <InputField
                type="text"
                requiredField="true"
                fieldValue={roll}
                label="Roll"
                setField={setRoll}
                className=""
              ></InputField>
              <InputField
                type="text"
                requiredField="true"
                fieldValue={year}
                label="Year"
                setField={setYear}
                className="w-24"
              ></InputField>
              <InputField
                type="text"
                requiredField="true"
                fieldValue={term}
                label="Term"
                setField={setTerm}
                className="w-24"
              ></InputField>
            </div>
            <h3 className="font-semibold text-xl mt-4">Submitted To</h3>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={sirName}
              label="Name"
              setField={setSirName}
            ></InputField>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={sirRole}
              label="Role"
              setField={setSirRole}
            ></InputField>
            <InputField
              type="text"
              requiredField="true"
              fieldValue={sirDept}
              label="Department"
              setField={setSirDept}
            ></InputField>
            <div className="mx-auto w-full text-center">
              <SubmitBtn value="Donwload PDF" />
            </div>
          </form>
          <div id="makePDF" hidden>
            <AssignmentCoverPageDesign
              studentName={studentName}
              roll={roll}
              stduentDept={studnetDept}
              year={year}
              term={term}
              title={title}
              assignmentType={assignmentType}
              date={date}
              sirName={sirName}
              sirRole={sirRole}
              sirDept={sirDept}
              courseCode={courseCode}
            />
          </div>
        </div>
      )}
    </>
  );
}
