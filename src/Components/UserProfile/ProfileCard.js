import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProfileCard = ({ loginStudent }) => {
  const [imgUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [reLoading, setReLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [allNotice, setAllNotice] = useState([]);
  const [unReadNotice, setUnReadNotice] = useState(0);
  const user = JSON.parse(localStorage.getItem("UserDetails"));
  // console.log(user.student.batch);
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
      alert(error);
    }
  };
  const addImg = () => {
    if (imgUrl) {
      fetch(
        `https://cste-club-ibrahimecste.vercel.app/api/student/profile/${loginStudent?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            picture: imgUrl,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setMsg(data.error);
            return;
          } else {
            setMsg(data.msg);
            toast.success(data.msg);
            let student = JSON.parse(localStorage.getItem("UserDetails"));
            student.student["picture"] = imgUrl;
            localStorage.setItem("UserDetails", JSON.stringify(student));
          }
        });
    } else {
      alert("Choose a image");
    }
  };

  const visitPost = (id) => {
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/visit/student/notice`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          id,
          stuId: user?.student.studentId,
        }),
      }
    );
    setReLoading(!reLoading);
  };
  let myNotice;
  useEffect(() => {
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/add/student/notice/${user?.student.batch}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user?.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        } else {
          setAllNotice(data?.batchNotice);
          data?.batchNotice.map(
            (item) => (
              (myNotice = item.visit.includes(user?.student.studentId)),
              //console.log(myNotice),
              !myNotice && setUnReadNotice(unReadNotice + 1)
            )
          );
        }
      });
  }, []);
  //console.log(unReadNotice);
  return (
    <div className="container mt-4 mb-10">
      <div className="p-5 card lg:card-side bg-base-100 shadow-xl">
        <figure>
          {/* <i className="fas my-2 fa-user-circle"></i> */}
          <div className="ProfileAvatar">
            {loginStudent.picture ? (
              <img src={loginStudent.picture} alt="profile" />
            ) : (
              <i className="fas my-2 fa-user-circle"></i>
            )}
            {loginStudent.picture ? (
              <label htmlFor="my-modal-3">Edit Picture</label>
            ) : (
              <label htmlFor="my-modal-3">Add Picture</label>
            )}
            <div className="modalDialog">
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box ">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <div className="imgForm my-2">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                    <br />
                    <div>
                      {!loading ? (
                        <button
                          onClick={addImg}
                          className="btn my-5 btn-sm btn-info"
                        >
                          Add
                        </button>
                      ) : (
                        <h1>Uploading...</h1>
                      )}
                      <h1>{msg}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{loginStudent?.name}</h2>
          <h5>{loginStudent?.email}</h5>
          <h5>{loginStudent?.contactNo}</h5>
          <button className="btn">
            <ul className="menu menu-horizontal">
              <li tabIndex={0}>
                <a>Notification</a>
                <ul className="bg-green-700 noticeList">
                  {allNotice?.length > 0 ? (
                    allNotice.map((item, idx) => (
                      <li>
                        <Link to={`/notice/student/${item._id}`}>
                          <div
                            key={idx}
                            onClick={() => visitPost(item._id)}
                            className="card w-full shadow-lg my-2"
                          >
                            <h1 className="text-lg">{item.title}</h1>
                            <h1 className="text-sm">Post:{item.date}</h1>
                            <p className="text-xs">
                              Seen:{item?.visit?.length}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <a>No Notice</a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
            <div className="badge badge-secondary">+{unReadNotice}</div>
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProfileCard;
