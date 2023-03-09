import React, { useState } from "react";
import InputField from "../../Common/InputField";
import SubmitBtn from "../../Common/SubmitBtn";

export default function Suggestion() {
  const [suggestion, setSuggestion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-2 px-5  max-w-screen-xl	mx-auto w-full  mb-4">
      <h2 className="text-2xl mb-4">Suggestions</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write your suggestions</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            onChange={(e) => setSuggestion(e.target.value)}
            value={suggestion}
            required
          ></textarea>
        </div>
        <div className="w-full text-right">
          <SubmitBtn value="Suggest Us" />
        </div>
      </form>
    </div>
  );
}
