import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail,TfiLocationPin } from "react-icons/tfi";
import FormsInput from "@/components/forms/FormsInput";
import { useState } from "react";
import PageBanner from "@/components/banners/PageBanner";


const initialFormValue = { name: "", email: "", subject:"Book Appointment",contact: "", message: "" }

const initialState = {isLoading:false, error:"", values:initialFormValue}


const ContactUs = () => {
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
      setState(initialState)
      setIsSuccess(true)

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
    <>
    <PageBanner/>
    <div  name="contact-us" className="min-h-screen border  flex justify-center w-full md:flex-row flex-col bg-gray-50  rounded-md overflow-hidden px-4 md:px-10 xl:px-20 py-8">
    <div className="w-full md:w-5/12 lg:w-5/12 flex flex-col gap-y-4 relative after:content-[''] after:absolute after:inset-0 after:bg-teal-700/80 after:backdrop-blur-sm bg-[url('../public/dumbels.jpg')] bg-no-repeat bg-cover py-6  text-gray-200 justify-between md:rounded-l-lg px-10 font-hindGuntur shadow-lg">
      <h3 className="text-xl md:text-2xl font-semibold font-monteserrat mt-4 z-[1]">Book an appointement</h3>
      

      <ul className="flex gap-4 flex-col divide-y-[1px] divide-gray-200 mt-5 z-[1]">
       <li className="flex gap-4"> <FiPhoneCall className="my-auto"/> <p>9823598235</p></li>
       <li className="flex gap-4"> <FiPhoneCall className="my-auto"/> <p>9823598235</p></li>
       <li className="flex gap-4"> <FiPhoneCall className="my-auto"/> <p>9823598235</p></li>
       <li className="flex gap-4"><TfiEmail className="my-auto"/> <p>nagpur@email.com</p></li>
      </ul>
     
      
      <div className="flex gap-4  flex-col z-[1]">
        <address className="flex">
        <TfiLocationPin className="text-xl"/>
                123, Swawalambi Nagar, Abc Road, Nagpur <br/>
                Dist Nagpur 440022 MS
            </address>
           
          </div>
        <div className="mt-2 rounded-sm overflow-hidden z-[1]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.3527285104383!2d79.07790911253058!3d21.144842442857172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff90e72306f%3A0x192616fc50e41145!2sLata%20Mangeshkar%20Hospital!5e0!3m2!1sen!2sin!4v1670243702439!5m2!1sen!2sin"
            width="350"
            height="200"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >

          </iframe>
        </div>
      </div>


    <div className="w-full md:w-7/12 lg:w-7/12 bg-white p-4 md:shadow-lg md:rounded-r-lg flex justify-center">

      <form onSubmit={submitHandler} className="w-full  lg:w-10/12 flex md:pl-8 flex-col gap-y-8 py-1 [&>div>label]:text-sm [&>div]:gap-y-1 [&>div>label]:text-gray-600">
        <h2 className="text-xl md:text-3xl font-semibold text-secondary py-2 text-slate-600">Enter Details</h2>
        <div className="flex flex-col">
      
          <FormsInput value={values?.name} type={"text"} name="name" label="Full Name" setState={setState}/>
        </div>
        <div className="flex flex-col">
          
          
          <FormsInput value={values?.email} type={"email"} name="email" label="Email" setState={setState}/>
        </div>
        <div className="flex flex-col">
        
          <FormsInput value={values?.contact} type={"number"} name="contact" label="Mobile No" setState={setState}/>

        </div>

        <div className="flex flex-col">
          <FormsInput value={values?.message} type={"textarea"} name="message" label="Message" setState={setState}/>

        </div>


        <div className="flex gap-4 w-full ">
        <input
              type="reset"
              value="Clear"
              disabled={isLoading}
              className={`${isLoading? "hidden":"block"} px-3 shadow-md py-2 ml-auto cursor-pointer border rounded-sm w-20 border-teal-500 text-teal-500`}
              onClick={()=> setState(initialState)}
            />
        <button className="bg-teal-500 px-3 py-2 shadow-md text-white rounded-sm">{isLoading? "Sending":"Submit"}</button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default ContactUs