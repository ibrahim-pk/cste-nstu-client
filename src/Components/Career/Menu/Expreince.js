import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Expreince = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
   // console.log(token?.token)
    const [designation,setDesignation]=useState('')
    const [organization,setOrganization]=useState('')
    const [organizationType,setOrganizationType]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [currentJob,setCurrentJob]=useState(false)
   
    const [allExp,setAllExp]=useState([])
    const [loading,setLoading]=useState(false)
    const [reLoader,setReLoader]=useState(false)
    const handleExperience=async(e)=>{
        e.preventDefault()
        if(designation&&organization&&organizationType&&startDate&&endDate){
            const {data}=await axios.patch('http://localhost:5000/api/job/apply/experience',{
                id:token?.userInfo?._id,
                experience:{
                    designation,
                    organization,
                    organizationType,
                    startDate,
                    endDate,
                    currentJob
                }
            },{
                
                headers:{
                    authorization: `Bearer ${token?.token}`
                }
            })
            if(data.msg){
                toast.success(data?.msg)
                setReLoader(!reLoader)
                setDesignation('')
                setOrganization('')
                setOrganizationType('')
                setStartDate('')
                setEndDate('')
            }else{
                toast.error(data?.error)
            }  
        }else{
            toast.error('Something Wrong!')
        }
        
       
    }
    const deleteExperience=async(index)=>{
          const {data}=await axios.
          post('http://localhost:5000/api/job/apply/experience',{
            id:token?.userInfo?._id,
            index
          },{
             
            headers:{
                authorization: `Bearer ${token?.token}`
            }

          })
          toast.success(data?.msg)
          setReLoader(!reLoader)
    }
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const {data}=await axios.get(`http://localhost:5000/api/job/applicant/${token?.userInfo?._id}`)
            setAllExp(data?.info?.experience)
                setLoading(false)
        }
        fetchData()
    },[reLoader])
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-3xl mt-5 my-2'>All Experience</h1>
        <label htmlFor="experience-modal" className="btn btn-sm">Add Experience</label>
         {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/4'>Designation</th>
                    <th className='border border-black bg-transparent w-2/6'>Organization</th>
                    <th className='border border-black bg-transparent w-1/4'>Organization Type</th>
                    <th className='border border-black bg-transparent w-1/6'>Start Date</th>
                    <th className='border border-black bg-transparent w-1/6'>End Date</th>
                    <th className='border border-black bg-transparent w-1/4'>Action</th>
                </tr>
                {
                    allExp?.length>0&&!loading?
                    allExp.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.designation}</td>
                    <td className='border border-black bg-transparent'>{item.organization}</td>
                    <td className='border border-black bg-transparent'>{item.organizationType}</td>
                    <td className='border border-black bg-transparent'>{item.startDate}</td>
                    <td className='border border-black bg-transparent'>{item.endDate}</td>
                    <td className='border border-black bg-transparent'>
                        <button onClick={()=>deleteExperience(idx)} className='btn btn-sm btn-error mx-1'>Delete</button>
                    </td>
                </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your experience</h1>
                }
            </table>
         </div>
         }

        <input type="checkbox" id="experience-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="experience-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-2xl text-center font-bold mt-5 mb-2'>Add Experience</h1>
            <hr></hr>
            <div className="my-5 text-center">
              <form onSubmit={handleExperience}>
              <select className='w-full border my-2 px-1 py-2 rounded-md' onChange={(e)=>setOrganizationType(e.target.value)} vadata-te-select-init>
            <option >Organization Type</option>
            <option value="Govt">Govt</option>
            <option value="Autonomous">Autonomous</option>
            <option value="Private">Private</option>
            <option value="Other">Other</option>
            </select>
            <br></br>     
            <input type='text' onChange={(e)=>setOrganization(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Organization' required/>
            <br></br>     
            <input type='text' onChange={(e)=>setDesignation(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Designation' required/>

            <br></br>     
            <input type='date' onChange={(e)=>setStartDate(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Start Date' />
            <br></br>
            <input type='date' onChange={(e)=>setEndDate(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='End Date' />
           <br></br>
           <select className='w-full border my-2 px-1 py-2 rounded-md' onChange={(e)=>setCurrentJob(e.target.value)} vadata-te-select-init>
            <option >Is it your current job?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
           <br></br>
           <button className='btn btn-sm my-2'>Save</button>
              </form>
          </div>
        </div>
        </div>
        </div>
        <Toaster></Toaster>
        </div>
        
    );
};

export default Expreince;