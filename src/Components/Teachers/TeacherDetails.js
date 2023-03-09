import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function TeacherDetails() {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://cste-club-ibrahimecste.vercel.app/api/teacher/add/${id}`
      );
      setTeacher(data);
    };
    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-16 mb-4">
      <div>
        <div className="my-2 flex-col md:flex-row flex gap-4 justify-center items-center mb-8 border-b pb-8">
          <div>
            <img
              src={teacher?.picture}
              alt="teacher"
              className="max-w-sm border p-2 shadow-md"
            />
          </div>
          <div>
            <h2 className="card-title text-2xl">{teacher?.name}</h2>
            <h3 className="">{teacher?.position}</h3>
            <p>{teacher?.joinDate} to Present</p>

            <h4 className="font-semibold mt-4">Contact info</h4>
            <a classname="block" href={`mailto:${teacher?.email}`}>
              {teacher?.email}
            </a>
            <p>{teacher?.mobile}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-4">Biography</h4>
          <p>{teacher?.about}</p>
        </div>
      </div>
    </div>
  );
}
