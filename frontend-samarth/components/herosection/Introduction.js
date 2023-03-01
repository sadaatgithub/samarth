import { FaCheckCircle } from "react-icons/fa";
import heroImage from "../../public/slide1.jpg";
import Image from "next/image";
import Link from "next/link";
import Underline from "../headings/Underline";

const Introduction = () => {
// from-blue-900  to-teal-600
  return (
    <div
      className="intro-div  bg-gradient-to-tl from-blue-900  to-emerald-600
       min-h-screen flex-col md:flex-row  flex justify-center items-center  lg:p-14 md:gap-10"
    >
      <div className="flex flex-col relative gap-4 w-full md:w-4/6 py-20  md:py-10 px-6 lg:px-0 justify-center items-center text-center md:text-left  md:items-start ">
        <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold text-white z-[1] drop-shadow-xl">
          Welcome to<br className="hidden md:block" />  Samarth Physiotherapy & 
          Rehabilitition clinic
        </h1>
        <div className="w-2/3  flex justify-center">
        <Underline/>
        </div>
        <h2 className="text-xl  font-medium mt-4 text-white md:w-11/12 first-letter:text-2xl">
          We care about you and your health and will do everything we can to
          ensure your treatment and recovery is successful.
        </h2>
        <p className="text-lg text-white mt-4 md:w-11/12">
          Samarth Physio is a leading provider of physiotherapy services in the
          community. Our mission is to help patients of all ages and abilities
          regain their health and mobility through expert care and personalized
          attention.
        </p>

        

        <p className="hidden text-xl text-teal-500 font-bold mt-6">
          Our Features
        </p>
        <ul className="hidden text-lg text-slate-700 z-[1]  flex-col gap-2 font-medium [&>li]:flex [&>li]:gap-4 [&>li]:items-center [&>li>svg]:text-teal-500 text-left">
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

       
        <div className="flex gap-4 mt-6">
          <button className="text-teal-600 shadow-md rounded-sm px-6 py-3 bg-white hover:bg-gray-100 transition-all duration-100">
            <Link href="/about" className="p-2 font-semibold">
              Know More
            </Link>
          </button>
        </div>
       
      </div>

      <div className="md:w-2/6 w-full bg-cover bg-center grow h-80  md:h-[370px] shadow-sm  rounded-tl-full px-2 md:px-0 relative z-[2]">
        <Image
          src={heroImage}
          width={640}
          height={480}
          alt=""
          className="w-full h-full object-cover object-right  shadow-xl "
        />
        {/* <div className="bg-[url('../public/polka-dots.svg')]  absolute w-16 h-16 -left-6 -bottom-5 z-[-1] "></div> */}
        <div className="bg-teal-300/20  absolute w-24 h-24 -left-6 -top-5 z-[-1] "></div>
      </div>
    </div>
  );
};

export default Introduction;
