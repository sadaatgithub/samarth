import React from 'react'
import { FaTimes } from 'react-icons/fa'

const FreeConsultation = ({setOpen}) => {
const submitHandler =(e) =>{
    e.preventDefault()
}

  return (
    <div className="fixed top-0 w-full h-full flex flex-col  justify-center items-center bg-black/60 z-[101] py-12">

    <FaTimes onClick={()=> setOpen(false)} className="cursor-pointer absolute right-3 top-4 text-white text-3xl"/>

        <form className=" w-5/6 lg:w-2/5 bg-white px-16 py-12 flex flex-col gap-2 md:gap-6 rounded-md overflow-y-scroll md:overflow-auto" onSubmit={submitHandler}>
            <div className="flex gap-4 sm:flex-row flex-col">
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" className="border p-2 rounded-sm focus:outline-[1px] outline-teal-300"/>
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" className="border p-2 rounded-sm focus:outline-[1px] outline-teal-300"/>
            </div>
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" className="border p-2 rounded-sm focus:outline-[1px] outline-teal-300"/>
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Mobile</label>
            <input type="number" name="" id="" className="border p-2 rounded-sm focus:outline-[1px] outline-teal-300"/>
            </div>
            <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" className="border p-2 rounded-sm focus:outline-[1px] outline-teal-300"/>

            <div className="ml-auto flex gap-2 [&>input]:rounded-sm">
                <input type="reset" value="Clear" className="px-3 py-2 cursor-pointer border mt-4"/>
                <input type="submit" value="Submit" className="px-3 py-2 cursor-pointer border mt-4 bg-teal-500 text-white"/>
            </div>
            </div>

        </form>
    </div>
  )
}

export default FreeConsultation