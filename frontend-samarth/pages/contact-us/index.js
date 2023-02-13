import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail,TfiLocationPin } from "react-icons/tfi";
import FormsInput from "@/components/forms/FormsInput";
import { useState,useEffect } from "react";


const initialFormValue = {name:'',email:'',contact:'',message:''}


const ContactUs = () => {
  const [formData,setFormData] = useState({subject:"Book Appointment"})
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

  useEffect(() => {
    
  
  }, [isLoading])
  

  return (
    <div  name="contact-us" className="min-h-screen border  flex justify-center w-full md:flex-row flex-col bg-gray-50  rounded-md overflow-hidden px-20 py-8">
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
            {/* <p>9876543210</p> */}
            {/* <p>contact@email.com</p> */}
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

      <form onSubmit={submitHandler} className="w-full  lg:w-8/12 flex md:pl-8 flex-col gap-y-6 py-1 [&>div>label]:text-sm [&>div]:gap-y-1 [&>div>label]:text-gray-600">
        <h2 className="text-xl first-letter:md:text-2xl font-semibold text-secondary py-2 font-monteserrat">Enter Details</h2>
        <div className="flex flex-col mt-12">
      
          <FormsInput type={"text"} name="name" label="Full Name" setFormData={setFormData}/>
        </div>
        <div className="flex flex-col">
          
          
          <FormsInput type={"email"} name="email" label="Email" setFormData={setFormData}/>
        </div>
        <div className="flex flex-col">
        
          <FormsInput type={"number"} name="contact" label="Mobile No." setFormData={setFormData}/>

        </div>

        <div className="flex flex-col">
          <FormsInput type={"textarea"} name="message" label="Message" setFormData={setFormData}/>

        </div>
        <button className="mt-1 bg-teal-500 p-4 text-white rounded-sm">{isLoading? "Sending":"Submit"}</button>
      </form>
    </div>
    </div>
  )
}

export default ContactUs