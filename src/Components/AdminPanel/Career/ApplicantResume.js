import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import { useParams } from 'react-router-dom';
const ApplicantResume = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
    const {id}=useParams()
    const [applicantInfo,setApplicantInfo]=useState()
    const [allTraining,setAllTraining]=useState([])
    const [allQualification,setAllQualification]=useState([])
    const [allExp,setAllExp]=useState([])
    const [loading,setLoading]=useState(false)
    const [reLoader,setReLoader]=useState(false)
    const approveAppHandle=async(value)=>{
        //console.log(value)
        setLoading(true)
        const {data}=await axios.patch(`https://cste-club-ibrahimecste.vercel.app/api/job/applicant/isapprove/${id}`,{
            value
        })
        if(data?.msg){
            toast.success(data.msg)
            setLoading(false)
            setReLoader(!reLoader)
        }else{
            toast.error(data.error)
            setLoading(false)
            setReLoader(!reLoader)
        }
    }
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const {data}=await axios.get(`https://cste-club-ibrahimecste.vercel.app/api/job/applicant/${id}`)
            setApplicantInfo(data?.info)
            setAllTraining(data?.info?.training)
            setAllQualification(data?.info?.qualification)
            setAllExp(data?.info?.experience)
            setLoading(false)
        }
        fetchData()
    },[reLoader])

    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-center text-blue-700 text-2xl font-semibold my-5'>Personal Info</h1>
             
            <div>
                {
                    applicantInfo?.admitCard? <button onClick={()=>approveAppHandle(0)} className='my-5 text-rose-700'>
                    <i className="far mx-1 fa-window-close"></i>
                    Cancel Approve </button>:<button onClick={()=>approveAppHandle(1)} className='my-5 text-blue-700'>
               <i className="far mx-1 fa-thumbs-up"></i>
               Approve Applicant</button>
                    
                }
              
            </div>
            <div  >
                <div className='card p-5 my-2 border w-full shadow-lg'>
                     <div className='flex px-10 justify-between'>
                     <div className='cvHeading'>
                        <h1 className='text-2xl font-semibold'>{token?.userInfo?.appNameEng}</h1>
                        <p className='text-sm text-zinc-500 my-1'>{token?.userInfo?.appEmail}</p>
                        <p className='text-sm text-zinc-500 my-1'>{token?.userInfo?.appPhone}</p>
                        <p className='text-sm text-zinc-500 my-1'>{token?.userInfo?.appDistric}</p>
                        </div>
                    <div className='cvImg'>
                        <img src={token?.userInfo?.appImg}  alt='career'/>
                    </div>
                     </div>
                    <div className='my-5'>
                        <hr></hr>
                    </div>
                    <div>
                        <table className='text-zinc-500'>
                            <tr>
                                <th >Father Name</th>
                                <td>{token?.userInfo?.appFaNameEng}</td>
                            </tr>
                            <tr>
                                <th>Mother Name</th>
                                <td>{token?.userInfo?.appMoNameEng}</td>
                            </tr>
                            <tr>
                                <th>Marital Status</th>
                                <td>{token?.userInfo?.appMarital}</td>
                            </tr>
                            <tr>
                                <th>Spouse Name</th>
                                <td>{token?.userInfo?.appSpNameEng}</td>
                            </tr>
                            <tr>
                                <th>Date of Birth</th>
                                <td>{token?.userInfo?.appBirth}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{token?.userInfo?.appGender}</td>
                            </tr>
                            <tr>
                                <th>Religion</th>
                                <td>{token?.userInfo?.appReligion}</td>
                            </tr>
                            <tr>
                                <th>Home District</th>
                                <td>{token?.userInfo?.appDistric}</td>
                            </tr>
                            <tr>
                                <th>National/Birth ID</th>
                                <td>{token?.userInfo?.appNID}</td>
                            </tr>
                            <tr>
                                <th>Present Addres</th>
                                <td>{token?.userInfo?.appPreAddEng}</td>
                            </tr>
                            <tr>
                                <th>Permanent Address</th>
                                <td>{token?.userInfo?.appPerAddEng}</td>
                            </tr>
                            <tr>
                                <th>Contact No.</th>
                                <td>{token?.userInfo?.appPhone}</td>
                            </tr>
                            <tr>
                                <th>Reference #1</th>
                                <td>{token?.userInfo?.appRef1}</td>
                            </tr>
                            <tr>
                                <th>Reference #2</th>
                                <td>{token?.userInfo?.appRef2}</td>
                            </tr>
                            <tr>
                                <th>Signature</th>
                                <img className='h-12 w-36' src={token?.userInfo?.appSign} alt='sign'></img>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-blue-700 font-semibold text-center my-5'>Qualification</h1>
                    {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/4'>Qualification Title</th>
                    <th className='border border-black bg-transparent w-1/2'>Institute</th>
                    <th className='border border-black bg-transparent w-1/4'>Passing Year</th>
                    <th className='border border-black bg-transparent w-1/6'>Result</th>
                </tr>
                {
                    allQualification?.length>0&&!loading?
                    allQualification.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.exam}</td>
                    <td className='border border-black bg-transparent'>{item.institute}</td>
                    <td className='border border-black bg-transparent'>{item.passingYr}</td>
                    <td className='border border-black bg-transparent'>{item.result}</td>
                </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your qualification</h1>
                }
            </table>
         </div>
         }
                </div>
                <div>
                    <h1 className='text-2xl text-blue-700 font-semibold text-center my-5'>Training</h1>
                    {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/2'>Title</th>
                    <th className='border border-black bg-transparent w-1/2'>Institute</th>
                    <th className='border border-black bg-transparent w-1/4'>Duration</th>
                </tr>
                {
                    allTraining?.length>0&&!loading?
                    allTraining.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.title}</td>
                    <td className='border border-black bg-transparent'>{item.institute}</td>
                    <td className='border border-black bg-transparent'>{item.duration}</td>
                         </tr>
                    )):<h1 className='my-5 text-error'>Please add your training</h1>
                }
            </table>
         </div>
         }
                </div>
                <div>
                    <h1 className='text-2xl text-blue-700 font-semibold text-center my-5'>Experience</h1>
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
                </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your experience</h1>
                }
            </table>
         </div>
         }
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default ApplicantResume;
