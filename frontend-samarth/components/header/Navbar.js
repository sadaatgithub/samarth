import {GoLocation} from "react-icons/go"
import {BiTime} from "react-icons/bi"

import {GrMail} from "react-icons/gr"
import {MdPhoneInTalk} from "react-icons/md"
import Link from "next/link";


const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]


const navbar = () => {
  return (
    <header className="flex flex-col">
      <div className="flex bg-slate-800 text-gray-200 lg:px-20 px-6 justify-between items-center flex-col md:flex-row py-2 md:py-2 text-xs md:text-base font-light">
        <div className=" md:w-1/3  lg:w-2/4">
          <h4 className="">Welcome to Samarth Physiotherapy!</h4>
        </div>
        <div className="flex gap-2 md:w-2/3  justify-between md:justify-end">
          <span className="flex items-center gap-2"><GoLocation className="text-teal-500"/> 88 broklyn silver street, USA</span>
          <span className="flex items-center gap-2"><BiTime className="text-teal-500"/>Mon to Fri 9:00am to 6:00pm</span>
        </div>
      </div>
      <div className="logo px-6 lg:px-20  py-6 grid md:grid-cols-6 grid-cols-1 grid-flow-row border-b md:flex-row place-items-center gap-y-2">
          <h1 className="text-3xl font-bold text-coral-red-500 uppercase  col-span-full w-full md:col-span-2 text-slate-700 text-center md:text-start">Samarth</h1>
          <div className="md:col-span-4 w-full flex  flex-wrap justify-center md:justify-end font-semibold text-slate-800 text-base md:text-lg gap-x-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10  p-2 rounded-full bg-slate-100 flex justify-center items-center">
                    <MdPhoneInTalk className="text-teal-500"/>
                    </div>
                    <span>9876543210</span>
                </div>
                <div className="flex items-center gap-4">
                <div className="w-10 h-10  p-2 rounded-full bg-slate-100 flex justify-center items-center">
                    <GrMail className="text-teal-500"/>
                    </div>
                    <span>example@email.com</span>
                </div>
                <button className="bg-teal-400 text-white px-4 py-2 rounded-full text-base hidden lg:block">Book Appointment</button>
          </div>
        </div>
      <nav className="flex justify-between w-full lg:px-20 px-6  text-slate-800 font-medium border-b-2 border-teal-300">
        
        <ul className="hidden md:flex gap-8 [&>li]:cursor-pointer [&>li]:py-3 navlink font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="relative group">Services
            <ul className="group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 opacity-0 top-[40px] invisible absolute left-0 z-[20] bg-white 
          w-[500%] transition-all duration-100 ease-linear flex flex-col shadow-xl overflow-hidden rounded-sm scale-75  group-hover:scale-100 origin-top-left">
              {link.map((services,index) =>(
                <li key={index} className="font-normal border-l-4 border-transparent hover:border-l-4 hover:border-teal-400 p-3 hover:bg-gray-50 transition-all duration-200">{services}</li>
              ))}
            </ul>
          </li>
          <li><Link href="/blogs-and-articles">Blogs</Link></li>

          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default navbar