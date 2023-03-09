import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SubmitBtn from "../../Common/SubmitBtn";
import InputField from "../../Common/InputField";
import axios from "axios";

const Programmer = () => {
  const [imgUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [handle, setHandle] = useState("");
  const [handleLink, setHandleLink] = useState("");
  const [dept, setDept] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
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
    if (!imgUrl && !name && !rating && !handle && !dept && !handleLink) {
      toast.error("Fillup the form properly");
      return;
    } else {
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/programmer/add",
        {
          imgUrl,
          name,
          rating,
          handle,
          handleLink,
          fbLink,
          linkedInLink,
          dept,
        }
      );
      //console.log(data);
      toast.success(data.msg);
      setImageUrl("");
      setName("");
      setRating("");
      setHandle("");
      setHandleLink("");
      setDept("");
      setFbLink("");
      setLinkedInLink("");
    }
  };
  return (
    <div>
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">Programmer Add Here</h2>
        <form action="" onSubmit={handleSubmit}>
          <InputField
            type="text"
            setField={setName}
            fieldValue={name}
            requiredField="true"
            label="Name"
          ></InputField>
          <InputField
            type="number"
            setField={setRating}
            fieldValue={rating}
            label="Rating"
          ></InputField>
          <InputField
            type="text"
            setField={setHandle}
            fieldValue={handle}
            label="Handle"
          ></InputField>
          <InputField
            type="text"
            setField={setHandleLink}
            fieldValue={handleLink}
            label="Handle Link"
          ></InputField>
          <InputField
            type="text"
            setField={setFbLink}
            fieldValue={fbLink}
            label="Fb Link"
          ></InputField>
          <InputField
            type="text"
            setField={setLinkedInLink}
            fieldValue={linkedInLink}
            label="Linkedin Link"
          ></InputField>

          <InputField
            type="text"
            setField={setDept}
            fieldValue={dept}
            label="Dept"
          ></InputField>

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
            <SubmitBtn disabled={loading} value="Submit"></SubmitBtn>
          </div>
        </form>
        <div>{error && <h4>{error}</h4>}</div>
        <Toaster />
      </div>
    </div>
  );
};

export default Programmer;
