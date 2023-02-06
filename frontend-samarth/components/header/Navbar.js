import {GoLocation} from "react-icons/go"
import {BiTime} from "react-icons/bi"

import {GrMail} from "react-icons/gr"
import {MdPhoneInTalk} from "react-icons/md"
import Link from "next/link";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState,useEffect } from "react";
import Navlink from "./Navlink";
import BookAppointement from "../buttons/BookAppointement";
import Logo from "./Logo";
import AnimatedNav from "./AnimatedNav";
import { FaBars } from "react-icons/fa";

import Portal from "../portal/Portal";
import MobileMenu from "./MobileMenu";
const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]


const Navbar = () => {

  const [animateNav, setAnimateNav] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)

  const navbarOnScroll = () =>{
    if(window.scrollY >=250){
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
      <div className="hidden md:flex bg-[#17234D] text-gray-200 lg:px-20 px-6 justify-between items-center flex-col md:flex-row py-2 md:py-2 text-xs md:text-base font-light">
        <div className=" md:w-1/3  lg:w-2/4">
          <h4 className="">Welcome to Samarth Physiotherapy!</h4>
        </div>
        <div className="flex gap-2 md:w-2/3  justify-between md:justify-end">
          <span className="flex items-center gap-2"><GoLocation className="text-teal-500"/> 88 broklyn silver street, USA</span>
          <span className="flex items-center gap-2"><BiTime className="text-teal-500"/>Mon to Fri 9:00am to 6:00pm</span>
        </div>
      </div>
      <div className={`py-4 md:py-6 logo px-6 lg:px-20  grid md:grid-cols-6 grid-cols-1 grid-flow-row border-b md:flex-row place-items-center gap-y-2 relative`}>
          <Logo/>
       <FaBars className="absolute left-3 text-teal-400 z-[102] md:hidden w-8 h-8 p-2 cursor-pointer" onClick={()=> setBurgerMenu(!burgerMenu)}/>

          <div className="md:col-span-4 w-full hidden md:flex  flex-wrap justify-center md:justify-end font-medium text-slate-800 text-base md:text-lg gap-x-6">
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
          </div>
        </div>
      <Navlink animateNav={animateNav}/>
       <AnimatedNav visible={animateNav} closeMenu={setBurgerMenu} menuState={burgerMenu}/>

       {burgerMenu?<Portal>
        <MobileMenu setBurgerMenu={setBurgerMenu} menuState={burgerMenu}/>
       </Portal>:null}
    </header>
  )
}

export default Navbar