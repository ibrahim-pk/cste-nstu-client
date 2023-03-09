import React, { useEffect, useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import RegTime from "./RegTime";
import swal from "sweetalert";
export default function RegistrationForm() {
  const [name, setName] = useState("");
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
  const [page, setPage] = useState(1);

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

  const [isTimeOver, setIsTimeOver] = useState(false);

  const regSubmit = async (e) => {
    e.preventDefault();
    if (
      !name &&
      !studentID &&
      !department &&
      !hall &&
      !session &&
      !institute &&
      !year &&
      !term &&
      !fee
    ) {
      toast.error("Require Field is empty!");
    } else {
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
    }
  };
  if (isTimeOver) {
    swal("Sorry", "Your Registration Date is Over", "error");
  }
  let endDate = token?.student?.RegDate?.endtDate;
  let startDate = token?.student?.RegDate?.startDate;
  return (
    <div className="mx-auto max-w-screen-lg	 w-full px-4 mt-5 mb-4">
      <h2 className="text-3xl mb-4 text-center">REGISTRATION FORM</h2>
      <div>
        <RegTime
          isTimeOver={isTimeOver}
          setIsTimeOver={setIsTimeOver}
        ></RegTime>
      </div>
      <div>
        {!isTimeOver ? (
          <div className="w-full">
            <div>
              {page === 1 && (
                <div>
                  <InputField
                    type="text"
                    fieldValue={name}
                    requiredField="true"
                    label="Name"
                    setField={setName}
                  />
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
                  <button
                    onClick={() => setPage(page + 1)}
                    className="btn my-2  btn-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
            <div>
              {page === 2 && (
                <div>
                  <InputField
                    type="text"
                    fieldValue={year}
                    requiredField="true"
                    label="Year"
                    setField={setYear}
                  />

                  <InputField
                    type="text"
                    fieldValue={term}
                    requiredField="true"
                    label="Term"
                    setField={setTerm}
                  />
                  <InputField
                    type="text"
                    fieldValue={session}
                    requiredField="true"
                    label="Session"
                    setField={setSession}
                  />
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 3 && (
                <div>
                  <InputField
                    type="number"
                    setField={setFee}
                    fieldValue={fee}
                    requiredField="true"
                    label="Fee"
                  ></InputField>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 4 && (
                <div>
                  <h4 className="font-bold my-4">1.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course1Title}
                      label="Course Title"
                      setField={setCourse1Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course1Code}
                      label="Course Code"
                      setField={setCourse1Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course1Credits}
                      label="Credits"
                      setField={setCourse1Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 5 && (
                <div>
                  <h4 className="font-bold my-4">2.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course2Title}
                      label="Course Title"
                      setField={setCourse2Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course2Code}
                      label="Course Code"
                      setField={setCourse2Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course2Credits}
                      label="Credits"
                      setField={setCourse2Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 6 && (
                <div>
                  <h4 className="font-bold my-4">3.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course3Title}
                      label="Course Title"
                      setField={setCourse3Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course3Code}
                      label="Course Code"
                      setField={setCourse3Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course3Credits}
                      label="Credits"
                      setField={setCourse3Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 7 && (
                <div>
                  <h4 className="font-bold my-4">4.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course4Title}
                      label="Course Title"
                      setField={setCourse4Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course4Code}
                      label="Course Code"
                      setField={setCourse4Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course4Credits}
                      label="Credits"
                      setField={setCourse4Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 8 && (
                <div>
                  <h4 className="font-bold my-4">5.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course5Title}
                      label="Course Title"
                      setField={setCourse5Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course5Code}
                      label="Course Code"
                      setField={setCourse5Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course5Credits}
                      label="Credits"
                      setField={setCourse5Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 9 && (
                <div>
                  <h4 className="font-bold my-4">6.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course6Title}
                      label="Course Title"
                      setField={setCourse6Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course6Code}
                      label="Course Code"
                      setField={setCourse6Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course6Credits}
                      label="Credits"
                      setField={setCourse6Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 10 && (
                <div>
                  <h4 className="font-bold my-4">7.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course7Title}
                      label="Course Title"
                      setField={setCourse7Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course7Code}
                      label="Course Code"
                      setField={setCourse7Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course7Credits}
                      label="Credits"
                      setField={setCourse7Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 11 && (
                <div>
                  <h4 className="font-bold my-4">8.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course8Title}
                      label="Course Title"
                      setField={setCourse8Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course8Code}
                      label="Course Code"
                      setField={setCourse8Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course8Credits}
                      label="Credits"
                      setField={setCourse8Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      className="btn btn-sm"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              {page === 12 && (
                <div>
                  <h4 className="font-bold my-4">9.Courses</h4>
                  <div>
                    <InputField
                      type="text"
                      fieldValue={course1Title}
                      label="Course Title"
                      setField={setCourse1Title}
                    />

                    <InputField
                      type="text"
                      fieldValue={course1Code}
                      label="Course Code"
                      setField={setCourse1Code}
                    />
                    <InputField
                      type="number"
                      fieldValue={course1Credits}
                      label="Credits"
                      setField={setCourse1Credits}
                    />
                  </div>
                  <div className="flex justify-between my-2">
                    <button
                      onClick={() => setPage(page - 1)}
                      className="btn btn-sm"
                    >
                      Prev
                    </button>
                    <div>
                      <div className="">
                        {!loading && (
                          <button
                            onClick={regSubmit}
                            className="btn btn-sm  bg-blue-900 hover:bg-blue-800 "
                          >
                            Pay
                          </button>
                        )}
                      </div>
                      <div className="">
                        {loading && (
                          <button className="btn btn-sm  bg-blue-900 hover:bg-blue-800 ">
                            Loading...
                          </button>
                        )}
                      </div>
                      <Toaster />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="card shadow-2xl p-5 my-15">
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl">
                Start Date:{startDate ? startDate : "No Published"}
              </p>
              <p className="text-xl">
                End Date:{endDate ? endDate : "No Published"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
