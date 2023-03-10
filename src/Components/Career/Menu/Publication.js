import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Publication = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
    const [title,setTitle]=useState('')
    const [identificationNo,setIdentificationNo]=useState('')
    const [link,setLink]=useState('')
    const [authors,setAuthors]=useState('')
    const [yearPublication,setYearPublication]=useState(0)
    const [nameJournal,setNameJournal]=useState('')

    // console.log(token?.token)

     const [allPublication,setAllPublication]=useState([])
     const [loading,setLoading]=useState(false)
     const [reLoader,setReLoader]=useState(false)

     const handlePublication=async(e)=>{
         e.preventDefault()
         if(title&&link&&authors){
             const {data}=await axios.patch('http://localhost:5000/api/job/apply/publication',{
                 id:token?.userInfo?._id,
                 publication:{
                    title,
                    identificationNo,
                    link,
                    authors,
                    yearPublication,
                    nameJournal

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
                 setIdentificationNo('')
                 setLink('')
                 setAuthors('')
                 setYearPublication('')
                 setNameJournal('')
             }else{
                 toast.error(data?.error)
             }  
         }else{
             toast.error('Something Wrong!')
         }
         
        
     }
     const deletePublication=async(index)=>{
           const {data}=await axios.
           post('http://localhost:5000/api/job/apply/publication',{
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
             setAllPublication(data?.info?.publication)
                 setLoading(false)
         }
         fetchData()
     },[reLoader])

    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-3xl mt-5 my-2'>All Publication</h1>
        <label htmlFor="training-modal" className="btn btn-sm">Add Publication</label>
         {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/4'>Title</th>
                    <th className='border border-black bg-transparent w-2/6'>Identification No.</th>
                    <th className='border border-black bg-transparent w-1/4'>Authors</th>
                    <th className='border border-black bg-transparent w-1/4'>Action</th>
                </tr>
                {
                    allPublication?.length>0&&!loading?
                    allPublication.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item?.title}</td>
                    <td className='border border-black bg-transparent'>{item?.identificationNo}</td>
                    <td className='border border-black bg-transparent'>{item?.authors}</td>
                    <td className='border border-black bg-transparent'>
                        <button onClick={()=>deletePublication(idx)} className='btn btn-sm btn-error mx-1'>Delete</button>
                    </td>
                         </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your Publication</h1>
                }
            </table>
         </div>
         }

        <input type="checkbox" id="training-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="training-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-2xl text-center font-bold mt-2 mb-2'>Add Publication</h1>
            <hr></hr>
            <div className="my-2 text-center">
              <form onSubmit={handlePublication}>
            <br></br>     
            <input type='text' onChange={(e)=>setTitle(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Title' required/>
            <br></br>     
            <input type='text' onChange={(e)=>setIdentificationNo(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Identification No. (DOI, ISBN or etc.)' required/>

            <br></br>     
            <input type='text' onChange={(e)=>setLink(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Link' />
           <br></br>
           <input type='text' onChange={(e)=>setAuthors(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Authors (Coma [,] separated)' />
           <br></br>
           <input type='text' onChange={(e)=>setYearPublication(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Year of the publication' />
           <br></br>
           <input type='text' onChange={(e)=>setNameJournal(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Name of the journal/conference' />
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

export default Publication;
