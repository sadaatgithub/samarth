import React from 'react'

const FormsInput = ({name,type,label}) => {
  return (
    type=="textarea"? <label htmlFor={name} className="relative">
    <textarea
      type="text"
      name={name}
      required
      id=""
      rows="4"
      className="border w-full  px-2 rounded-sm focus:outline-[1px] outline-blue-400"
    />
    <span className="input-text text-gray-600 absolute left-0 top-5  ml-3 transition duration-200">
      {label}
    </span>
  </label>:
    <label htmlFor={name} className="relative">
    <input
      type={type}
      name={name}
      required
      id=""
      className="border h-10 w-full px-2 rounded-sm focus:outline-[1px] outline-blue-400"
    />
    <span className="input-text text-gray-600 absolute left-0 top-1/2 -translate-y-1/2 ml-3 transition duration-200">
      {label}
    </span>
  </label>
  )
}

export default FormsInput