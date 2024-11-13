import React from 'react'

export default function InputField({label,type,name,required}) {
  return (
    <div className="flex items-center gap-5">
    <div className="flex-1">
      <label htmlFor="" className="full">
        {label}
      </label>
    </div>
    <div className="flex-1">
      <input
        type={type}
        name={name}
        required={required && true}
        className="border-gray-300 rounded-md p-2 w-64"
      />
    </div>
  </div>
  )
}
