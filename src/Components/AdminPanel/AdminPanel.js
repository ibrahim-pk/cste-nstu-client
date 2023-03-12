import React, { useState } from "react";
import logo from "../../img/logo.png";
import Programmer from "./CsteClub/Programmer";
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import AddAndViewChairmanMSG from "./ChairmanMessage/AddAndViewChairmanMSG";
import AddNews from "./News/AddNews";
import ViewNews from "./News/ViewNews";
import AddNotice from "./Notice/AddNotice";
import ViewNotice from "./Notice/ViewNotice";
import RegistrationViews from "./RegistrationViews";
import AddResearch from "./Researches/AddResearch";
import ViewResearches from "./Researches/ViewResearches";
import AddResult from "./Result/AddResult";
import ViewResult from "./Result/ViewResult";
import ViewStudent from "./ViewStudent";
import ViewTeacher from "./ViewTeacher";
import Galary from "./CsteClub/Galary";
import OtherExp from "./CsteClub/OtherExp";
import AddMember from "./CsteClub/AddMember";
import JobAdmin from "./JobAdmin";
import CurriculumAdmin from "./Academic/CurriculumAdmin";
import RagistrationFormAdmin from "./Academic/RagistrationFormAdmin";
import CsteOfficial from "./Gallary.js/CsteOfficial";
import JobCirculer from "./Career/JobCirculer";
import AllApplicant from "./Career/AllApplicant";
import { Link } from "react-router-dom";


export default function AdminPanel() {
  const [page, setPage] = useState("viewTeacher");
  const [year, serYear] = useState("");
  const [term, setTerm] = useState("");
  return (
    <div className="drawer drawer-mobile h-auto min-h-screen	">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden bg"
        >
          Menu
        </label>
        <div className="border-l flex-1 w-full overflow-y-scroll max-h-screen">
          <div className="border-b px-2 py-2 flex items-center justify-between w-full ">
            <div>
              <h2 className="text-2xl font-semibold">Admin Panel</h2>
            </div>
            <Link to='/'>
            <button className="btn btn-sm bg-blue-900 hover:hover:bg-blue-800 text-white">
              Home
            </button></Link>
          </div>
          <div className="p-5 mb-10">
            {page === "addStudent" && <AddStudent />}
            {page === "viewStudent" && <ViewStudent />}
            {page === "viewRegistraion" && (
              <RegistrationViews year={year} term={term} />
            )}
            {page === "viewTeacher" && <ViewTeacher />}
            {page === "addTeacher" && <AddTeacher />}
            {page === "addNotice" && <AddNotice />}
            {page === "viewNotice" && <ViewNotice />}
            {page === "addNews" && <AddNews />}
            {page === "viewNews" && <ViewNews />}
            {page === "addResearch" && <AddResearch />}
            {page === "viewResearches" && <ViewResearches />}
            {page === "AddAndViewChairmanMSG" && <AddAndViewChairmanMSG />}
            {page === "addResult" && <AddResult />}
            {page === "ViewResult" && <ViewResult />}
            {page === "programmer" && <Programmer />}
            {page === "galary" && <Galary />}
            {page === "otherExp" && <OtherExp />}
            {page === "member" && <AddMember />}
            {page === "job" && <JobAdmin />}
            {page === "curriculum" && <CurriculumAdmin />}
            {page === "registration" && <RagistrationFormAdmin />}
            {page === "csteOfficial" && <CsteOfficial />}
            {page === "jobCirculer" && <JobCirculer />}
            {page === "allApplicant" && <AllApplicant />}
            
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-gray-100 p-4 w-80 text-base-content">
          <div className="flex items-center flex-col">
            <img src={logo} alt="NSTU LOGO" className="w-16" />
            <h2 className="font-semibold text-2xl py-2">CSTE, NSTU</h2>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Student</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addStudent")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewStudent")}>View</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Teacher Panel</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addTeacher")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewTeacher")}>View</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Academy</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("curriculum")}>
                  Add Curriculum
                </button>
              </li>
              <li>
                <button onClick={() => setPage("registration")}>
                  Registration
                </button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Notice</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addNotice")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewNotice")}>View</button>
              </li>
            </ul>
          </div>
          
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Career</div>
            <ul className="collapse-content menu">
              <li>
                <button
                  onClick={() => {
                    setPage("jobCirculer");
                  }}
                >
                  Job Circuler
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setPage("allApplicant");
                  }}
                >
                  All Applicant
                </button>
              </li>
            </ul>
          </div>


          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">News</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addNews")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewNews")}>View</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Research</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addResearch")}>Add</button>
              </li>
              <li>
                <button onClick={() => setPage("viewResearches")}>View</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Result</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("addResult")}>Add Result</button>
                <button onClick={() => setPage("ViewResult")}>
                  View Results
                </button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Club</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("programmer")}>
                  Top Programmer
                </button>
                <button onClick={() => setPage("otherExp")}>
                  Other Exprience
                </button>
                <button onClick={() => setPage("member")}>Member</button>
                <button onClick={() => setPage("galary")}>Galary</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">More</div>
            <ul className="collapse-content menu">
              <li>
                <button onClick={() => setPage("AddAndViewChairmanMSG")}>
                  Chairman Message
                </button>
              </li>
              <li>
                <button onClick={() => setPage("job")}>Job Post</button>
              </li>
            </ul>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title font-medium">Online Payment</div>
            <ul className="collapse-content menu">
              <li>
                <button
                  onClick={() => {
                    setPage("viewRegistraion");
                  }}
                >
                  Registration
                </button>
              </li>
            </ul>
          </div>
           
        </ul>
      </div>
    </div>
  );
}
