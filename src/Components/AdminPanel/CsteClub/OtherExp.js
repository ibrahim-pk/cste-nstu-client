import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

const OtherExp = () => {
  const [imgUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [exprience, setExprience] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileLink, setProfileLink] = useState("");
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
    if (
      !imgUrl &&
      !name &&
      !exprience &&
      !profileName &&
      !profileLink &&
      !dept &&
      !fbLink
    ) {
      toast.error("Fillup the form properly");
      return;
    } else {
      const { data } = await axios.post(
        "https://cste-club-ibrahimecste.vercel.app/api/other/exp/add",
        {
          imgUrl,
          name,
          exprience,
          profileName,
          profileLink,
          fbLink,
          linkedInLink,
          dept,
        }
      );
      //console.log(data);
      toast.success(data.msg);
      setImageUrl("");
      setName("");
      setExprience("");
      setProfileName("");
      setProfileLink("");
      setDept("");
      setFbLink("");
      setLinkedInLink("");
    }
  };
  return (
    <div>
      <div className="w-full">
        <h2 className="text-2xl mb-2 border-b pb-2">
          Other exprience Add Here
        </h2>
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
            setField={setExprience}
            fieldValue={exprience}
            label="Exprience"
          ></InputField>
          <InputField
            type="text"
            setField={setProfileName}
            fieldValue={profileName}
            label="Profile Name"
          ></InputField>
          <InputField
            type="text"
            setField={setProfileLink}
            fieldValue={profileLink}
            label="Profile Link"
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

export default OtherExp;
