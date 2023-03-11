import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const AllApplicant = () => {
    const [allJob,setAlljob]=useState([])
    const [loading,setLoading]=useState(false) 
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
           const {data}=await axios.get('http://localhost:5000/api/online/job/circuler')
           setAlljob(data?.allJob)
           setLoading(false)
        }
        fetchData()
    },[])
    return (
        <div className='max-w-screen-lg mx-auto my-5'>
            <div className='card shadow-lg text-center my-5 p-2 bg-blue-700 text-white'>
              <h1 className='text-2xl font-bold'>All Applicant </h1>
               <h1 className='text-xl font-bold'>NSTU</h1>
            </div>
          
            <div className="w-full max-w-screen-lg mx-auto overflow-x-auto p-2">
          <table className="border  border-black	 table-auto">
            <thead>
              <tr>
                <th className="border border-black bg-transparent">
                  No
                </th>
                <th className="border border-black  bg-transparent">
                POST
                </th>
                <th className="border border-black  bg-transparent">
                Dept
                </th>
                <th className="border border-black bg-transparent">Fees</th>
                <th className="border border-black bg-transparent">
                Closing
                </th>
                <th className="border border-black bg-transparent">
                Action
                </th>
              </tr>
            </thead>
            <tbody>
                {
                  loading&&<h1 className='text-center text-xl font-semibold'>Loading...</h1>  
                }
           {
             allJob.length>0&&!loading&&
             allJob.map((item,idx)=>(
                <tr key={idx}>
                <td className="border border-black	">{idx+1}</td>
                  <td className="border border-black">{item.postName}({item.postPerson})</td>
                   <td className="border border-black">{item.dept}</td>
                   <td className="border border-black">{item.fees} BDT</td>
                  <td className="border border-black">{item.endDate}</td>
                  <td className="border border-black	">
                  <a target='_blank' href={item.viewLink} className="btn mx-1 btn-sm">
                  View
                </a>
                <Link to={`/admin/dashboard/applicant/${item?._id}`}  className="btn mx-1 btn-sm btn-info">
                  Applicant
                </Link>
                  </td>
               </tr>
             ))
           }
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default AllApplicant;