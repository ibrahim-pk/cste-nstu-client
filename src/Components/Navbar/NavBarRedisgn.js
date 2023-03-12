import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
import "../Navbar/style.css";
export default function NavBarRedisgn() {
  const [userInfo, setUserInfo] = useState({});
  const [reLoader, setReLoader] = useState(false);
  let user = JSON.parse(localStorage.getItem("UserDetails"));
  const logOut = () => {
    localStorage.removeItem("UserDetails");
    window.location.href = "/";
  };
  useEffect(() => {
    
   // console.log(user)
   if(user?.student){
      setUserInfo(user?.student); 
    }
   else if(user?.teacher){
      setUserInfo(user?.teacher); 
    }
    else{
      setUserInfo(''); 
    }
  }, [reLoader]);
  const id = userInfo?.studentId;
  //console.log(userInfo)
  return (
    <div>
      {/* header for large screen */}
      <div className="hidden lg:flex  items-center justify-center text-center lg:text-left flex-col md:flex-row gap-4 px-2">
        <Link
          to="/"
          className="lg:flex  items-center justify-center text-center lg:text-left flex-col md:flex-row gap-4 py-1 px-2"
        >
          <div>
            <img src={logo} alt="NSTU LOGO" className="w-12" />
          </div>
          <div>
            <h3
              className="text-xl lg:text-xl"
              style={{ letterSpacing: "3.5px" }}
            >
              Noakhali Science & Technology Univeristy
            </h3>
            <h2 className="text-xl lg:text-xl font-semibold">
              Computer Science and Telecommunication Engineering
            </h2>
          </div>
        </Link>
      </div>
      {/*
        NAVBAR
        */}
      <div className="navbar bg-base-100 border-b border-t lg:justify-center">
        <div className="navbar-start flex justify-between lg:hidden w-full">
          <div className="mx-auto text-3xl xl:text-xl  flex flex-1 items-center text-center w-full ">
            <Link to="/" className="normal-case flex items-center">
              <img src={logo} className="w-16 pr-4" alt="NSTU Logo" />

              <span className="hidden md:block font-semibold block text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-800">
                Computer Science & Telecommunication Engineering
              </span>
              <span className="block md:hidden font-semibold block text-3xl text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-800">
                CSTE
              </span>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            {/* small device nav */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              style={{ zIndex: "99999" }}
            >
              <li>
                <a>HOME</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  ACADEMICS
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul
                  className="p-2 bg-base-100 min-w-xs submenu-left"
                  style={{ zIndex: "99999999" }}
                >
                  <li>
                    <Link to="/curriculums">CURRICULUMS</Link>
                  </li>
                  {
                    user?.student&&<li>
                    <Link to="/coursematerials">MATERIALS</Link>
                  </li>
                  }
                  <li>
                    <Link to="/online-course">ONLINE COURSE</Link>
                  </li>
                  <li>
                    <Link to="/coverpagegenerator">COVER PAGE</Link>
                  </li>
                </ul>
              </li>
              {id === "cstedeptadmin" && (
                <li>
                  <Link to="/admin/dashboard">ADMIN</Link>
                </li>
              )}

              <li>
                <Link to="/user/payment">PAYMENT</Link>
              </li>
              <li>
                <Link to="/notices">NOTICE</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/csteclub">CLUB</Link>
              </li>

              <li tabIndex={0}>
                <a className="justify-between">
                  More
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 min-w-xs submenu-left">
                  <li>
                    <Link to="/faculty">FACALTY</Link>
                  </li>
                  <li>
                    <Link to="/students">STUDENT</Link>
                  </li>
                </ul>
              </li>
              <li>{userInfo && <Link to="/myprofile">Dashboard</Link>}</li>
              <li>
                <div className="lg:block">
                  {userInfo ? (
                    <li>
                      <button
                        onClick={logOut}
                        className="btn btn-md w-full bg-blue-900 hover:hover:bg-blue-800 text-white"
                      >
                        LOGOUT
                      </button>
                    </li>
                  ) : (
                    <div>
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-md w-full  bg-blue-900 hover:hover:bg-blue-800 text-white"
                      >
                        Login
                      </label>
                      {/* <Link
                        to="/login"
                        className="btn   btn-md w-full  bg-blue-900 hover:hover:bg-blue-800 text-white"
                      >
                        LOGIN
                      </Link> */}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full navbar-center hidden lg:flex flex-1">
          <ul className="menu mx-auto  menu-horizontal p-0 hover:bg-black-400 text-center">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                ACADEMICS
              </a>
              <ul
                className="p-2 innerList bg-base-100 min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/curriculums">CURRICULUMS</Link>
                </li>
                {
                    user?.student&&<li>
                    <Link to="/coursematerials">MATERIALS</Link>
                  </li>
                  }
               
                <li>
                  <Link to="/online-course">ONLINE COURSE</Link>
                </li>
                <li>
                  <Link to="/coverpagegenerator">COVER PAGE</Link>
                </li>
              </ul>
            </li>

           
            <li>
              <Link to="/user/payment">PAYMENT</Link>
            </li>
            <li>
              <Link to="/notices">NOTICE</Link>
            </li>
            <li>
              <Link to="/news">NEWS</Link>
            </li>
            <li>
              <Link to="/csteclub">CLUB</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                GALARY
               
              </a>
              <ul
                className="p-2 bg-base-100 innerList min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/gallary/csteofficial">CSTE OFFICIAL</Link>
                </li>
                <li>
                  <Link to="/students">OTHER EVENT</Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                CAREER
               
              </a>
              <ul
                className="p-2 bg-base-100 innerList min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/career/online/job/apply">APPLY ONLINE</Link>
                </li>
                <li>
                  <Link to="/career/online/job/circuler">CIRCULER</Link>
                </li>
                {/* <li>
                  <Link to="/career/online/application/form">APPLICATION FORM</Link>
                </li> */}
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                MORE
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul
                className="p-2 bg-base-100 innerList min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/faculty">FACULTY</Link>
                </li>
                <li>
                  <Link to="/students">STUDENT</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Dropdown for if user logged in [for lg screen only]  */}
        <div className="hidden lg:block">
          {userInfo ? (
            <div className="dropdown dropdown-bottom dropdown-end ">
              <label tabIndex={0} className=" m-1 cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={userInfo?.picture} />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div className="p-2">
                  <strong>{userInfo?.name}</strong>
                  <p>{userInfo?.studentId}</p>
                  {/* <p className="text-xs">{userInfo?.email}</p> */}
                </div>
                <li>
                 
                  {userInfo?.role==="teacher"&&userInfo?.admin &&
                   (
                <Link className="btn w-full my-2 text-white" to="/admin/dashboard">ADMIN DASHBOARD</Link>)
                }
                {
                   userInfo?.role==="teacher"  || !userInfo?.admin ?( <Link className="btn my-2 text-white" to="/teacher/profile">
                   DASHBOARD
                 </Link>):( <Link className="btn my-2 text-white" to="/myprofile">
                   DASHBOARD
                 </Link>)
                }
                  
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="btn  bg-blue-900 hover:hover:bg-blue-800 text-white"
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <label
                htmlFor="my-modal-3"
                className="btn btn-xs w-full  bg-blue-900 hover:hover:bg-blue-800 text-white"
              >
                Login
              </label>
            </div>
          )}
        </div>
      </div>
      {/* modal */}
      <div>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <label htmlFor="my-modal-3" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-xl text-center pt-3 my-2 font-bold">
              Login For Dashboard
            </h3>
            <hr />
            <Link to="/teacher/login">
              <button className="btn teacherMenu w-full my-2">Teacher</button>
            </Link>
            <br />
            <Link to="/student/login">
              <button
                htmlFor="my-modal-3"
                className="btn studentMenu w-full my-2"
              >
                Student
              </button>
            </Link>
          </label>
        </label>
      </div>
    </div>
  );
}
