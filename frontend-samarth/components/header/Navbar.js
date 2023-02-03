import {GoLocation} from "react-icons/go"
import {BiTime} from "react-icons/bi"

import {GrMail} from "react-icons/gr"
import {MdPhoneInTalk} from "react-icons/md"
import Link from "next/link";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState,useEffect } from "react";
import Navlink from "./Navlink";
import BookAppointement from "../buttons/BookAppointement";


const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]


const Navbar = () => {

  const [animateNav, setAnimateNav] = useState(false)

  const navbarOnScroll = () =>{
    if(window.scrollY >=178){
      setAnimateNav(true)
    
    } else{
      setAnimateNav(false)
    }
  }
  useEffect(() =>{
    window.addEventListener("scroll", navbarOnScroll)
    return()=>{
      window.removeEventListener("scroll", navbarOnScroll)
    }
  },[])

  return (
    <header className={` flex flex-col border-b bg-white`}>
      <div className="flex bg-[#17234D] text-gray-200 lg:px-20 px-6 justify-between items-center flex-col md:flex-row py-2 md:py-2 text-xs md:text-base font-light">
        <div className=" md:w-1/3  lg:w-2/4">
          <h4 className="">Welcome to Samarth Physiotherapy!</h4>
        </div>
        <div className="flex gap-2 md:w-2/3  justify-between md:justify-end">
          <span className="flex items-center gap-2"><GoLocation className="text-teal-500"/> 88 broklyn silver street, USA</span>
          <span className="flex items-center gap-2"><BiTime className="text-teal-500"/>Mon to Fri 9:00am to 6:00pm</span>
        </div>
      </div>
      <div className={` ${animateNav? "fixed top-0 left-0 z-[100] right-0  transition-all duration-700 bg-white py-3 shadow-md":"py-6 -top-40"} logo px-6 lg:px-20  grid md:grid-cols-6 grid-cols-1 grid-flow-row border-b md:flex-row place-items-center gap-y-2`}>
        <h1 className="text-3xl font-bold text-coral-red-500   col-span-full w-full md:col-span-2 text-slate-700 text-center md:text-start drop-shadow-xl"><Link href="/">Samarth <span className="text-teal-500">Physio</span></Link></h1>
          {animateNav? 
          <div className="md:col-span-4 flex w-full">
          <Navlink animateNav={animateNav}/> 
          </div>
          :
          <div className="md:col-span-4 w-full flex  flex-wrap justify-center md:justify-end font-medium text-slate-800 text-base md:text-lg gap-x-6">
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
                <BookAppointement/>
          </div>}
        </div>
      <Navlink/>
{/* {animateNav? <div className={`${animateNav? "h-[178px]":"h-0"} transition-all duration-1000`}></div>:null} */}
    </header>
  )
}

export default Navbar