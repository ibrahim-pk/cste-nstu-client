import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import SubmitBtn from '../Common/SubmitBtn';
import InputField from '../Common/InputField';
const AddTeacherInformation = () => {
    const token = JSON.parse(localStorage.getItem("UserDetails"));
    const [name, setName] = useState(token?.teacher?.name);
    const [email, setEmail] = useState(token?.teacher?.email);
    const [password, setPassword] = useState(token?.teacher?.password);
    const [mobile, setMobile] = useState(token?.teacher?.mobile);
    const [designation, setDesignation] = useState(token?.teacher?.designation);
    const [joinDate, setJoinDate] = useState(token?.teacher?.joinDate);
    const [about, setAbout] = useState(token?.teacher?.about);
    const [reLoader, setReLoader] = useState(false);
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(!token){
          toast.error("Invalid token");
          return;
      }
      else if(!name && !email && !mobile && !designation && !joinDate&& !about) {
          toast.error("Fillup the form properly");
          return;
        } else {
          const { data } = await axios.patch(
            `https://cste-club-ibrahimecste.vercel.app/api/teacher/profile/information/${token?.teacher._id}`,
            {
              name,
              email,
              password,
              mobile,
              designation,
              joinDate,
              about
            },
            {
              headers: {
                authorization: `Bearer ${token?.token}`,
              },
            }
          );
          //console.log(data);
          toast.success(data.msg);
          setReLoader(!reLoader)
          setName("")
          setEmail("")
          setPassword("")
          setMobile("")
          setDesignation("")
          setJoinDate("")
          setAbout("")
        }
    }
    return (
        <div>
        <div className='max-w-screen-lg mx-auto card p-5'>
            <h1 className='text-2xl font-bold text-center text-blue-700 my-4'>Personal Information</h1>
           <form  onSubmit={handleSubmit}>
       <InputField
         type="text"
         setField={setName}
         fieldValue={name}
         requiredField="true"
         label="Name"
       ></InputField>
       <InputField
         type="text"
         setField={setEmail}
         fieldValue={email}
         requiredField="true"
         label="Email"
       ></InputField>
       <InputField
         type="text"
         setField={setPassword}
         fieldValue={password}
         requiredField="true"
         label="Password"
       ></InputField>
       <InputField
         type="text"
         setField={setMobile}
         fieldValue={mobile}
         requiredField="true"
         label="Mobile"
       ></InputField>
       <InputField
         type="text"
         setField={setDesignation}
         fieldValue={designation}
         requiredField="true"
         label="Designation"
       ></InputField>
       <InputField
         type="text"
         setField={setJoinDate}
         fieldValue={joinDate}
         requiredField="true"
         label="Join Date"
       ></InputField>
       <InputField
         type="text"
         setField={setAbout}
         fieldValue={about}
         requiredField="true"
         label="About"
       ></InputField>
       
       <div className="w-full text-right">
         <SubmitBtn value="Add Information"></SubmitBtn>
       </div>
     </form>
     <Toaster />
       </div>

      </div>
    );
};

export default AddTeacherInformation;