import axios, { all } from "axios";
import React, { useEffect, useState } from "react";

const ClubPanel = () => {
  const [allMembers, setAllMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://cste-club-ibrahimecste.vercel.app/api/add/club/members"
      );
      setAllMembers(data?.members);
    };
    fetchData();
  }, []);
  return (
    <div className="my-10">
      <h4 className="text-3xl font-bold text-center my-8">CSTE CLUB PANEL</h4>
      <div>
        {allMembers.length > 0 ? (
          allMembers.map((item, idx) => (
            <div key={idx} className="card my-3 w-full  shadow-sm bg-base-100 ">
              <div className="md:flex text-center p-2 justify-between items-center">
                <div className="memberImg">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="name">
                  <h1 className="text-xl font-semibold"> {item.name}</h1>
                </div>
                <div className="role">
                  <h1 className="text-xl font-semibold">{item.role}</h1>
                </div>
                <div className="mobile">
                  <h1 className="text-xl font-semibold"> {item.number}</h1>
                </div>
                <div className="follow">
                  <a
                    href={item.fbLink}
                    className="btn btn-outline btn-sm hover:bg-blue-900"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default ClubPanel;
