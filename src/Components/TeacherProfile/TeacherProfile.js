import React, { useEffect, useState } from 'react';
import RegistrationFormView from '../UserProfile/RegistrationForm/RegistrationFormView';
import AddOnline from './AddOnline';
import AddTeacherInformation from './AddTeacherInformation';
import TeacherProfileCard from './TeacherProfileCard';

const TeacherProfile = () => {
    const [page, setPage] = useState();
    const [loginTeacher, setLoginTeacher] = useState({});
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("UserDetails"));
      setLoginTeacher(user?.teacher);
    }, []);
    const email = loginTeacher?.email;
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
                {page === "AddTeacherInformation" && <AddTeacherInformation />}
                {page === "AddOnlineCourse" && <AddOnline />}

                
              </>
            ) : (
              <div className="pt-2 px-5 mx-auto   mb-4  max-w-screen-xl	">
                <div>
                  <TeacherProfileCard loginTeacher={loginTeacher} />
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
              <button onClick={() => setPage("AddTeacherInformation")}>
              Add Information
              </button>
            </li>
            <li>
              <button onClick={() => setPage("AddOnlineCourse")}>
              Add Online Couese
              </button>
            </li>
           

            
          </ul>
        </div>
      </div>
    </div>
    );
};

export default TeacherProfile;