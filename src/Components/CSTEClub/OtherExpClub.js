import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
const OtherExpClub = () => {
  const [programmers, setProgrammer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://cste-club-ibrahimecste.vercel.app/api/other/exp/add"
      );
      setProgrammer(data?.expList.reverse());
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h4 className="text-3xl font-bold text-center my-8">Other Skill</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programmers.length > 0 &&
            programmers.map((item, idx) => (
              <div key={idx} className="shadow-xl border">
                <div className="flex p-5 justify-evenly progCard items-center">
                  <figure className="">
                    <div className="avatar">
                      <div className=" cpImg rounded-full">
                        <img src={item?.imgUrl} />
                      </div>
                    </div>
                  </figure>
                  <div className="items-center">
                    <h2 className=" text-xl font-bold">{item?.name}</h2>
                    <p className="font-semibold my-1">{item?.exprience}</p>
                    <p className="font-semibold my-1">
                      Profile:
                      <a
                        className=" text-blue-900 font-bold"
                        href={item?.profileLink}
                      >
                        {item?.profileName}
                      </a>
                    </p>
                    <p className="font-semibold my-1">Dept:{item?.dept}</p>
                    <div className="mt-2">
                      <a href={item?.fbLink}>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-blue-900 text-2xl mr-3"
                        />
                      </a>
                      <a href={item?.linkedInLink}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="text-sky-600 text-2xl mr-3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OtherExpClub;
