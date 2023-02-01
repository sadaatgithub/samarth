
import { useState } from "react"
import {FaCheckCircle} from "react-icons/fa"
import FreeConsultation from "../modals/FreeConsultation"
import Portal from "../portal/Portal"



const Introduction = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="intro-div mt-6 md:mt-60 md:min-h-screen bg-[url('../public/slide2.jpg')]  bg-contain bg-right bg-no-repeat flex flex-col justify-center items-center md:justify-start md:items-start py-20 md:px-20 px-4 lg:gap-12 sm:gap-8 gap-6 relative after:content-['']
    after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/80 after:to-transparent  text-center md:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 z-[1] lg:leading-[72px]">Welcome to Samarth Physiotherapy <br/>& Rehabilitition clinic</h1>
        <h4 className="text-xl lg:text-2xl font-medium z-[1] text-slate-700">We care about you and your health and <br/> will do everything we can to ensure your treatment and <br/>recovery is successful.</h4>
        <ul className="text-lg text-slate-500 z-[1] flex flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-slate-800 text-left">
            <li><FaCheckCircle/>Personalised Treatment</li>
            <li><FaCheckCircle/>Professional and Certified Therapists</li>
            <li><FaCheckCircle/>Experienced staff</li>
        </ul>
        <button className="text-xl bg-teal-700 z-[1] text-white px-6 py-4 rounded-full shadow-sm  hover:bg-teal-800 transition-all duration-100" onClick={()=> setOpen(!open)}>Get Free Consultation</button>
        {open?
        <Portal>
          <FreeConsultation setOpen={setOpen}/>
        </Portal>:null}

    </div>
  )
}

export default Introduction