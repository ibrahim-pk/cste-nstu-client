import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ViewTeacher() {
  const [allTeacher, setAllTeacher] = useState("");
  const [rank, setRank] = useState();
  const deleteTeacher = (id) => {
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/teacher/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast(data.error);
          return;
        } else {
          toast(data.msg);
        }
      });
  };
  useEffect(() => {
    fetch("https://cste-club-ibrahimecste.vercel.app/api/teacher/add")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        } else {
          setAllTeacher(data);
        }
      });
    // handle14Batch();
  }, [deleteTeacher]);
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">
        Teachers ({allTeacher.length})
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Rank</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allTeacher.length === 0 ? (
              <h3>No Data</h3>
            ) : allTeacher.length > 0 ? (
              allTeacher.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={
                              item?.picture
                                ? item?.picture
                                : "https://www.w3schools.com/howto/img_avatar.png"
                            }
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          {item.position}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>

                  <td>
                    <input
                      className="w-20"
                      type="number"
                      placeholder="Rank"
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => deleteTeacher(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      delete
                    </button>
                    <Toaster />
                  </td>
                </tr>
              ))
            ) : (
              <h3>Loading.....</h3>
            )}
          </tbody>
        </table>
      </div>
      <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
        <button className="btn btn-outline btn-xs">Previous page</button>
        <button className="btn btn-outline btn-xs">Next</button>
      </div>
    </div>
  );
}
