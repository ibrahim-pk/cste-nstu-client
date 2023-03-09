import React from "react";

export default function InputField({
  setField,
  fieldValue,
  label,
  type,
  className,
  requiredField,
}) {
  return (
    <div className={`form-control w-full ${className} `}>
      <label className="label">
        <span className="label-text"> {label}:</span>
      </label>
      <input
        type={type}
        placeholder={label}
        className={`input input-bordered w-full `}
        name={label}
        onChange={(e) => setField(e.target.value)}
        value={fieldValue}
        required={requiredField}
      />
    </div>
  );
}
