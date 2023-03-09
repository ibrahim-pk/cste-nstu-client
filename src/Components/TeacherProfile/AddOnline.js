import axios from 'axios';
import React, { useState } from 'react';
import { toast,Toaster } from 'react-hot-toast';

const AddOnline = () => {
    const info=JSON.parse(localStorage.getItem('UserDetails'))
    const [playList,setPlayList]=useState('')
    const [about,setAbout]=useState('')
    const [playlistLink,setPlayListLink]=useState('')
    const [loading,setLoading]=useState(false)
    const handleAddPlaylist=async()=>{
         if(!playList){
            toast.error('Playlist name is empty')
         }else{
            setLoading(true)
            const {data}=await axios.post('http://localhost:5000/api/online/playlist',{
                playList,
                about,
                playlistLink,
                name:info?.teacher?.name,
                id:info?.teacher?._id
            },{
                headers:{
                    authorization: `Bearer ${info?.token}`
                }
            })

            if(data){
                toast.success(data?.msg)
                setPlayList('')
                setAbout('')
                setPlayListLink('')
                setLoading(false)
            }else{
                toast.error(data?.error)
                setLoading(false)
            }
         }
           
    }
    return (
        <div className='max-w-screen-lg mx-auto my-10'>
            <div className='flex justify-center gap-4'>
             {/* The button to open modal */}
                <label htmlFor="playListModal" className="btn btn-sm">Add Playlist</label>
                <button className='btn btn-error btn-sm'>Delete Playlist</button>
            </div>


    {/* Put this part before </body> tag */}
    <input type="checkbox" id="playListModal" className="modal-toggle" />
    <div className="modal">
    <div className="modal-box relative">
        <label htmlFor="playListModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Add your playlist</h3>
        <div>
            <input onChange={(e)=>setPlayList(e.target.value)} type='text' className='my-2 input input-bordered input-primary w-full max-w-xs' placeholder='Play list name' /> 
            <br></br>
            <input onChange={(e)=>setPlayListLink(e.target.value)} type='text' className='my-2 input input-bordered input-primary w-full max-w-xs' placeholder='Playlist Link' /> 
            <br></br>
            <input onChange={(e)=>setAbout(e.target.value)} type='text' className='my-2 input input-bordered input-primary w-full max-w-xs' placeholder='About the playlist' /> 
            <br></br>
            {
               !loading&&<button onClick={handleAddPlaylist} className='btn btn-sm base-blue-700 '>Add</button>
            }
        </div>
    </div> 
    </div>
    <Toaster ></Toaster>
        </div>
    );
};

export default AddOnline;