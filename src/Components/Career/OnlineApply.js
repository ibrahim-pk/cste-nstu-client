import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const OnlineApply = () => {
    const [allJob,setAlljob]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
           const {data}=await axios.get('https://cste-club-ibrahimecste.vercel.app/api/online/job/circuler')
           setAlljob(data?.allJob)
           setLoading(false)
        }
        fetchData()
    },[])
    return (
        <div className='max-w-screen-lg mx-auto my-5'>
            <div className='card shadow-lg text-center my-5 p-2 bg-blue-700 text-white'>
              <h1 className='text-2xl font-bold'>Recent Job Circulars</h1>
               <h1 className='text-xl font-bold'>NSTU</h1>
            </div>
            {
                  loading&&<h1 className='text-center text-xl text-error'>Loading...</h1>  
            }
            {
              !loading&&<div className="w-full max-w-screen-lg mx-auto overflow-x-auto p-2">
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
                    <Link to={`/career/online/job/circuler/dashboard/${item._id}`} className="btn mx-1 btn-sm btn-info">
                      Apply
                    </Link>
                      </td>
                   </tr>
                 ))
               }
                </tbody>
              </table>
               </div>
            }
            
        <div className='text-center'>
            {/* The button to open modal */}
        <label htmlFor="how-job-apply-modal" className="text-blue-700 my-10" style={{cursor:'pointer'}}>How To Apply</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="how-job-apply-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="how-job-apply-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg my-2 font-bold">How to job apply in the website?</h3>
            <ul className='text-start'>
              <li>1.Go to the career option. <Link className='text-blue-700'  to='https://cste-dept.web.app/career/online/job/apply'>[career]</Link></li>
              <li>2.Click apply button.</li>
              <li>3.Register with your document.<Link className='text-blue-700'  to='https://cste-dept.web.app/career/online/job/apply/register'>[Register]</Link></li>
              <li>4.Login by email and password.<Link className='text-blue-700'  to='https://cste-dept.web.app/career/online/job/apply/login'>[Register]</Link></li>
              <li>5.Fillup your educational qualification,document,training etc and pay the fixed fees.</li>
            </ul>
        </div>
        </div>
        </div> 
        </div>
    );
};

export default OnlineApply;