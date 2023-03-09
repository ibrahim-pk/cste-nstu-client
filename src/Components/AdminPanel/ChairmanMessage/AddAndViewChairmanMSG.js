import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AddAndViewChairmanMSG() {
  const [imgUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = JSON.parse(localStorage.getItem("UserDetails"));
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
    if (!imgUrl && !name && !details && !role) {
      toast.error("Fillup the form properly");
      return;
    } else {
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/chairman/sms",
        {
          imgUrl,
          name,
          details,
          role,
        },
        {
          headers: {
            authorization: `Bearer ${token?.token}`,
          },
        }
      );
      //console.log(data);
      toast.success(data.msg);
      setImageUrl("");
      setName("");
      setDetails("");
      setRole("");
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">Chairman Message</h2>
      <form action="" onSubmit={handleSubmit}>
        <InputField
          type="text"
          setField={setName}
          fieldValue={name}
          requiredField="true"
          label="Name"
        ></InputField>
        <InputField
          type="text"
          setField={setRole}
          fieldValue={role}
          label="Tags"
        ></InputField>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Message"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </div>

        <div className="my-2">
          <input
            type="file"
            onChange={handleImageUpload}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <div>
            {loading && (
              <h1 className="text-xl font-bold text-sky-700">Uploading....</h1>
            )}
          </div>
        </div>
        <div className="w-full text-right">
          <SubmitBtn disabled={loading} value="Add Message"></SubmitBtn>
        </div>
      </form>
      <div>{error && <h4>{error}</h4>}</div>
      <Toaster />
    </div>
  );
}
