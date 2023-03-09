import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import RegistrationFormPDF from "../UserProfile/RegistrationForm/RegistrationFormPDF";

export default function RegistrationViews({ year, term }) {
  const [search, setSearch] = useState("");
  const [regId, setRegId] = useState("");
  useEffect(() => {
    console.log(regId);
  });
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">
        Registration ({year}-{term})
      </h2>
      <div className="w-full overflow-hidden my-2 flex items-end justify-between">
        <button className="btn btn-ghost btn-xs">Delete All</button>

        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="max-w-xs float-right input-lg"
        ></InputField>
      </div>
      <div className="">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Date</th>
              <th></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BOrhan</td>
              <td>ASH2101008M</td>
              <td>11-02-22</td>
              <td>
                <label
                  htmlFor="my-modal-5"
                  onClick={() => setRegId("registration id")}
                  className="btn btn-ghost btn-xs"
                >
                  View
                </label>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
          <button className="btn btn-outline btn-xs">Previous page</button>
          <button className="btn btn-outline btn-xs">Next</button>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              X
            </label>
          </div>
          <h3 className="font-bold text-lg">Registration of Mohammad</h3>

          <div className="py-4">
            <RegistrationFormPDF
              studentDetails={{
                name: "Borhan",
                studentID: "ASH2101008M",
                department: "CSTE",
                hall: "ASH",
                session: "2020-21",
                institute: "Eng.",
                year: "01",
                term: "01",
                course1Code: "CSTE1101",
                course1Title: "Computer Fundamentals",
                course1Credits: "4.00",
                course2Code: "CSTE1101",
                course2Title: "Computer Fundamentals",
                course2Credits: "4.00",

                course3Code: "CSTE1101",
                course3Title:
                  "Computer Fundamentals Computer Fundamentals Computer FundamentalsComputer Fundamentals Computer Fundamentals Computer Fundamentals",
                course3Credits: "4.00",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
