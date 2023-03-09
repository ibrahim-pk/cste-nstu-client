import React, { useEffect, useState } from "react";
import RegistrationFormView from "./RegistrationForm/RegistrationFormView";
import styles from "./UserProfile.css";
import EditProfile from "./EditProfile";
import Result from "./Result";
import Suggestion from "./Suggestion/Suggestion";
import HSCForm from "./HscSscForm/HSCForm";
import SSCForm from "./HscSscForm/SSCForm";
import ProfileCard from "./ProfileCard";
import Materials from "./Materials";
import { Link } from "react-router-dom";

export default function () {
  const [page, setPage] = useState();
  const [loginStudent, setLoginStudent] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    setLoginStudent(user?.student);
  }, []);
  const id = loginStudent?.studentId;
  return (
    <div>
      <div className="drawer" id="drawer-user">
        <input
          id="my-drawer"
          type="checkbox"
          className={`drawer-toggle drawer_height`}
        />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer"
            className="p-4 cursor-pointer drawer-button bg-blue-900 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="flex-1 ">
            {page ? (
              <>
                {page === "RegistrationView" && <RegistrationFormView />}

                {page == "editProfile" && <EditProfile id={id} />}
                {page == "Result" && <Result />}
                {page == "Suggestion" && <Suggestion />}
                {page == "HSCForm" && <HSCForm />}
                {page == "SSCForm" && <SSCForm />}
                {page == "materials" && <Materials />}
              </>
            ) : (
              <div className="pt-2 px-5 mx-auto   mb-4  max-w-screen-xl	">
                <div>
                  <ProfileCard loginStudent={loginStudent} />
                </div>
                <button
                  onClick={() => setPage("editProfile")}
                  className="text-right w-full float-right block font-semibold mt-4"
                >
                  Edit Profile
                </button>

                <div>
                  <table className="border mt-5">
                    <tbody>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Name</td>
                        <td className="">{loginStudent?.name}</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">StudentId</td>
                        <td className="">{loginStudent?.studentId}</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Blood</td>
                        <td className="">
                          {loginStudent ? loginStudent.blood : "Null"}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">CGPA</td>
                        <td className="">3.50</td>
                      </tr>

                      <tr className="border ">
                        <td className="bg-slate-100 border">Mobile</td>
                        <td className="">{loginStudent?.contactNo}</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Email</td>
                        <td className="">{loginStudent?.email}</td>
                      </tr>

                      <tr className="border ">
                        <td className="bg-slate-100 border">Department</td>
                        <td className="">
                          {loginStudent ? loginStudent.dept : "Null"}
                        </td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Session</td>
                        <td className="">{loginStudent?.session}</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Address:</td>
                        <td className="">
                          {loginStudent ? loginStudent.address : "Null"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="my-5 flex gap-6 mt-8">
                    <div className="flex-1">
                      <h2 className="text-2xl">SSC Details</h2>
                      <table className="border mt-5">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">{loginStudent?.ssc?.board}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Year</td>
                            <td className="">{loginStudent?.ssc?.year}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Roll No</td>
                            <td className="">{loginStudent?.ssc?.roll}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">
                              Registration No
                            </td>
                            <td className="">{loginStudent?.ssc?.regNo}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">GPA</td>
                            <td className="">{loginStudent?.ssc?.gpa}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl">HSC Details</h2>
                      <table className="border mt-5">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Board</td>
                            <td className="">{loginStudent?.hsc?.board}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Year</td>
                            <td className="">{loginStudent?.hsc?.year}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">Roll No</td>
                            <td className="">{loginStudent?.hsc?.roll}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">
                              Registration No
                            </td>
                            <td className="">{loginStudent?.hsc?.regNo}</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">GPA</td>
                            <td className="">{loginStudent?.hsc?.gpa}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <button onClick={() => setPage("")}>Home</button>
            </li>

            <li>
              <Link to="/registrationform">
                <button>Registration</button>
              </Link>
            </li>
            <li>
              <button onClick={() => setPage("RegistrationView")}>
                Registration Form Download
              </button>
            </li>
            <li>
              <button onClick={() => setPage("RegistrationView")}>
                Admit Card Download
              </button>
            </li>

            <li>
              <button onClick={() => setPage("Result")}>Result</button>
            </li>
            <li>
              {id && id[0] === "C" && (
                <button onClick={() => setPage("materials")}>
                  Add Materials
                </button>
              )}
            </li>
            <li>
              <button onClick={() => setPage("HSCForm")}>HSC Details</button>
            </li>
            <li>
              <button onClick={() => setPage("SSCForm")}>SSC Details</button>
            </li>
            <li>
              <button onClick={() => setPage("Suggestion")}>Suggestion</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
