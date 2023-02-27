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
 
  return (
    <div
      className="intro-div bg-gray-50 
       min-h-screen flex-col md:flex-row  flex justify-center items-center  lg:p-14"
    >
      <div className="flex flex-col relative gap-4 w-full md:w-4/6 py-20  md:py-10 px-6 lg:px-0 justify-center items-center text-center md:text-left  md:items-start ">
      <h1 className="text-3xl md:text-4xl  lg:text-4xl font-black text-slate-600 lg:text-gray-600 z-[1] lg:leading-[52px] relative">
       Welcome to Samarth Physiotherapy <br/> & Rehabilitition clinic
      </h1>
      <h2 className="text-xl  font-medium mt-4 text-slate-700 w-full first-letter:text-2xl">
        We care about you and your health and  will do everything <br/>we can 
        to ensure your treatment and 
        recovery is successful.
       
      </h2>
      <p className="text-xl text-teal-500 font-bold mt-6">Our Features</p>
      <ul className="text-lg text-slate-700 z-[1]  flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-500 text-left">
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
        className="mt-10 md:mt-8 flex max-w-xs justify-center items-center  gap-4 tracking-wide  text-lg bg-teal-500 z-[1] group text-white px-9 py-4 rounded-sm shadow-xl  hover:bg-teal-600 focus:bg-teal-800 transition-all duration-100"
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
      <div className="md:w-3/6 w-full bg-cover bg-center grow h-80  md:h-[400px] shadow-sm md:shadow-2xl rounded-sm overflow-hidden px-2 md:px-0">
        <Image src={heroImage} width={640} height={480} alt="" className="w-full h-full object-cover object-right"/>

      </div>

      {/* <HeroBanner/> */}
    </div>
  );
};

export default Introduction;
