import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
export default function CounterStat() {
  return (
    <div>
      <div className="stats shadow stats-horizontal mx-auto">
        <div className="stat zIndexInc bg-white p-3 md:px-10 md:py-5">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faUserTie}
              className=" md:text-4xl"
            ></FontAwesomeIcon>
          </div>
          <div className="stat-title font-bold text-black">Teachers</div>
          <div className="stat-value">
            <CountUp start={0} end={18} duration={2} />
          </div>
        </div>

        <div className="stat zIndexInc bg-white  p-3 md:px-10  md:py-5">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faUsers}
              className="md:text-4xl"
            ></FontAwesomeIcon>
          </div>
          <div className="stat-title font-bold text-black">Students</div>
          <div className="stat-value">
            <CountUp start={100} end={200} duration={2} />
          </div>
        </div>

        <div className="stat zIndexInc bg-white  p-3 md:px-10  md:py-5">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon
              icon={faUserGear}
              className="md:text-4xl"
            ></FontAwesomeIcon>
          </div>
          <div className="stat-title font-bold text-black">Staffs</div>
          <div className="stat-value">
            <CountUp start={1} end={10} duration={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
