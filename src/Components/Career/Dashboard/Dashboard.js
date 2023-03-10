import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const {id}=useParams()
    let token=JSON.parse(localStorage.getItem('JobUser'))
    const [allTraining,setAllTraining]=useState([])
    const [allQualification,setAllQualification]=useState([])
    const [allExp,setAllExp]=useState([])
    const [allDocument,setAllDocument]=useState([])
    const [allPublication,setAllPublication]=useState([])
    const [singleJob,setSingleJob]=useState({})
    const [loading,setLoading]=useState(false)

    const applicantPayment=async()=>{
        const {data}=await axios.post(`http://localhost:5000/applicant/init`,{
            fee:singleJob?.fees,
            ref: "job",
            jobId:singleJob?._id,
            applicantId:token?.userInfo?._id
        },{
            headers: {
                authorization: `Bearer ${token?.token}`,
              },
        })
        if (data?.paymentUrl) {
            setLoading(false);
            window.location.replace(data?.paymentUrl);
          } else {
            toast.error(data.error);
            setLoading(false);
          }
    }
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const {data}=await axios.get(`http://localhost:5000/api/job/applicant/${token?.userInfo?._id}`)
            setAllTraining(data?.info?.training)
            setAllQualification(data?.info?.qualification)
            setAllExp(data?.info?.experience)
            setAllDocument(data?.info?.document)
            setAllPublication(data?.info?.publication)
            setLoading(false)
        }
        const fetchData1=async()=>{
            const {data}=await axios.get(`http://localhost:5000/api/online/job/single/${id}`)
            setSingleJob(data?.Job)
        }
        fetchData();
        fetchData1();
    },[])

    return (
        <div className='max-w-screen-sm mx-auto my-5 p-4'>
            <div className='text-center mb-2'>
            <h1>Name of the Post:{singleJob?.postName}</h1>
            <h1>Name of the dept:{singleJob?.dept}</h1>
            <h1>Application + Processing Fee:{singleJob?.fees}BDT</h1>
            <a className='text-blue-700' href={singleJob?.viewLink}>View</a>
            </div>
            <div className='card border p-10'>

            <div className="flex flex-col w-full border-opacity-50">
            <div className="grid py-5 card bg-base-300 rounded-box place-items-center">
            <div>
            <div className='flex gap-1 text-xl'>
                   <h1><i className="fas fa-check text-green-700"></i></h1>
                   <h1>Personal Information</h1>
                 </div>
                 <div className='flex gap-1 text-xl'>
                   <h1>{allQualification?.length>0&&!loading?<i className="fas text-green-700 fa-check"></i>:<i className="fas text-rose-800 fa-times"></i>}</h1>
                   <h1>Education Qualification</h1>
                 </div>
                 <div className='flex gap-1 text-xl'>
                 <h1>{allDocument?.length>0&&!loading?<i className="fas text-green-700 fa-check"></i>:<i className="fas text-rose-800 fa-times"></i>}</h1>
                   <h1>Document's</h1>
                 </div>
            </div>
            </div>
            <div className="divider">Optional</div>
            <div className="grid py-5 card bg-base-300 rounded-box place-items-center">
            <div>
            <div className='flex gap-1 text-xl'>
                 <h1>{allTraining?.length>0&&!loading?<i className="fas text-green-700 fa-check"></i>:<i className="fas text-rose-800 fa-times"></i>}</h1>
                   <h1>Training</h1>
                 </div>
                 <div className='flex gap-1 text-xl'>
                 <h1>{allPublication?.length>0&&!loading?<i className="fas text-green-700 fa-check"></i>:<i className="fas text-rose-800 fa-times"></i>}</h1>
                   <h1>Publication</h1>
                 </div>
            </div>
            </div>
            </div>
             {
                allDocument?.length>0&&allQualification?.length>0?<button 
                onClick={applicantPayment}
                className='btn btn-sm  mt-4'>Pay</button>:<button className='btn btn-disabled btn-sm mt-4'>Pay</button>
             }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Dashboard;