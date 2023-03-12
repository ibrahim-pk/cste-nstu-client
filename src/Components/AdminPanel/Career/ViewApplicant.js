import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewApplicant = () => {
    const token = JSON.parse(localStorage.getItem("UserDetails"));
    const [applicantList,setApplicantList]=useState([])
    const [loading,setLoading]=useState(false)
    const{id}=useParams()
    useEffect(()=>{
       const fetchData=async()=>{
        setLoading(true)
          const {data}=await axios.get(`https://cste-club-ibrahimecste.vercel.app/api/online/job/applicant/${id}`,{
            headers: {
                authorization: `Bearer ${token?.token}`,
              },
          })
          setApplicantList(data?.allApplicant)
          //console.log(data)
          setLoading(false)
       }
       fetchData()
    },[])
    return (
        <div className='max-w-screen-lg mx-auto my-5'>
            <h1 className='text-center my-2 text-blue-700 text-2xl'>All Applicant</h1>
               {
                loading&&<h1 className='text-center my-10 text-xl text-error'>Loading....</h1>
            }
             
            {
             applicantList.length>0&&!loading?
             applicantList.map((item,idx)=>(
                
           <div key={idx} className='card  text-zinc-700 border p-5 my-5'> 
           <div className='md:flex justify-between'>
             <div className='postInfo'>
                 <h1 className='text-2xl'>Name:{item?.appNameEng}</h1>
                 <h1 className='text-sm'>Gender:{item?.appGender}</h1>
                 <h1 className='text-sm'>Mob:{item?.appPhone}</h1>
                 <h1 className='text-sm'>Email:{item?.appEmail}</h1>
             </div>
             <div className='my-2'>
                 <Link to={`/admin/dashboard/applicant/resume/${item?._id}`}  alt='job notice' className='btn btn-sm'>View</Link>
             </div>
           </div>
        </div>
             )):!loading&&<div className='card shadow-lg m-5 p-4'>
                 <h1 className='text-center text-2xl text-rose-700 font-semibold'>No applicant's apply the post!</h1>
             </div>
           } 
        </div>
    );
};

export default ViewApplicant;