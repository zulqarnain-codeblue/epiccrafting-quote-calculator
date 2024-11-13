import React from "react";

export default function TextareaField({label,name,required}) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex-1">
        <label htmlFor="">{label}</label>
      </div>
      <div className="flex-1">
        <textarea
          name={name}
          className="border-gray-300 rounded-md p-2 w-64"
          required={required && true}
        ></textarea>
      </div>
    </div>
  );
}
