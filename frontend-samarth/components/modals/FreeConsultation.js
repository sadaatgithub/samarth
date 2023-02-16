import React from "react";
import { FaTimes } from "react-icons/fa";
import FormsInput  from "../forms/FormsInput";
import { useState } from "react";
import {ImSpinner8} from "react-icons/im"
import { submitContactForm } from "@/lib/submitContactForm";

const initialFormValue = { name: "", email: "", subject:"Free Consultation",contact: "", message: "" }
const initialState = {isLoading:false, error:"", values:initialFormValue}


const FreeConsultation = ({ setOpen }) => {

  // const [formData,setState] = useState({subject:"Free Consultation"})
  const [state, setState] = useState(initialState)
  const [isSuccess,setIsSuccess] = useState(false)

  const {isLoading, values,error} = state




  const submitHandler = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,isLoading:true,
     

    }));

    try {
      await submitContactForm(values)
      console.log(state)
      setState(initialState)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000);

    } catch (error) {
      console.log(error)
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }

  


  };

  return (
    
    <div className="fixed top-0 w-full h-full flex flex-col  justify-center items-center bg-black/60 z-[103] py-12">

      <FaTimes
        onClick={() => setOpen(false)}
        className="cursor-pointer absolute right-3 top-4 text-white text-3xl"
      />
 
      <form  
        className="relative w-[90%] lg:w-2/5 bg-white px-4 md:px-16 py-12 flex flex-col gap-6 md:gap-6 rounded-md overflow-y-auto"
        onSubmit={submitHandler}
      >
        {error? <div className={` ${error? "top-0 transition-all duration-300":"-top-12 "} absolute right-0 left-0 flex items-center justify-center p-3 bg-red-400 backdrop-blur-sm z-10 `}>
          <h3 className="font-semibold text-white">{error}</h3>
        </div>:""}
        {isSuccess? <div className={` ${isSuccess? "top-0 transition-all duration-300":"-top-12 "} absolute right-0 left-0 flex items-center justify-center p-3 bg-teal-500 backdrop-blur-sm z-10 `}>
          <h3 className="font-semibold text-white">Form Submitted Successfully</h3>
        </div>:""}
          <h3>Please fill the required details. <span className="font-semibold text-blue-600">We will contact you soon</span></h3>

        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="flex flex-col w-full gap-1">
          <FormsInput  value={values?.name} type={"text"} name="name" label="Full Name" setState={setState}/>
          </div>

          
        </div>
        <div className="flex flex-col w-full gap-1">
       
          <FormsInput  value={values?.email} type={"email"} name="email" label="Email" setState={setState}/>
        </div>
        <div className="flex flex-col w-full gap-1">
         
          <FormsInput  value={values?.contact} type={"number"} name="contact" label="Mobile No." setState={setState}/>
        </div>
        <div className="flex flex-col w-full gap-1">
         
          <FormsInput  value={values?.message} type={"textarea"} name="message" label="Message" setState={setState}/>

          <div className="ml-auto flex gap-2 [&>input]:rounded-sm text-teal-600">
            <input
              type="reset"
              value="Clear"
              className={`${isLoading? "hidden":"block"} shadow-md px-3 py-2 h-10 cursor-pointer border mt-4 rounded-sm w-20 border-teal-500`}
              onClick={()=> setState(initialState)}
            />
            <button
              type="submit"
              className="px-3 py-2 cursor-pointer border shadow-md mt-4 w-20 h-10 bg-teal-500 rounded-sm text-white flex items-center justify-center"
            >{isLoading? <ImSpinner8 className="animate-spin self-center"/>:"Submit"}</button> 
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default FreeConsultation;
