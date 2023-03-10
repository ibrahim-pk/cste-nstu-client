import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JobCirculer = () => {
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
        <div className='max-w-screen-lg mx-auto my-4'>
            <div className='card bg-blue-700 p-5'>
              <h1 className='text-center text-2xl text-base-100'>Job circuler</h1>             
            <form className="flex items-center pb-2">   
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>

            </div>
            {
                loading&&<h1 className='text-center text-xl text-error'>Loading....</h1>
            }
             
            {
             allJob.length>0&&!loading&&
             allJob.map((item,idx)=>(
                
           <div key={idx} className='card  text-zinc-700 border p-5 my-5'> 
           <div className='md:flex justify-between'>
             <div className='postInfo'>
                 <h1 className='text-sm font-bold text-blue-700 my-1'><i className="far mr-2 fa-calendar-alt"></i>{item?.date}</h1>
                 <h1 className='text-2xl'>{item?.postName}</h1>
                 <h1 className='text-sm my-1'><span className='font-bold'>Tags</span>:circular,job</h1>
             </div>
             <div className='my-2'>
                 <a href={item?.viewLink} target='_blank' alt='job notice' className='btn btn-sm'>Download</a>
             </div>
           </div>
        </div>
             ))
           }      

        </div>
    );
};

export default JobCirculer;