import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 border-b">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <Link to="/registrationform">Registration </Link>
              </li>

              <li>
                <Link to="/coverpagegenerator">Cover Page</Link>
              </li>
              <li>
                <Link to="/coursematerials">Materials</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <a>Admin</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case  text-3xl xl:text-xl flex items-center "
          >
            <img src={logo} className="w-16 pr-4" alt="NSTU Logo" />
            <span className="font-semibold hidden xl:block text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-800">
              Computer Science & <br />
              Telecommunication Engineering
            </span>
            <span className="font-semibold block xl:hidden text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-800">
              CSTE
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-1">
          <ul className="menu menu-horizontal p-0 hover:bg-black-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registrationform">Registration</Link>
            </li>

            <li>
              <Link to="/coverpagegenerator">Cover Page</Link>
            </li>
            <li>
              <Link to="/coursematerials">Materials</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Admin</Link>
            </li>

            <li tabIndex={0}>
              <a className="justify-between">
                People
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
                className="p-2 bg-base-100 min-w-xs"
                style={{ zIndex: "99999999" }}
              >
                <li>
                  <Link to="/faculty">Faculty</Link>
                </li>
                <li>
                  <Link to="/students">Student</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className=" m-1 cursor-pointer">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="p-2">
                <strong>Borhan</strong>
                <p>ASH2101008M</p>
              </div>
              <li>
                <Link to="/myprofile">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
