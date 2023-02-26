import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FreeConsultation from "../modals/FreeConsultation";
import Portal from "../portal/Portal";
import { MdArrowRightAlt } from "react-icons/md";
import heroImage from "../../public/slide1.jpg"
import AppointmentContactForm from "../forms/AppointmentContactForm";
import Image from "next/image";




const Introduction = () => {



  const [open, setOpen] = useState(false);
// md:bg-[url('../public/slide2.jpg')] after:bg-gradient-to-l after:from-teal-600/50 after:to-transparent
// gradient-to-l md:after:from-teal-800/50  after:to-teal-600/80 after:from-teal-600/80 
  return (
    <div
      className="intro-div  bg-cover md:bg-center bg-[70%]
       min-h-screen flex-col md:flex-row  flex justify-center items-center gap-y-6 lg:p-14 
      
      "
    >
      <div className="flex flex-col gap-10 w-full md:w-2/3 py-20 md:py-10 px-6 lg:px-0 justify-center items-center text-center md:text-left  md:items-start z-10
       bg-white/70 md:bg-transparent">
      <h1 className="text-3xl md:text-4xl  lg:text-5xl font-black text-slate-600 lg:text-gray-600 z-[1] lg:leading-[52px] relative">
       <span className="text-xl text-rose-500 font-semibold absolute top-3 left-0 w-full"> Welcome to</span> <br />Samarth Physiotherapy & Rehabilitition clinic
      </h1>
      <h2 className="text-xl  font-semibold z-[1] text-slate-700 w-full first-letter:text-2xl">
        We care about you and your health and  will do everything <br/>we can 
        to ensure your treatment and 
        recovery is successful.
      </h2>
      <ul className="text-lg  text-slate-700 z-[1] flex flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-500 text-left">
        <li>
          <FaCheckCircle />
          Personalised Treatment
        </li>
        <li>
          <FaCheckCircle />
          Professional and Certified Therapists
        </li>
        <li>
          <FaCheckCircle />
          Experienced staff
        </li>
      </ul>

      
      <button
        className="mt-10 md:mt-6 flex max-w-xs justify-center items-center  gap-4 tracking-wide  text-lg bg-teal-500 z-[1] group text-white px-9 py-4 rounded-md shadow-xl  hover:bg-teal-600 focus:bg-teal-800 transition-all duration-100"
        onClick={() => setOpen(!open)}
      >
        Get Free Consultation
        <MdArrowRightAlt className="md:text-xl -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 hidden sm:block" />
      </button>
      {open ? (
        <Portal>
          <FreeConsultation setOpen={setOpen} open={open} />
        </Portal>
      ) : null}
      </div>

      {/* <AppointmentContactForm/> */}
      <div className="md:w-1/3 bg-cover bg-center grow  h-[400px] shadow-sm md:shadow-2xl rounded-sm overflow-hidden px-6 md:px-0">
        <Image src={heroImage} width={640} height={480} alt="" className="w-full h-full object-cover object-right"/>

      </div>

      {/* <HeroBanner/> */}
    </div>
  );
};

export default Introduction;
