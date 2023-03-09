import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CourseMaterials() {
  const [courseMaterial, setCourseMaterial] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://cste-club-ibrahimecste.vercel.app/api/add/material"
      );
      setCourseMaterial(data.material);
      const user = JSON.parse(localStorage.getItem("UserDetails"));
      setUserInfo(user?.student);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <h2 className="text-3xl mb-4 text-center">Course Materials</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto place-content-center">
        <div>
          {courseMaterial.length > 0 ? (
            courseMaterial.map((item, idx) => (
              <div key={idx} className="card shadow-lg p-4 text-center">
                <h1 className="text-2xl font-semibold my-1">
                  Batch:{item.batch}
                </h1>
                <h1 className="text-xl font-semibold my-1">
                  Drive Link:{item.term}
                </h1>
                <h1 className="text-xl font-semibold my-1">
                  Access Batch:{item.accesTerm}
                </h1>
                <div className="my-3">
                  {item.accesTerm === userInfo.batch ? (
                    <a href={item.driveLink}>
                      <button className="btn btn-sm">Click Here</button>
                    </a>
                  ) : (
                    <button disabled className="btn btn-sm">
                      Need permission
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No Material</p>
          )}
        </div>
      </div>
    </div>
  );
}
