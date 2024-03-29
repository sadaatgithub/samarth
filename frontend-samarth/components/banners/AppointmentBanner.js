import { useState } from "react";
import FreeConsultation from "../modals/FreeConsultation";
import Portal from "../portal/Portal";
import { AnimatePresence } from "framer-motion";
const AppointmentBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    
    <section className="mt-20 mb-20">
    <div className="h-60 w-full flex bg-gradient-to-l  from-teal-500 to-teal-600 overflow-hidden  items-center justify-around md:rounded-sm md:flex-row flex-col relative py-4 ">
        <h3 className="text-xl text-center md:text-3xl w-3/4 md:font-bold text-gray-50 md:w-1/2 z-[1]">&ldquo;Get back on track with expert physiotherapy to help you move, feel, and live better.&rdquo;</h3>
        <button
          className="flex max-w-xs justify-center items-center  gap-4 tracking-wide z-[1]
           text-lg hover:bg-teal-800/50 bg-white shadow-md text-teal-500 group hover:text-white px-9 py-4 rounded-sm  focus:bg-teal-800 transition-all duration-200"
          onClick={() => setOpen(!open)}
        >
          Get Free Consultation
        </button>  

        <div className="w-64 h-64 bg-gradient-to-r from-teal-500 to-teal-600 absolute -left-[10%] -top-[60%] rounded-full"></div>
        <div className="w-64 h-64 bg-gradient-to-l from-teal-400 to-teal-500 absolute -right-[10%] -bottom-[60%] rounded-full"></div>
        {/* <div className="w-48 h-48 bg-teal-300/10 absolute right-[50%] -bottom-[30%] rounded-full"></div> */}
    </div>

<AnimatePresence>
    {open && 
          <Portal>
            <FreeConsultation setOpen={setOpen} open={open} />
          </Portal>
         }
        </AnimatePresence>
    </section>
   
  )
}

export default AppointmentBanner