import React from "react";
import { FaTimes } from "react-icons/fa";
import FormsInput from "../forms/FormsInput";
import { useState } from "react";



const initialFormValue = {name:'',email:'',contact:'',message:''}

const FreeConsultation = ({ setOpen }) => {

  const [formData,setFormData] = useState({subject:"Free Consultation"})
  const [isLoading, setIsLoading] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true)
  // console.log(formData)
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }
  
  ).then((res) => {
    // console.log('Response received')
    if (res.status === 200) {
      console.log('Email Sent!')
      setIsLoading(false)
      setFormData(initialFormValue)
      
    }
  })


  };

  return (
    
    <div className="fixed top-0 w-full h-full flex flex-col  justify-center items-center bg-black/60 z-[103] py-12">
      <FaTimes
        onClick={() => setOpen(false)}
        className="cursor-pointer absolute right-3 top-4 text-white text-3xl"
      />
 
      <form  
        className=" w-5/6 lg:w-2/5 bg-white px-8 md:px-16 py-12 flex flex-col gap-6 md:gap-6 rounded-md overflow-y-auto"
        onSubmit={submitHandler}
      >
          <h3>Please fill the required details. <span className="font-semibold text-blue-600">We will contact you soon</span></h3>

        <div className="flex gap-4 sm:flex-row flex-col">
          <div className="flex flex-col w-full gap-1">
          <FormsInput type={"text"} name="name" label="Full Name" setFormData={setFormData}/>
          </div>

          
        </div>
        <div className="flex flex-col w-full gap-1">
       
          <FormsInput type={"email"} name="email" label="Email" setFormData={setFormData}/>
        </div>
        <div className="flex flex-col w-full gap-1">
         
          <FormsInput type={"number"} name="contact" label="Mobile No." setFormData={setFormData}/>
        </div>
        <div className="flex flex-col w-full gap-1">
         
          <FormsInput type={"textarea"} name="message" label="Message" setFormData={setFormData}/>

          <div className="ml-auto flex gap-2 [&>input]:rounded-sm text-rose-500">
            <input
              type="reset"
              value="Clear"
              className="px-3 py-2 cursor-pointer border mt-4 rounded-sm w-20 border-rose-500"
              onClick={()=> setFormData({})}
            />
            <input
              type="submit"
              value={`${isLoading? "Sending":"Submit"}`}
              className="px-3 py-2 cursor-pointer border mt-4 w-20 bg-rose-500 rounded-sm text-white"
            />
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default FreeConsultation;
