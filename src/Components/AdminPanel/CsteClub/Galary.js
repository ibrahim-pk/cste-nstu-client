import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SubmitBtn from "../../Common/SubmitBtn";

const Galary = () => {
  const [imgUrl, setImageUrl] = useState("");
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
      setImageUrl(result?.data?.url);
      setLoading(false);
    } catch (error) {
      setError(error.massage);
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgUrl) {
      toast.error("Fillup the form properly");
      return;
    } else {
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/img/add",
        {
          imgUrl,
          date: new Date(),
        }
      );
      //console.log(data);
      toast.success(data.msg);
      setImageUrl("");
    }
  };
  return (
    <div>
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">Photo Add Here</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="my-2">
            <input
              type="file"
              onChange={handleImageUpload}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <div>
              {loading && (
                <h1 className="text-xl font-bold text-sky-700">
                  Uploading....
                </h1>
              )}
            </div>
          </div>
          <div className="w-full text-right">
            {!loading && <SubmitBtn value="Submit"></SubmitBtn>}
          </div>
        </form>
        <div>{error && <h4>{error}</h4>}</div>
        <Toaster />
      </div>
    </div>
  );
};

export default Galary;
