import {FaArrowAltCircleRight } from "react-icons/fa";
import heroImage from "../../public/physio3.jpg";
import Image from "next/image";
import Link from "next/link";
import Underline from "../headings/Underline";
import Container from "../container/Container";
import {motion as m,AnimatePresence } from "framer-motion"
import { fadeIn, textContainer, textVariant } from "../../lib/Animation";
import BookAppointement from "../buttons/BookAppointement";


const Introduction = () => {

 
  return (
    <Container bg="">
    <m.div  variants={textContainer} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}
      className="lg:mt-48 mt-8 intro-div  bg-white 
       min-h-screen flex-col-reverse md:flex-row  flex justify-center items-center gap-16 md:gap-20"
    >
       
     <div 
       className={` flex flex-col relative w-full md:w-7/12 justify-center text-left  md:items-start `}>
        <m.p variants={textVariant(0)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className={` font-semibold text-rose-500`}>Welcome to</m.p>
        <m.h2 variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className={` text-3xl md:text-5xl font-bold text-sky-900 mt-4`}>
          Samarth Physiotherapy & 
          Rehab Care Unit
        </m.h2>
        <m.div variants={textVariant(0.2)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="w-2/3  justify-center">
        <Underline/>
        </m.div>
        <m.p variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="text-lg mt-6  text-sky-800 md:w-11/12 first-letter:text-2xl">
          We care about you and your health and will do everything we can to
          ensure your treatment and recovery is successful.Samarth Physio is a leading provider of physiotherapy services in the
          community. Our mission is to help patients of all ages and abilities
          regain their health and mobility through expert care and personalized
          attention.
        </m.p>
      

        

        <m.p variants={textVariant(0.4)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="text-xl text-sky-900 font-semibold mt-8">
          Our Features
        </m.p>
        <m.div variants={textVariant(0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="flex md:gap-6 flex-col md:flex-row">
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

       
        <m.div variants={textVariant(0.6)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="flex flex-col sm:flex-row gap-4 mt-12 [&>button]:uppercase  items-center sm:items-start justify-start w-full">
        <Link href="/about" className="font-semibold w-full sm:w-auto max-w-xs ">
          
          <button className="text-teal-600 w-full  rounded-sm px-6 py-3 tracking-wider  border border-teal-800 bg-white  hover:text-white  hover:bg-teal-800 transition-all duration-300">
              Know More
          </button>
          </Link>
          <BookAppointement title="Book An Appointment"/>
        </m.div>
       
      </div> 

      <m.div variants={fadeIn('up','tween',0.2,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className={` md:w-5/12 w-full grow h-[320px]   md:h-[420px] shadow-sm  rounded-tl-full px-2 md:px-0 relative z-[2]`}>
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
      </m.div>
    </m.div>
    </Container>
  );
};

export default Introduction;
