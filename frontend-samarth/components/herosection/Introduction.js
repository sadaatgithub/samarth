import {FaArrowAltCircleRight } from "react-icons/fa";
import heroImage from "../../public/physio3.jpg";
import Image from "next/image";
import Link from "next/link";
import Underline from "../headings/Underline";

const Introduction = () => {
// from-blue-900  to-teal-600 bg-gradient-to-tl from-blue-900  to-teal-600
  return (
    <div
      className="lg:mt-80 intro-div  bg-white
       min-h-screen flex-col-reverse md:flex-row  flex justify-center items-center  lg:p-14 md:gap-10"
    >
      <div className="flex flex-col relative gap-4 w-full md:w-4/6 py-20  md:py-10 px-6 lg:px-0 justify-center text-left  md:items-start ">
        <h1 className="text-3xl md:text-4xl  lg:text-4xl font-bold text-sky-900 z-[1]">
          Welcome to<br className="hidden md:block" />  Samarth Physiotherapy & 
          Rehabilitation clinic
        </h1>
        <div className="w-2/3  flex justify-center">
        <Underline/>
        </div>
        <h2 className="text-lg  font-medium mt-4 text-sky-800 md:w-11/12 first-letter:text-2xl">
          We care about you and your health and will do everything we can to
          ensure your treatment and recovery is successful.Samarth Physio is a leading provider of physiotherapy services in the
          community. Our mission is to help patients of all ages and abilities
          regain their health and mobility through expert care and personalized
          attention.
        </h2>
      

        

        <p className="text-xl text-teal-700 font-semibold mt-6">
          Our Features
        </p>
        <ul className="text-lg text-slate-500 z-[1]  flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-500 text-left">
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
            Experienced staff
          </li>
        </ul>

       
        <div className="flex gap-4 mt-6">
          <button className="text-teal-500 rounded-sm px-6 py-3 border border-teal-400 bg-white hover:bg-teal-500 hover:text-white shadow-xl transition-all duration-100">
            <Link href="/about" className="p-2 font-semibold">
              Know More
            </Link>
          </button>
          <button className="text-white rounded-sm px-6 py-3 bg-teal-400 hover:bg-teal-500 shadow-xl transition-all duration-100">
            <Link href="/contact-us" className="p-2 font-semibold">
              Contact Us
            </Link>
          </button>
        </div>
       
      </div>

      <div className="md:w-2/6 w-full grow h-80 bg-[url('../public/polka-dots.svg')]  md:h-[370px] shadow-sm  rounded-tl-full px-2 md:px-0 relative z-[2]">
        <Image
          src={heroImage}
          width={640}
          height={480}
          alt=""
          className="w-full h-full object-cover object-right  shadow-xl "
        />
        {/* <div className="bg-[url('../public/polka-dots.svg')]  absolute w-16 h-16 -left-6 -bottom-5 z-[-1] "></div> */}
        <div className="bg-gray-200  absolute w-24 h-24 -left-6 -top-5 z-[-1] shadow-2xl"></div>
      </div>
    </div>
  );
};

export default Introduction;
