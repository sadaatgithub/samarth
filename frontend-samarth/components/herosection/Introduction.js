import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FreeConsultation from "../modals/FreeConsultation";
import Portal from "../portal/Portal";
import { MdArrowRightAlt } from "react-icons/md";

import FormsInput from "../forms/FormsInput";
import { ImSpinner8 } from "react-icons/im";


const initialFormValue = { name: "", email: "", subject:"Free Consultation",contact: "", message: "" }
const initialState = {isLoading:false, error:"", values:initialFormValue}

const Introduction = () => {

  const [state, setState] = useState(initialState)
  const [isSuccess,setIsSuccess] = useState(false)

  const {isLoading, values,error} = state

  const [open, setOpen] = useState(false);
// md:bg-[url('../public/slide2.jpg')] after:bg-gradient-to-l after:from-teal-600/50 after:to-transparent
  return (
    <div
      className="intro-div bg-[url('../public/slide2.jpg')] bg-cover bg-center
       min-h-screen flex-col lg:flex-row  flex justify-center items-center gap-y-6
      md:justify-start md:items-start  lg:p-10 xl:p-20 p-6 lg:gap-12 relative after:content-[''] 
      after:absolute after:inset-0   text-center md:text-left after:bg-gradient-to-l after:from-teal-800/90 lg:after:to-transparent after:to-teal-900/50 "
    >
      <div className="flex flex-col gap-8 w-full lg:w-2/3 justify-center items-center text-center lg:text-left  lg:items-start mt-8 lg:mt-0 z-10">
      <h1 className="text-2xl md:text-4xl  lg:text-5xl font-black  text-white lg:text-gray-700 z-[1] lg:leading-[52px]">
        Welcome to Samarth Physiotherapy & Rehabilitition clinic
      </h1>
      <h2 className="text-xl  font-semibold z-[1] text-white lg:text-slate-700 w-full first-letter:text-2xl">
        We care about you and your health and  will do everything <br/>we can 
        to ensure your treatment and 
        recovery is successful.
      </h2>
      <ul className="text-lg  text-white lg:text-slate-700 z-[1] flex flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-500 text-left">
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
        className="mt-10 md:mt-6 flex max-w-xs justify-center items-center  gap-4 tracking-wide  text-lg bg-teal-500 z-[1] group text-white px-9 py-4 rounded-full shadow-xl  hover:bg-teal-600 focus:bg-teal-800 transition-all duration-100"
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

      <div className="hidden lg:flex w-full lg:w-1/3 border max-w-sm rounded-md shadow-2xl z-10 relative self-center grow bg-white  flex-col items-center pt-6">
        <h2 className="text-2xl text-slate-600">Book a <span className="font-medium text-teal-500">FREE</span> Appointement</h2>
<form className=" flex flex-col gap-4 w-full p-8">
          <div className="flex flex-col w-full gap-1">
          <FormsInput  value={values?.name} type={"text"} name="name" label="Full Name" setState={setState}/>
          </div>
          

          
        <div className="flex flex-col w-full gap-1">
       
       <FormsInput  value={values?.email} type={"email"} name="email" label="Email" setState={setState}/>
     </div>
     <div className="flex flex-col w-full gap-1">
         
          <FormsInput  value={values?.contact} type={"number"} name="contact" label="Mobile No." setState={setState}/>
        </div>

        <button
              type="submit"
              className="self-end px-3 py-2 cursor-pointer border  mt-4 w-full h-10 bg-teal-500 rounded-md text-white flex items-center justify-center"
            >{isLoading? <ImSpinner8 className="animate-spin self-center"/>:"Submit"}
            </button> 
</form>

        
      </div>

      {/* <HeroBanner/> */}
    </div>
  );
};

export default Introduction;
