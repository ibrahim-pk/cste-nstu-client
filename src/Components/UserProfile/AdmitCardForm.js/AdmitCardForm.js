import React, { useEffect, useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
export default function AdmitCardForm() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [examYear, setExamYear] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examPercentange, setExamPercentange] = useState("");
  const [studentID, setStudentID] = useState("");
  const [department, setDepartment] = useState("");
  const [hall, setHall] = useState("");
  const [session, setSession] = useState("");
  const [institute, setInsititue] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [fee, setFee] = useState();

  //loader
  const [loading, setLoading] = useState(false);
  //courses

  const [course1Title, setCourse1Title] = useState("");
  const [course1Code, setCourse1Code] = useState("");
  const [course1Credits, setCourse1Credits] = useState("");

  const [course2Title, setCourse2Title] = useState("");
  const [course2Code, setCourse2Code] = useState("");
  const [course2Credits, setCourse2Credits] = useState("");

  const [course3Title, setCourse3Title] = useState("");
  const [course3Code, setCourse3Code] = useState("");
  const [course3Credits, setCourse3Credits] = useState("");

  const [course5Title, setCourse5Title] = useState("");
  const [course5Code, setCourse5Code] = useState("");
  const [course5Credits, setCourse5Credits] = useState("");

  const [course4Title, setCourse4Title] = useState("");
  const [course4Code, setCourse4Code] = useState("");
  const [course4Credits, setCourse4Credits] = useState("");

  const [course6Title, setCourse6Title] = useState("");
  const [course6Code, setCourse6Code] = useState("");
  const [course6Credits, setCourse6Credits] = useState("");

  const [course7Title, setCourse7Title] = useState("");
  const [course7Code, setCourse7Code] = useState("");
  const [course7Credits, setCourse7Credits] = useState("");

  const [course8Title, setCourse8Title] = useState("");
  const [course8Code, setCourse8Code] = useState("");
  const [course8Credits, setCourse8Credits] = useState("");
  const token = JSON.parse(localStorage.getItem("UserDetails"));

  const regSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(
      "https://cste-club-ibrahimecste.vercel.app/init",
      {
        studentInfo: {
          name,
          studentID,
          department,
          hall,
          term,
          year,
          session,
          institute,
          yt: year + term,
        },
        fee,
        ref: "reg",
        studentID,
        regForm: {
          course1Title,
          course1Code,
          course1Credits,
          course2Title,
          course2Code,
          course2Credits,

          course3Title,
          course3Code,
          course3Credits,

          course4Title,
          course4Code,
          course4Credits,

          course5Title,
          course5Code,
          course5Credits,

          course6Title,
          course6Code,
          course6Credits,

          course7Title,
          course7Code,
          course7Credits,

          course8Title,
          course8Code,
          course8Credits,
        },
      },
      {
        headers: {
          authorization: `Bearer ${token?.token}`,
        },
      }
    );

    if (data?.paymentUrl) {
      setLoading(false);
      window.location.replace(data?.paymentUrl);
    } else {
      toast.error(data.error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(name, studentID, course1Code);
  });
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-4 text-center">Exam fee Form</h2>
      <div className="alert alert-info shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="font-semibold">From 20/01/22 to 01/01/23</span>
        </div>
      </div>
      <form onSubmit={regSubmit} className="w-full">
        <InputField
          type="text"
          fieldValue={name}
          requiredField="true"
          label="Name"
          setField={setName}
        />
        <InputField
          type="text"
          fieldValue={fatherName}
          requiredField="true"
          label="Father Name"
          setField={setFatherName}
        />
        <InputField
          type="text"
          fieldValue={motherName}
          requiredField="true"
          label="Mother Name"
          setField={setMotherName}
        />
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={studentID}
            requiredField="true"
            label="ID"
            setField={setStudentID}
          />

          <InputField
            type="text"
            fieldValue={department}
            requiredField="true"
            label="Department"
            setField={setDepartment}
          />
          <InputField
            type="text"
            fieldValue={examDate}
            requiredField="true"
            label="Exam date"
            setField={setExamDate}
          />
          <InputField
            type="text"
            fieldValue={examYear}
            requiredField="true"
            label="Exam Year"
            setField={setExamYear}
          />
          <InputField
            type="text"
            fieldValue={examPercentange}
            requiredField="true"
            label="Percentange"
            setField={setExamPercentange}
          />
        </div>
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={hall}
            requiredField="true"
            label="Hall"
            setField={setHall}
          />
          <InputField
            type="text"
            fieldValue={institute}
            requiredField="true"
            label="Institute/Faculty"
            setField={setInsititue}
          />
        </div>
        <div className="md:flex md:gap-2">
          <InputField
            type="text"
            fieldValue={year}
            label="Year"
            requiredField="true"
            setField={setYear}
          />

          <InputField
            type="text"
            fieldValue={term}
            label="Term"
            requiredField="true"
            setField={setTerm}
          />
          <InputField
            type="text"
            fieldValue={session}
            label="Session"
            requiredField="true"
            setField={setSession}
          />
        </div>
        <div>
          <InputField
            type="number"
            setField={setFee}
            fieldValue={fee}
            requiredField="true"
            label="Fee"
          ></InputField>
        </div>
        <h4 className="font-bold my-4">Courses</h4>
        <ol className="list-decimal">
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course1Title}
                label="Course Title"
                setField={setCourse1Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course1Code}
                  label="Course Code"
                  setField={setCourse1Code}
                />
                <InputField
                  type="text"
                  fieldValue={course1Credits}
                  label="Credits"
                  setField={setCourse1Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course2Title}
                label="Course Title"
                setField={setCourse2Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course2Code}
                  label="Course Code"
                  setField={setCourse2Code}
                />
                <InputField
                  type="text"
                  fieldValue={course2Credits}
                  label="Credits"
                  setField={setCourse2Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course3Title}
                label="Course Title"
                setField={setCourse3Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course3Code}
                  label="Course Code"
                  setField={setCourse3Code}
                />
                <InputField
                  type="text"
                  fieldValue={course3Credits}
                  label="Credits"
                  setField={setCourse3Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course4Title}
                label="Course Title"
                setField={setCourse4Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course4Code}
                  label="Course Code"
                  setField={setCourse4Code}
                />
                <InputField
                  type="text"
                  fieldValue={course4Credits}
                  label="Credits"
                  setField={setCourse4Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course5Title}
                label="Course Title"
                setField={setCourse5Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course5Code}
                  label="Course Code"
                  setField={setCourse5Code}
                />
                <InputField
                  type="text"
                  fieldValue={course5Credits}
                  label="Credits"
                  setField={setCourse5Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course6Title}
                label="Course Title"
                setField={setCourse6Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course6Code}
                  label="Course Code"
                  setField={setCourse6Code}
                />
                <InputField
                  type="text"
                  fieldValue={course6Credits}
                  label="Credits"
                  setField={setCourse6Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course7Title}
                label="Course Title"
                setField={setCourse7Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course7Code}
                  label="Course Code"
                  setField={setCourse7Code}
                />
                <InputField
                  type="text"
                  fieldValue={course7Credits}
                  label="Credits"
                  setField={setCourse7Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputField
                type="text"
                fieldValue={course8Title}
                label="Course Title"
                setField={setCourse8Title}
              />
              <div className="flex">
                <InputField
                  type="text"
                  fieldValue={course8Code}
                  label="Course Code"
                  setField={setCourse8Code}
                />
                <InputField
                  type="text"
                  fieldValue={course8Credits}
                  label="Credits"
                  setField={setCourse8Credits}
                  className="ml-4"
                />
              </div>
            </div>
          </li>
        </ol>

        <div className="mx-auto w-full text-center my-2">
          {!loading && <SubmitBtn value="Pay"></SubmitBtn>}
        </div>
      </form>
      <div className="mx-auto w-full text-center my-2">
        {loading && <SubmitBtn value="Loading..."></SubmitBtn>}
      </div>
      <Toaster />
    </div>
  );
}
