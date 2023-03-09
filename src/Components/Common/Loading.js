import React from "react";

export default function Loading({ data }) {
  return (
    <div className="w-full mx-auto text-center mt-32">
      <button className="btn loading">{data}</button>
    </div>
  );
}
