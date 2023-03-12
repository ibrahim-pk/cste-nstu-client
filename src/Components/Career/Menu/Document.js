import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Document = () => {
    let token=JSON.parse(localStorage.getItem('JobUser'))
   // console.log(token?.token)
    const [title,setTitle]=useState('')
    const [documentImg,setDocumentImg]=useState('')
    const [documentType,setDocumentType]=useState('')
    const [displayOrder,setDisplayOrder]=useState(1)
   
    const [allDocument,setAllDocument]=useState([])
    const [loading,setLoading]=useState(false)
    const [imgLoading,setImgLoading]=useState(false)

    const [reLoader,setReLoader]=useState(false)
   
    const handleImageUpload = async (e) => {
        setImgLoading(true);
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
          setDocumentImg(result?.data?.url);
          setImgLoading(false);
        } catch (error) {
          toast.error(error.massage);
          setLoading(false);
        }
      };


    const handleDocument=async(e)=>{
        e.preventDefault()
        if(title&&documentImg&&documentType){
            const {data}=await axios.patch('https://cste-club-ibrahimecste.vercel.app/api/job/apply/document',{
                id:token?.userInfo?._id,
                document:{
                    title,
                    documentImg,
                    documentType,
                    displayOrder,
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
                setDocumentType('')
                setDocumentImg('')
                setDisplayOrder(1)
            }else{
                toast.error(data?.error)
            }  
        }else{
            toast.error('Something Wrong!')
        }
        
       
    }
    const deleteDocument=async(index)=>{
          const {data}=await axios.
          post('https://cste-club-ibrahimecste.vercel.app/api/job/apply/document',{
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
            const {data}=await axios.get(`https://cste-club-ibrahimecste.vercel.app/api/job/applicant/${token?.userInfo?._id}`)
            setAllDocument (data?.info?.document)
                setLoading(false)
        }
        fetchData()
    },[reLoader])
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-3xl mt-5 my-2'>Applicant's Documents</h1>
        <label htmlFor="experience-modal" className="btn btn-sm">Add Document</label>
         {
            loading?<h1 className='text-center text-error text-2xl'>Loading.....</h1>:
            <div className='my-5'>
            <table>
                <tr>
                    <th className='border border-black bg-transparent w-1/2'>title</th>
                    <th className='border border-black bg-transparent w-2/6'>Type</th>
                    <th className='border border-black bg-transparent w-1/2'>Action</th>
                </tr>
                {
                    allDocument?.length>0&&!loading?
                    allDocument.map((item,idx)=>(
                        <tr key={idx}>
                    <td className='border border-black bg-transparent'>{item.title}</td>
                    <td className='border border-black bg-transparent'>{item.documentType}</td>
                    <td className='border border-black bg-transparent'>
                    <a className='mx-2 text-blue-700' href={item.documentImg}>View</a>
                        <button onClick={()=>deleteDocument(idx)} className='btn btn-sm btn-error mx-1'>Delete</button>
                        
                    </td>
                </tr>
                    )):<h1 className='text-center  my-5 text-error'>Please add your document</h1>
                }
            </table>
         </div>
         }

        <input type="checkbox" id="experience-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="experience-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className='max-w-screen-lg mx-auto'>
            <h1 className='text-blue-700 text-2xl text-center font-bold mt-5 mb-2'>Add Document</h1>
            <hr></hr>
            <div className="my-5 text-center">
              <form onSubmit={handleDocument}>
              <input type='text' onChange={(e)=>setTitle(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Title of the document' required/>
            <br></br>     
              <select className='w-full border my-2 px-1 py-2 rounded-md' onChange={(e)=>setDocumentType(e.target.value)} vadata-te-select-init>
            <option >Document Type</option>
            <option value="Educational Certificate">Educational Certificate</option>
            <option value="MarkSheet">MarkSheet</option>
            <option value="NID">NID</option>
            <option value="Award">Award</option>
            <option value="Testimonial">Testimonial</option>
            <option value="Citizenship Certificate">Citizenship Certificate</option>
            <option value="Birth Certificate">Birth Certificate</option>
            <option value="Training Certificate">Training Certificate</option>
            <option value="NOC">NOC</option>
            <option value="Experience Certificate">Experience Certificate</option>
            <option value="Other">Other</option>
            </select>
            <br></br>     
            <input type="file" onChange={handleImageUpload} placeholder="Photo" className="w-full border my-2 px-1 py-2 rounded-md" required/>
            {
                imgLoading&&<h1 className='text-error'>Uploading...</h1>
            }
            <br></br>     
            <input type='number' onChange={(e)=>setDisplayOrder(e.target.value)} className='w-full px-1 border my-2 py-2 rounded-md' placeholder='Display Order' required/>
          
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

export default Document;