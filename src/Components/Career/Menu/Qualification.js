import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Qualification = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
   // console.log(token?.token)
    const [exam,setExam]=useState('')
    const [institute,setInstitute]=useState('')
    const [passingYr,setPassingYr]=useState('')
    const [result,setResult]=useState('')
    const [study,setStudy]=useState('')
    const [allQualification,setAllQualification]=useState([])
    const [loading,setLoading]=useState(false)
    const [reLoader,setReLoader]=useState(false)
    const handleQualification=async(e)=>{
        e.preventDefault()
        if(exam&&institute&&passingYr&&result&&study){
            const {data}=await axios.patch('http://localhost:5000/api/job/apply/qualification',{
                id:token?.userInfo?._id,
                qualification:{exam,institute,passingYr,result,study}
            },{
                
                headers:{
                    authorization: `Bearer ${token?.token}`
                }
            })
            if(data.msg){
                toast.success(data?.msg)
                setReLoader(!reLoader)
                setExam('')
                setInstitute('')
                setPassingYr('')
                setResult('')
                setStudy('')
            }else{
                toast.error(data?.error)
            }  
        }else{
            toast.error('Something Wrong!')
        }
        
       
    }
    const deleteQualification=async(index)=>{
          const {data}=await axios.
          post('http://localhost:5000/api/job/apply/qualification',{
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
            setAllQualification(data?.info?.qualification
                )
                setLoading(false)
        }
        fetchData()
    },[reLoader])
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-3xl mt-5 my-2'>All Qualification</h1>
        <label htmlFor="qualification-modal" className="btn btn-sm">Add Qualification</label>
         {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/4'>Qualification Title</th>
                    <th className='border border-black bg-transparent w-2/6'>Institute</th>
                    <th className='border border-black bg-transparent w-1/4'>Passing Year</th>
                    <th className='border border-black bg-transparent w-1/6'>Result</th>
                    <th className='border border-black bg-transparent w-1/4'>Action</th>
                </tr>
                {
                    allQualification.length>0&&!loading?
                    allQualification.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.exam}</td>
                    <td className='border border-black bg-transparent'>{item.institute}</td>
                    <td className='border border-black bg-transparent'>{item.passingYr}</td>
                    <td className='border border-black bg-transparent'>{item.result}</td>
                    <td className='border border-black bg-transparent'>
                        <button onClick={()=>deleteQualification(idx)} className='btn btn-sm btn-error mx-1'>Delete</button>
                    </td>
                </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your qualification</h1>
                }
            </table>
         </div>
         }

        <input type="checkbox" id="qualification-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="qualification-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-2xl text-center font-bold mt-5 mb-2'>Add Qualification</h1>
            <hr></hr>
            <div className="my-5 text-center">
              <form onSubmit={handleQualification}>
              <select className='w-full border my-2 px-1 py-2 rounded-md' onChange={(e)=>setExam(e.target.value)} vadata-te-select-init>
            <option >Select Option</option>
            <option value="SSC/Equivalent">SSC/Equivalent</option>
            <option value="HSC/Equivalent">HSC/Equivalent</option>
            <option value="BSC/Equivalent">BSC/Equivalent</option>
            <option value="MSC/Equivalent">MSC/Equivalent</option>
            <option value="PHD/Equivalent">PHD/Equivalent</option>
            <option value="Other">Other</option>
            </select>
            <br></br>     
            <input type='text' onChange={(e)=>setInstitute(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Institute' required/>
            <br></br>     
            <input type='text' onChange={(e)=>setPassingYr(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Passing Year' required/>

            <br></br>     
            <input type='text' onChange={(e)=>setResult(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Result' />
            <br></br>
            <select className='w-full border my-2 px-1 py-2 rounded-md' onChange={(e)=>setStudy(e.target.value)} vadata-te-select-init>
            <option >Select Status</option>
            <option value="Completed">Completed</option>
            <option value="On Going">On Going</option>
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

export default Qualification;