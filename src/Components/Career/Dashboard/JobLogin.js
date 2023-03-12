import axios from 'axios';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const JobLogin = () => {
  const [appEmail,setAppEmail]=useState('')
  const [appPassword,setAppPassword]=useState('')

  const handleLogin=async(e)=>{
     e.preventDefault()
     const {data}=await axios.post('https://cste-club-ibrahimecste.vercel.app/api/job/apply/login',{
      appEmail,
      appPassword
     })
     if(data.msg){
       setAppEmail('')
       setAppPassword('')
      localStorage.setItem("JobUser", JSON.stringify(data));
      toast.success(data?.msg)
      window.location.href = "/career/online/job/apply/home"; 
  }else{
      toast.error(data?.error)
  }
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
       <p className='my-5'>New user? <Link className='text-blue-700' to='/career/online/job/apply/register'>Register</Link></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input onChange={(e)=>setAppEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered" required />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input onChange={(e)=>setAppPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered" required />
          </div>
        <div className="form-control mt-6">
          <button className="btn">Login</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  <Toaster></Toaster>
       </div>
    );
};

export default JobLogin;