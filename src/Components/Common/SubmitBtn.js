import React from "react";

export default function SubmitBtn({ value }) {
  return (
    <button
      className="btn w-full mt-4 bg-blue-900 hover:bg-blue-800 max-w-xs"
      type="submit"
    >
      {value}
    </button>
  );
}
