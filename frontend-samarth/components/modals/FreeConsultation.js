import React from 'react'
import { FaTimes } from 'react-icons/fa'

const FreeConsultation = ({setOpen}) => {
const submitHandler =(e) =>{
    e.preventDefault()
}

  return (
    <div className="fixed top-0 w-full h-full flex flex-col  justify-center items-center bg-black/60 z-30">

    <FaTimes onClick={()=> setOpen(false)} className="cursor-pointer absolute left-3 top-3 text-white text-3xl"/>

        <form className="w-1/2 bg-white p-12 flex flex-col gap-6 rounded-md" onSubmit={submitHandler}>
            <div className="flex gap-4">
            <div className="flex flex-col w-full">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" className="border p-2"/>
            </div>
            <div className="flex flex-col w-full">
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" className="border p-2"/>
            </div>
            </div>
            <div className="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" className="border p-2"/>
            </div>
            <div className="flex flex-col w-full">
            <label htmlFor="">Mobile</label>
            <input type="number" name="" id="" className="border p-2"/>
            </div>
            <div className="flex flex-col w-full">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" className="border p-2"/>

            <div className="flex gap-2 [&>input]:rounded-sm">
                <input type="reset" value="Clear" className="px-3 py-2 cursor-pointer border mt-4"/>
                <input type="submit" value="Submit" className="px-3 py-2 cursor-pointer border mt-4 bg-teal-500 text-white"/>
            </div>
            </div>

        </form>
    </div>
  )
}

export default FreeConsultation