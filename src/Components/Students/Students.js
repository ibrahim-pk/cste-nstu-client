import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import style from "./Students.module.css";
export default function Students() {
  const [session, setSession] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/student/add?batch=${session}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          setLoadingData(false);
          return;
        } else {
          setAllStudent(data);
          setLoadingData(false);
          //console.log(data);
        }
      });
    // handle14Batch();
  }, [session]);
  return (
    <div>
      {loadingData ? (
        <div className="mx-auto max-w-screen-xl	  px-4 mt-16 mb-4 text-center">
          <div role="status">
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-10 mb-4">
          <h2 className="text-3xl mb-15 text-center">Students</h2>
          <div className="overflow-x-auto w-full">
            <div className="w-full overflow-hidden my-2 pb-2 flex justify-between">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Session</span>
                </label>
                <select
                  className={`select select-bordered ${style.selectStudent}`}
                  onChange={(e) => setSession(e.target.value)}
                >
                  <option value="all">All Session</option>
                  <option value="14">2018-19</option>
                  <option value="15">2019-20</option>
                  <option value="16">2020-21</option>
                </select>
              </div>
            </div>
            <table className="table w-full  table-zebra">
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>Session</th>
                  <th>Blood</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {allStudent.length > 0 ? (
                  allStudent.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.picture}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <h1 className="font-bold">{item.name}</h1>
                            </div>
                            <div className="text-sm opacity-50">
                              <h1>{item.studentId}</h1>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.session}</td>
                      <td>{item.blood}</td>
                      <td>
                        <h1>{item.contactNo}</h1>
                      </td>
                      <td>
                        <a href={`mailto:${item.email}`} className="underline">
                          {item.email}
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="mx-auto max-w-screen-xl	  px-4 mt-16 mb-4 text-center">
                    <h1 className="text-2xl font-semibold">No Data</h1>
                  </div>
                )}
              </tbody>
            </table>
          </div>
          <Toaster />
        </div>
      )}
    </div>
  );
}
