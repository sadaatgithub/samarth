"use client"
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiClinic } from "react-icons/bi";
import { TbPhysotherapist } from "react-icons/tb";
import { motion as m} from "framer-motion"
import { fadeIn } from "../../lib/Animation";

const HeroBanner = () => {

  // const ref = useRef(null)
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold:0.1,
  // });
  return (
    <>
   
        <div   className="static lg:absolute  -bottom-[250px] left-0 z-[20]  md:flex-row  flex-col px-2  flex w-full [&>div>svg]:text-5xl [&>div]:max-w-xl items-center lg:items-start
md:[&>div>svg]:text-5xl [&>div]:items-center  [&>div]:p-8 lg:gap-10 [&>div]:text-center [&>div>svg]:text-white [&>div>h3]:text-xl [&>div>h3]:mt-4
md:[&>div>h3]:text-2xl  [&>div>h3]:font-semibold [&>div>h3]:text-slate-600 [&>div>p]:text-gray-500 [&>div>p]:font-normal lg:px-12 [&>div>p]:mt-4 text-justify lg:[&>div]:w-1/3">
        
        <m.div variants={fadeIn('up','spring',0.2,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.1}}
        
        className={`flex flex-col  lg:self-stretch mt-6 lg:mt-0 bg-white rounded-xl lg:shadow-2xl lg:shadow-teal-100/70 group `}>
          <MdOutlineHealthAndSafety className="bg-emerald-500 rounded-full p-2 font-thin shadow-lg shadow-teal-100 group-hover:-translate-y-2 transition-all duration-500" />
          <h3>Health Guarantee</h3>
          <p className="">
            Your health and well-being are our top priority, and we guarantee to
            provide the highest quality care and personalized attention to help
            you achieve optimal physical health and wellness.
          </p>
        </m.div>
        
        <m.div variants={fadeIn('up','spring',0.4,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.1}}   className={` flex flex-col bg-white  rounded-xl lg:shadow-2xl lg:shadow-teal-100/70 lg:self-stretch group `}>
          <BiClinic className="bg-rose-500 rounded-full p-2 font-thin shadow-rose-100 shadow-lg group-hover:-translate-y-2 transition-all duration-500 "/>
          <h3>Trusted Clinic</h3>
          <p className="">
            Samartha Physio is a trusted clinic with a team of experienced
            physiotherapists dedicated to providing personalized care and
            effective solutions for your physical health and wellness needs.
          </p>
        </m.div>
        <m.div variants={fadeIn('up','spring',0.6,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.1}}  className={` flex flex-col bg-white rounded-xl lg:shadow-2xl lg:shadow-teal-100/70 lg:self-stretch group `}>
          <TbPhysotherapist className="bg-sky-900 rounded-full p-2 font-thin shadow-sky-100 shadow-lg group-hover:-translate-y-2 transition-all duration-500 "/>
          <h3>Expert Therapist</h3>
          <p className="">
            At Samartha Physio, our team of expert therapists are highly trained
            and specialized in various areas of physiotherapy, ensuring you
            receive the best possible care for your unique needs.
          </p>
        </m.div>
        </div>
    </>
  );
};

export default HeroBanner;
