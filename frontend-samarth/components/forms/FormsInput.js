import { useState } from 'react'

const FormsInput = ({name,type,label,setState,value}) => {



const handleChange = (e) =>{
  const {name,value} = e.target;
  setState((prev) =>({
    ...prev,values:{
      ...prev.values,
      [name]:value,
    }
  }))
}  
  
  return (
    type=="textarea"? <label htmlFor={name} className="relative">
    <textarea
      type="text"
      name={name}
      required
      value={value}
      id={name}
      rows="5"
      onChange={handleChange}
      className="border w-full  px-2 rounded-sm focus:outline-[1px] outline-blue-400"
    />
    <span className="input-text text-gray-600 absolute left-0 top-5  ml-3 transition duration-200">
      {label}
    </span>
  </label>:
    <label htmlFor={name} className="relative ">
    <input
      type={type}
      name={name}
      value={value}
      required
      id={name}
      className={`border h-10 w-full px-2 rounded-md focus:outline-[1px] outline-blue-400 bg-transparent `}
      onChange={handleChange}
    />
    <span className="input-text  text-gray-600 absolute left-0  top-1/2 p-1 -translate-y-1/2 ml-3 transition duration-200">
      {label}
    </span>
  </label>
  )
}

export default FormsInput