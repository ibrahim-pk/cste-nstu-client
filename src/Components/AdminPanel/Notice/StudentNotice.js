import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const StudentNotice = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [batch, setBatch] = useState("");
  const [visit, setVisit] = useState([]);
  const token = JSON.parse(localStorage.getItem("UserDetails"));
  const handleNews = (e) => {
    e.preventDefault();
    fetch("https://cste-club-ibrahimecste.vercel.app/api/add/student/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token?.token}`,
      },
      body: JSON.stringify({
        title,
        notice: details,
        batch,
        visit,
        date: new Date().toISOString().split("T")[0],
        time: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        } else {
          toast.success(data.msg);
          setBatch("");
          setTitle("");
          setDetails("");
        }
      });
  };
  return (
    <div className="flex justify-center my-10 px-10">
      <div>
        <div className="card shadow-xl w-96 p-5">
          <h1 className="text-center font-semibold text-xl py-5">
            Private Post
          </h1>
          <form onSubmit={handleNews}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control input input-bordered input-info input-xs w-full max-w-xs p-5 my-2"
              placeholder="Notice Title"
              required
            />
            <textarea
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="input form-control input-bordered input-info input-xs w-full max-w-xs p-5  my-2"
              placeholder="Notice Write.."
              required
            />
            <select
              onChange={(e) => setBatch(e.target.value)}
              className="select form-control w-96 select-info max-w-xs my-2"
            >
              <option disabled selected>
                Which Batch?
              </option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
            <button className="form-control btn btn-sm">Submit</button>
          </form>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default StudentNotice;
