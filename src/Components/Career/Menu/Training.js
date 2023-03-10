import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Training = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
    const [title,setTitle]=useState('')
    const [duration,setDuration]=useState('')
    const [institute,setInstitute]=useState('')

    // console.log(token?.token)

     const [allTraining,setAllTraining]=useState([])
     const [loading,setLoading]=useState(false)
     const [reLoader,setReLoader]=useState(false)

     const handleTraining=async(e)=>{
         e.preventDefault()
         if(title&&institute&&duration){
             const {data}=await axios.patch('http://localhost:5000/api/job/apply/training',{
                 id:token?.userInfo?._id,
                 training:{
                    title,
                    duration,
                    institute
                 }
             },{
                 
                 headers:{
                     authorization: `Bearer ${token?.token}`
                 }
             })
             if(data.msg){
                 toast.success(data?.msg)
                 setReLoader(!reLoader)
                 setTitle('')
                 setDuration('')
                 setInstitute('')
             }else{
                 toast.error(data?.error)
             }  
         }else{
             toast.error('Something Wrong!')
         }
         
        
     }
     const deleteTraining=async(index)=>{
           const {data}=await axios.
           post('http://localhost:5000/api/job/apply/training',{
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
             setAllTraining(data?.info?.training
                 )
                 setLoading(false)
         }
         fetchData()
     },[reLoader])

    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-3xl mt-5 my-2'>All Training</h1>
        <label htmlFor="training-modal" className="btn btn-sm">Add Training</label>
         {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/4'>Title</th>
                    <th className='border border-black bg-transparent w-2/6'>Institute</th>
                    <th className='border border-black bg-transparent w-1/4'>Duration</th>
                    <th className='border border-black bg-transparent w-1/4'>Action</th>
                </tr>
                {
                    allTraining?.length>0&&!loading?
                    allTraining.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.title}</td>
                    <td className='border border-black bg-transparent'>{item.institute}</td>
                    <td className='border border-black bg-transparent'>{item.duration}</td>
                    <td className='border border-black bg-transparent'>
                        <button onClick={()=>deleteTraining(idx)} className='btn btn-sm btn-error mx-1'>Delete</button>
                    </td>
                         </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your training</h1>
                }
            </table>
         </div>
         }

        <input type="checkbox" id="training-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="training-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-2xl text-center font-bold mt-2 mb-2'>Add Training</h1>
            <hr></hr>
            <div className="my-2 text-center">
              <form onSubmit={handleTraining}>
            <br></br>     
            <input type='text' onChange={(e)=>setTitle(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Title' required/>
            <br></br>     
            <input type='text' onChange={(e)=>setDuration(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Duration' required/>

            <br></br>     
            <input type='text' onChange={(e)=>setInstitute(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Institute' />
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

export default Training;