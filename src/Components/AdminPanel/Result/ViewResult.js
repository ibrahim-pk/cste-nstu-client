import React, { useState } from "react";
import InputField from "../../Common/InputField";

export default function ViewResult() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-2 border-b pb-2">News (500)</h2>
      <div className="w-full overflow-hidden my-2">
        <InputField
          type="text"
          label="Search"
          setField={setSearch}
          fieldValue={search}
          className="max-w-xs float-right input-lg"
        ></InputField>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Session</th>
              <th>Term</th>
              <th>CGPA</th>

              <th className="w-16"></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>ASH2101000</td>
              <td>2020-21</td>
              <td>1-1</td>
              <td>4.00</td>

              <td>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-group grid grid-cols-2 w-80 mt-5 float-right">
        <button className="btn btn-outline btn-xs">Previous page</button>
        <button className="btn btn-outline btn-xs">Next</button>
      </div>
    </div>
  );
}
