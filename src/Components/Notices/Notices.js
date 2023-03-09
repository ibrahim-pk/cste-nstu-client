import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";

export default function Notices() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allNotice, setAllNotice] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://cste-club-ibrahimecste.vercel.app/api/add/all/notice"
      );
      //console.log(data);
      setAllNotice(data?.allNotice.reverse());
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-12 text-center">Notices</h2>
      <div className="w-full overflow-hidden p-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="w-full float-right"
        ></InputField>
      </div>
      <div>
        {loading ? (
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
          <div>
            <div className="w-full flex flex-col gap-4 mt-4">
              {allNotice.length > 0 ? (
                allNotice.map((item, idx) => (
                  <div key={idx} className="card  bg-base-100 shadow-xl border">
                    <div className="card-body p-4 flex flex-row justify-between items-center">
                      <div>
                        <h4 className="text-blue-900 font-semibold flex items-center">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="mr-2"
                          ></FontAwesomeIcon>
                          {item.date}
                        </h4>
                        <p>{item.title}</p>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn bg-blue-900 btn-sm text-white hover:bg-blue-800">
                          <a href={item.imgUrl}>View</a>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="mx-auto max-w-screen-xl	  px-4 mt-16 mb-4 text-center">
                  <h1 className="text-2xl font-semibold">No Notice</h1>
                </div>
              )}
            </div>
            <div className="overflow-hidden">
              <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
                <button className="btn btn-outline btn-xs">
                  Previous page
                </button>
                <button className="btn btn-outline btn-xs">Next</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
