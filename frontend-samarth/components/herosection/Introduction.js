import {FaArrowAltCircleRight } from "react-icons/fa";
import heroImage from "../../public/physio3.jpg";
import Image from "next/image";
import Link from "next/link";
import Underline from "../headings/Underline";
import Container from "../container/Container";
import {motion as m,AnimatePresence } from "framer-motion"
import { container, item } from "@/animation";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Introduction = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.4,
  });
// from-blue-900  to-teal-600 bg-gradient-to-tl from-blue-900  to-teal-600
  return (
    <Container bg="">
      <AnimatePresence >
    <m.div ref={ref} variants={container} initial="hidden" animate="show" exit="hidden"
      className="lg:mt-48 mt-8 intro-div  bg-white 
       min-h-screen flex-col-reverse md:flex-row  flex justify-center items-center gap-16 md:gap-20"
    >
      {inView? 
     <> 
     <div 
       className={` flex flex-col relative w-full md:w-7/12 justify-center text-left  md:items-start `}>
        <m.p variants={item} className={` font-semibold text-rose-500`}>Welcome to</m.p>
        <m.h2 variants={item} className={` text-3xl md:text-5xl font-bold text-sky-900 mt-4`}>
          Samarth Physiotherapy & 
          Rehab Care Unit
        </m.h2>
        <m.div variants={item} className="hidden w-2/3  justify-center">
        <Underline/>
        </m.div>
        <m.p variants={item} className="text-lg mt-6  text-sky-800 md:w-11/12 first-letter:text-2xl">
          We care about you and your health and will do everything we can to
          ensure your treatment and recovery is successful.Samarth Physio is a leading provider of physiotherapy services in the
          community. Our mission is to help patients of all ages and abilities
          regain their health and mobility through expert care and personalized
          attention.
        </m.p>
      

        

        <m.p variants={item} className="text-xl text-sky-900 font-semibold mt-8">
          Our Features
        </m.p>
        <m.div variants={item} className="flex md:gap-6 flex-col md:flex-row">
        <ul className="text-slate-500 z-[1] mt-6 flex flex-col gap-2 md:gap-4 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-400 text-left">
          <li>
            <FaArrowAltCircleRight />
            Personalised Treatment
          </li>
          <li>
            <FaArrowAltCircleRight />
            Professional and Certified Therapists
          </li>
          <li>
            <FaArrowAltCircleRight />
            Post operated patients care
          </li>
        </ul>
        <ul className="text-slate-500 z-[1] mt-2 md:mt-6 flex flex-col gap-2 md:gap-4 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-400 text-left">
          <li>
            <FaArrowAltCircleRight />
            Physiotherapy OPD
          </li>
          <li>
            <FaArrowAltCircleRight />
            Nursing care
          </li>
          <li>
            <FaArrowAltCircleRight />
            Day care facilities for elderly and patients
          </li>
        </ul>
        </m.div>

       
        <m.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-8 [&>button]:uppercase  items-center sm:items-start justify-start w-full">
          <button className="text-teal-600 w-full  sm:w-auto max-w-xs rounded-sm px-6 py-3 tracking-wider mt-4 border border-teal-800 bg-white  hover:text-white  hover:bg-teal-800 transition-all duration-300">
            <Link href="/about" className="p-2 font-semibold">
              Know More
            </Link>
          </button>
          <button className="text-white rounded-sm w-full sm:w-auto max-w-xs mt-4 px-6 py-3 bg-teal-400  tracking-wider hover:bg-teal-800 transition-all duration-200">
            <Link href="/contact-us" className="p-2 font-semibold">
              Book An Appointment
            </Link>
          </button>
        </m.div>
       
      </div> 

      <m.div variants={item} initial="hidden" animate="show" exit="hidden" className={` md:w-5/12 w-full grow h-[320px]   md:h-[420px] shadow-sm  rounded-tl-full px-2 md:px-0 relative z-[2]`}>
        <Image
          src={heroImage}
          width={640}
          height={480}
          alt=""
          className="w-full h-full object-cover object-right rounded-md "
        />
        {/*  */}
        {/* <div className="bg-[url('../public/polka-dots.svg')]  absolute w-16 h-16 -left-6 -bottom-5 z-[-1] "></div> */}
        <div className="bg-[url('../public/polka-dots.svg')] absolute w-full -bottom-14 lg:-right-14 -top-14 z-[-1]"></div>
      </m.div></>:""}
    </m.div>
    </AnimatePresence>
    </Container>
  );
};

export default Introduction;
