import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FreeConsultation from "../modals/FreeConsultation";
import Portal from "../portal/Portal";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import heroImage from "../../public/slide2.jpg"
import heroImage2 from "../../public/banner1.jpg"


const Introduction = () => {
  const [open, setOpen] = useState(false);
// md:bg-[url('../public/slide2.jpg')] after:bg-gradient-to-l after:from-teal-600/50 after:to-transparent
  return (
    <div
      className="intro-div overflow-hidden mt-10  min-h-screen flex-col lg:flex-row  bg-cover bg-right bg-no-repeat flex justify-center items-center 
      md:justify-start md:items-start py-20 lg:px-20 px-6 gap-12 relative after:content-['']
    after:absolute after:inset-0   text-center md:text-left"
    >
      <div className="flex flex-col gap-8 w-full lg:w-3/5">
      <h1 className="text-3xl  lg:text-4xl font-bold text-slate-700 z-[1] lg:leading-[52px] ">
        Welcome to Samarth Physiotherapy <br />& Rehabilitition clinic
      </h1>
      <h4 className="text-xl lg:text-xl font-semibold z-[1] text-slate-700 ">
        We care about you and your health and <br /> will do everything we can
        to ensure your treatment and <br />
        recovery is successful.
      </h4>
      <ul className="text-lg self-center md:self-start text-slate-800 z-[1] flex flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-rose-600 text-left">
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
        className="mt-10 md:mt-0 flex max-w-xs justify-center items-center self-center md:self-start gap-4 md:text-xl bg-teal-500 z-[1] group text-white px-9 py-4 rounded-full shadow-2xl  hover:bg-teal-800 focus:bg-teal-800 transition-all duration-100"
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
      <div className=" hidden lg:flex md:w-1/5  h-[300px] lg:w-2/5 aspect-square rounded-md  z-10 relative self-center grow">
        <Image src={heroImage} width={640} height={480} className="w-full object-cover shadow-2xl  rounded-md"/>
        <Image src={heroImage2} width={320} height={240} className="absolute hidden lg:block -left-28 shadow-2xl object-right -bottom-20 w-1/3 z-[1] h-1/3 object-cover rounded-xl  shadow-green-900/20"/>
        <Image src={heroImage2} width={320} height={240} className="absolute hidden lg:block -left-10 z-[1] shadow-2xl h-1/3 object-cover shadow-green-900/20 -top-16 w-1/3 rounded-xl"/>
      </div>
    </div>
  );
};

export default Introduction;
