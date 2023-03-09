import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ViewStudent() {
  const [allStudent, setAllStudent] = useState([]);
  const [filterStudent, setFilterStudent] = useState([]);
  const [studentAll, setStudentAll] = useState(true);
  const [Student14, set14Student] = useState(false);
  const [Student15, set15Student] = useState(false);
  const [Student16, set16Student] = useState(false);
  const [batch, setBatch] = useState("all");
  const [loadingData, setLoadingData] = useState(false);
  const [reLoader, setReLoader] = useState(false);

  const deleteStudent = (id) => {
    setReLoader(!reLoader);
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/student/delete/${id}`,
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
          toast.error(data.error);
          return;
        } else {
          toast.success(data.msg);
        }
      });
  };
  useEffect(() => {
    setLoadingData(true);
    fetch(
      `https://cste-club-ibrahimecste.vercel.app/api/student/add?batch=${batch}`
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
        }
      });
    // handle14Batch();
  }, [batch, reLoader]);

  const handle14Batch = () => {
    set14Student(true);
    set15Student(false);
    set16Student(false);
    setStudentAll(false);
    setBatch("14");
  };
  const handle15Batch = () => {
    set14Student(false);
    set15Student(true);
    set16Student(false);
    setStudentAll(false);
    setBatch("15");
  };
  const handle16Batch = () => {
    set14Student(false);
    set15Student(false);
    set16Student(true);
    setStudentAll(false);
    setBatch("16");
  };
  const allStu = () => {
    setBatch("all");
    set14Student(false);
    set15Student(false);
    set16Student(false);
    setStudentAll(true);
  };
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
        <div className="w-full">
          <div className="studentCnt lg:flex md:flex  justify-between">
            <div>
              <h2 className="text-2xl mb-2 border-b pb-2">
                Students({allStudent.length})
              </h2>
            </div>
            <div className="flex my-5">
              <div className="btn14  mx-2">
                <button
                  onClick={allStu}
                  className={studentAll ? "btn btn-secondary" : "btn"}
                >
                  ALL
                </button>
              </div>
              <div className="btn14  mx-2">
                <button
                  onClick={handle14Batch}
                  className={Student14 ? "btn btn-secondary" : "btn"}
                >
                  14
                </button>
              </div>
              <div className="btn14 mx-2">
                <button
                  onClick={handle15Batch}
                  className={Student15 ? "btn  btn-secondary" : "btn"}
                >
                  15
                </button>
              </div>
              <div className="btn14 mx-2">
                <button
                  onClick={handle16Batch}
                  className={Student16 ? "btn  btn-secondary" : "btn"}
                >
                  16
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-compact table-zebra w-full">
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>Id</th>
                  <th>Email</th>
                  <th className="w-16">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filterStudent.length > 0 ? (
                  filterStudent.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item?.picture?item.picture
                                  :
                                  "https://www.w3schools.com/howto/img_avatar.png"}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm opacity-50">
                              {item.session}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{item.studentId}</td>
                      <td>{item.email}</td>

                      <td>
                        <button
                          onClick={() => deleteStudent(item._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
                        <Toaster />
                      </td>
                    </tr>
                  ))
                ) : allStudent.length > 0 ? (
                  allStudent.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item?.picture?item.picture
                                  :
                                  "https://www.w3schools.com/howto/img_avatar.png"}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-sm opacity-50">
                              {item.session}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{item.studentId}</td>
                      <td>{item.email}</td>

                      <td>
                        <button
                          onClick={() => deleteStudent(item._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Delete
                        </button>
                        <Toaster />
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
          {/* <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
          <button className="btn btn-outline btn-xs">Previous page</button>
          <button className="btn btn-outline btn-xs">Next</button>
        </div> */}
        </div>
      )}
    </div>
  );
}
