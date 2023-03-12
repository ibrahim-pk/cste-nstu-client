import axios from 'axios';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const JobRegister = () => {
    const [appNameEng,setAppNameEng]=useState('')
    const [appNameBang,setAppNameBang]=useState('')
    const [appFaNameEng,setAppFaNameEng]=useState('')
    const [appFaNameBang,setAppFaNameBang]=useState('')
    const [appMoNameEng,setAppMoNameEng]=useState('')
    const [appMoNameBang,setAppMoNameBang]=useState('')
    const [appMarital,setAppMarital]=useState('')
    const [appSpNameEng,setAppSpNameEng]=useState('')
    const [appSpNameBang,setAppSpNameBang]=useState('')
    const [appPreAddEng,setAppPreAddEng]=useState('')
    const [appPreAddBang,setAppPreAddBang]=useState('')
    const [appPerAddEng,setAppPerAddEng]=useState('')
    const [appPerAddBang,setAppPerAddBang]=useState('')
    const [appReligion,setAppReligion]=useState('')
    const [appDistric,setAppDistric]=useState('')
    const [appNID,setAppNID]=useState('')
    const [appBirth,setAppBirth]=useState('')
    const [appPhone,setAppPhone]=useState('')
    const [appEmail,setAppEmail]=useState('')
    const [appPassword,setAppPassword]=useState('')
    const [appImg,setAppImg]=useState('')
    const [appSign,setAppSign]=useState('')
    const [appRef1,setAppRef1]=useState('')
    const [appRef2,setAppRef2]=useState('')
    const [appGender,setAppGender]=useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleImageUpload = async (e) => {
      setLoading(true);
      const imageFile = e.target.files[0];
      const data = new FormData();
      data.append("file", imageFile);
      //your folder name
      data.append("upload_preset", "WinnerImg");
      data.append("cloud_name", "ditdynru4");
  
      try {
        const result = await axios.post(
          //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
          "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
          data
        );
        // console.log(result?.data?.url);
        setAppImg(result?.data?.url);
        setLoading(false);
      } catch (error) {
        setError(error.massage);
        setLoading(false);
      }
    };
    const handleSignUpload = async (e) => {
        setLoading(true);
        const imageFile = e.target.files[0];
        const data = new FormData();
        data.append("file", imageFile);
        //your folder name
        data.append("upload_preset", "WinnerImg");
        data.append("cloud_name", "ditdynru4");
    
        try {
          const result = await axios.post(
            //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
            "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
            data
          );
          // console.log(result?.data?.url);
          setAppSign(result?.data?.url);
          setLoading(false);
        } catch (error) {
          setError(error.massage);
          setLoading(false);
        }
      };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {data}=await axios.post('https://cste-club-ibrahimecste.vercel.app/api/job/apply/registration',{
            appNameEng,
            appNameBang,
            appFaNameEng,
            appFaNameBang,
            appMoNameEng,
            appMoNameBang,
            appMarital,
            appSpNameEng,
            appSpNameBang,
            appPreAddEng,
            appPreAddBang,
            appPerAddEng,
            appPerAddBang,
            appReligion,
            appDistric,
            appNID,
            appGender,
            appBirth,
            appPhone,
            appEmail,
            appPassword,
            appImg,
            appSign,
            appRef1,
            appRef2        
        })
        if(data.msg){
            toast.success(data?.msg)
            setTimeout(()=>{
             window.location.href='/career/online/job/apply/login'
            },2000)
            setAppNameEng('')
            setAppNameBang('')
            setAppFaNameEng('')
            setAppFaNameBang('')
            setAppMoNameEng('')
            setAppMoNameBang('')
            setAppMarital('')
            setAppSpNameEng('')
            setAppSpNameBang('')
            setAppPreAddEng('')
            setAppPreAddBang('')
            setAppPerAddEng('')
            setAppPerAddBang('')
            setAppReligion('')
            setAppDistric('')
            setAppNID('')
            setAppBirth('')
            setAppPhone('')
            setAppEmail('')
            setAppPassword('')
            setAppImg('')
            setAppSign('')
            setAppRef1('')
            setAppRef2('') 

        }else{
            toast.error(data?.error)
        }
    }
    return (
        <div className="card flex-shrink-0 max-w-screen-lg mx-auto shadow-2xl bg-base-100">
        <div className="card-body">
            <h1 className='my-5 text-blue-700 text-xl text-center'>Register Now!</h1>
          <form onSubmit={handleSubmit}>
          <div className='md:flex  gap-4'>
            <div className='sec1 md:w-1/2'>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Applicant's Name in English</span>
            </label>
            <input onChange={(e)=>setAppNameEng(e.target.value)} type="text" placeholder="Applicant's Name" className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Applicant's Name in Bangla</span>
            </label>
            <input onChange={(e)=>setAppNameBang(e.target.value)} type="text" placeholder="Applicant's Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Applicant's Gender</span>
            </label>
            <input onChange={(e)=>setAppGender(e.target.value)} type="text" placeholder="Applicant's Gender" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Father's Name in English</span>
            </label>
            <input onChange={(e)=>setAppFaNameEng(e.target.value)} type="text" placeholder="Father's Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Father's Name in Bangla</span>
            </label>
            <input onChange={(e)=>setAppFaNameBang(e.target.value)} type="text" placeholder="Father's Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mother's Name in English</span>
            </label>
            <input onChange={(e)=>setAppMoNameEng(e.target.value)} type="text" placeholder="Mother's Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mother's Name in Bangla</span>
            </label>
            <input onChange={(e)=>setAppMoNameBang(e.target.value)} type="text" placeholder="Mother's Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marital Status</span>
            </label>
            <input onChange={(e)=>setAppMarital(e.target.value)} type="text" placeholder="Marital Status" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Spouse Name in English</span>
            </label>
            <input onChange={(e)=>setAppSpNameEng(e.target.value)} type="text" placeholder="Spouse Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Spouse Name in Bangla</span>
            </label>
            <input onChange={(e)=>setAppSpNameBang(e.target.value)} type="text" placeholder="Spouse Name" className="input input-bordered" />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Address in English</span>
            </label>
            <textarea onChange={(e)=>setAppPreAddEng(e.target.value)} type="text" placeholder="Present Address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Address in Bangla</span>
            </label>
            <textarea onChange={(e)=>setAppPreAddBang(e.target.value)} type="text" placeholder="Present Address" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Permanent Address in English</span>
            </label>
            <textarea onChange={(e)=>setAppPerAddEng(e.target.value)} type="text" placeholder="Permanent Address" className="input input-bordered" required />
          </div>
  
            </div>
            <div className='sec2 md:w-1/2'>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Permanent Address in Bangla</span>
            </label>
            <textarea onChange={(e)=>setAppPerAddBang(e.target.value)} type="text" placeholder="Permanent Address" className="input input-bordered" required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Religion</span>
            </label>
            <input onChange={(e)=>setAppReligion(e.target.value)} type="text" placeholder="Religion" className="input input-bordered" required />
          </div>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Home District</span>
            </label>
            <input onChange={(e)=>setAppDistric(e.target.value)} type="text" placeholder="Home District" className="input input-bordered" required />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">National/Birth ID</span>
            </label>
            <input onChange={(e)=>setAppNID(e.target.value)} type="text" placeholder="National/Birth ID" className="input input-bordered" required />
          </div>
           
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date Of Birth</span>
            </label>
            <input onChange={(e)=>setAppBirth(e.target.value)} type="text" placeholder="Date Of Birth" className="input input-bordered" required />
          </div> 
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input onChange={(e)=>setAppPhone(e.target.value)} type="number" placeholder="Phone" className="input input-bordered" required />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input onChange={(e)=>setAppEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered" required />
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input onChange={(e)=>setAppPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered" required />
          </div>
  
  
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Applicant's Photo (300x300, 200KB Max, JPG or PNG)</span>
            </label>
            <input type="file" onChange={handleImageUpload} placeholder="Photo" className="input input-bordered" required/>
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Applicant's Signature (300x80, 100KB Max, JPG or PNG)</span>
            </label>
            <input onChange={handleSignUpload} type="file" placeholder="sign" className="input input-bordered" required/>
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reference1</span>
            </label>
            <textarea onChange={(e)=>setAppRef1(e.target.value)} type="text" placeholder="reference1" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Reference2</span>
            </label>
            <textarea onChange={(e)=>setAppRef2(e.target.value)} type="text" placeholder="reference2" className="input input-bordered" />
          </div>
          
            </div>
          
          </div>
             
          
          <div className="mt-6">
          <div>
            {loading ? (
              <h1 className="text-xl text-center font-bold text-sky-700">Uploading....</h1>
            ):<div className="form-control mt-6">
                <button className="btn">Register</button>
                </div>}
          </div> 
          </div>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    );
};

export default JobRegister;