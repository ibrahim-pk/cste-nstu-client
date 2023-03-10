import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../../img/logo.png";
const Navbar = () => {
  const [reLoader,setReloader]=useState(false)
  let token=JSON.parse(localStorage.getItem('JobUser'))
  const logOutUser=()=>{
    localStorage.removeItem('JobUser')
    setReloader(!reLoader)
    window.location.href='/career/online/job/apply/login'
  }
  useEffect(()=>{
   token=JSON.parse(localStorage.getItem('JobUser'))
  //console.log(token?.userInfo)
  },[reLoader])
    return (
        <div className="navbar bg-blue-500 text-white px-10">
            {/* small device */}
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/'>
    <img src={logo} alt="NSTU LOGO" className="w-8 h-12" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/career/online/job/apply/home'>Home</Link></li>
      <li><Link to='/career/online/job/apply'>Payment</Link></li>
      <li><Link to='/career/online/job/qualification'>Qualification</Link></li>
      <li><Link to='/career/online/job/document'>Documents</Link></li>
      <li><Link to='/career/online/job/expreience'>Experiences</Link></li>
      <li><Link to='/career/online/job/publication'>Publications</Link></li>
      <li><Link to='/career/online/job/training'>Trainings</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   {
    !token?<Link to='/career/online/job/apply/login' className="btn btn-sm">Login</Link>: <button onClick={logOutUser} className="btn btn-sm">Logout</button>
   }
  </div>
</div>
    );
};

export default Navbar;