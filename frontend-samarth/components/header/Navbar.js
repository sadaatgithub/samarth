import {GoLocation} from "react-icons/go"
import {BiTime} from "react-icons/bi"

import {GrMail} from "react-icons/gr"
import {MdPhoneInTalk} from "react-icons/md"
import { useState,useEffect } from "react";
import Navlink from "./Navlink";
import BookAppointement from "../buttons/BookAppointement";
import Logo from "./Logo";
import AnimatedNav from "./AnimatedNav";
import { FaBars ,FaTimes} from "react-icons/fa";

import Portal from "../portal/Portal";
import MobileMenu from "./MobileMenu";
import GoToTop from "../buttons/GoToTop";
import { AnimatePresence } from "framer-motion";




const Navbar = () => {

  

  const [animateNav, setAnimateNav] = useState(false)
  const [burgerMenuState, setBurgerMenuState] = useState(false)
  const [goToTop, setGoToTop] = useState(false)

  const navbarOnScroll = () =>{
    if(window.scrollY >=250){
      setAnimateNav(true)
      setGoToTop(true)
    
    } else{
      setAnimateNav(false)
      setGoToTop(false)

    }
  }
  useEffect(() =>{
    window.addEventListener("scroll", navbarOnScroll)
    return()=>{
      window.removeEventListener("scroll", navbarOnScroll)
    }
  },[])

  return (
    <header  className={` flex flex-col border-b bg-white`}>
      <div className="hidden md:flex bg-[#17234D] text-gray-200 lg:px-14 px-6 justify-between items-center flex-col md:flex-row py-2 md:py-2 text-xs md:text-base font-light">
        <div className="">
          <h4 className="">Welcome to Samarth Physiotherapy!</h4>
        </div>
        <div className="flex gap-4  justify-between md:justify-end">
          <span className="flex items-center gap-2"><GoLocation className="text-teal-500"/> Plot No 114, Deendayal Nagar, Ram Mandir Marg, Swavalambi Nagar, Nagpur</span>
          <span className="flex items-center gap-2"><BiTime className="text-teal-500"/>Mon - Sat 9:00 to 18:00,Sunday Closed</span>
        </div>
      </div>


      <div className={`  md:py-2 logo px-6  lg:px-14 grid md:grid-cols-12 grid-cols-1 grid-flow-row border-b md:flex-row place-items-center gap-y-2 relative`}>
          <Logo/>
       <FaBars className="absolute right-3 text-teal-500 z-[9] md:hidden w-8 h-8 p-1 cursor-pointer bg-white  rounded-sm" onClick={()=> setBurgerMenuState(!burgerMenuState)}/>
          <div className="md:col-span-7 lg:col-span-8 w-full hidden md:flex  flex-wrap justify-center md:justify-end font-medium text-slate-700 text-base md:text-lg gap-x-6">
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
                    <a href="mailto:samarthphysioclinic@gmail.com" className="text-gray-500 hover:text-blue-500 duration-300">samarthphysioclinic@gmail.com</a>
                </div>
                <div className="hidden lg:block">
                <BookAppointement title="Book Now"/></div>
          </div>
        </div>
      <Navlink animateNav={animateNav}/>
      
      {/* navigation after scrolling some part */}
       <AnimatedNav visible={animateNav} setBurgerMenuState={setBurgerMenuState} burgerMenuState={burgerMenuState}/>
<AnimatePresence>
       {burgerMenuState &&<Portal>
        <MobileMenu setBurgerMenu={setBurgerMenuState} menuState={burgerMenuState}/>
       </Portal>}
       </AnimatePresence>
       <GoToTop visible={goToTop}/>
    </header>
  )
}

export default Navbar