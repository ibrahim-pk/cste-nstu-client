import React, { useEffect, useState } from 'react';
import InputField from '../../Common/InputField';
import SubmitBtn from '../../Common/SubmitBtn';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';

const CsteOfficial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [allVideoLink, setAllVideoLink] = useState([]);
  const [reLoader, setReLoader] = useState(false);
  const token = JSON.parse(localStorage.getItem("UserDetails"));
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!token){
        toast.error("Invalid token");
        return;
    }
    else if(!title && !description && !ytLink) {
        toast.error("Fillup the form properly");
        return;
      } else {
        const { data } = await axios.post(
          "https://cste-club-ibrahimecste.vercel.app/api/add/official/event",
          {
            title,
            description,
            ytLink
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
        setTitle("")
        setDescription("")
        setYtLink("")
      }
  }
  const handleDelete=async(id)=>{
   const {data}=await axios.delete(`https://cste-club-ibrahimecste.vercel.app/api/add/official/event/${id}`,
   {
    headers: {
      authorization: `Bearer ${token?.token}`,
    },
  }
   )
     toast.success(data?.msg)
     setReLoader(!reLoader)
  }
  useEffect(()=>{
    const fetchData=async()=>{
        const {data} =await axios.get('https://cste-club-ibrahimecste.vercel.app/api/add/official/event')
        setAllVideoLink(data?.allEvent)
    }
        fetchData();
  },[reLoader])
    return (
       <div>
         <div className='max-w-screen-lg mx-auto card p-5'>
            <form  onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setTitle}
          fieldValue={title}
          requiredField="true"
          label="Title"
        ></InputField>
        <InputField
          type="text"
          setField={setDescription}
          fieldValue={description}
          requiredField="true"
          label="Description"
        ></InputField>
        <InputField
          type="text"
          setField={setYtLink}
          fieldValue={ytLink}
          requiredField="true"
          label="Video embed link"
        ></InputField>
        
        <div className="w-full text-right">
          <SubmitBtn value="Add Video"></SubmitBtn>
        </div>
      </form>
      <Toaster />
        </div>
        
        <h1 className='text-xl my-5 font-bold text-blue-700 text-center'>All Video</h1>
         {
            allVideoLink.length>0&&
            allVideoLink.map((item,idx)=>(
                <div className='card my-4 shadow-lg p-4' key={idx}>
                    <div className='md: flex justify-between px-5'>
                    <h1 className='text-blue-700'>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <button onClick={()=>handleDelete(item._id)} className='btn btn-sm'>Delete</button> 
                    </div>
                </div>
            ))
         }

       </div>
    );
};

export default CsteOfficial;