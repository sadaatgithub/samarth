import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Slide1 from "../../public/banner1.jpg";
import Slide2 from "../../public/banner2.jpg";
import Slide3 from "../../public/banner3.jpg";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Autoplay, Lazy, Pagination } from "swiper";
import HeroBanner from "./HeroBanner";
import SwiperButtonRight from "../buttons/SwiperButtonRight";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  {
    image: Slide1,
    desc: " Best physiotherapy service you can get in Nagpur ",
    detail: `We are a well-known physiotherapy center in Nagpur, committed to providing top-notch care to its clients through a team of experienced therapists and state-of-the-art equipment.`,
    href:
      {
        text:"Know More",
        link:"/about"
      }
    
  },
  {
    image: Slide2,
    desc: "Regain Your Mobility with Expert Physiotherapy",
    detail: `We offers expert physiotherapy services personalized to each patient's specific needs, aiming to achieve optimal physical health and wellness.`,
    href:
      {
        text:"Book Now",
        link:"/contact-us"
      }
    
  },
  {
    image: Slide3,
    desc: "Say Goodbye to Pain with Personalized Treatment Plans",
    detail: `We provides personalised treatment plans tailored to each patient's specific needs to ensure the highest quality care and optimal physical health and wellness.`,
    href:
      {
        text:"Our Services",
        link:"#our-services"
      }
    
  },
];

const HeroSlider = () => {
  return (
    <>
      {" "}
      <div
        
        
      
      className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          lazy={false}
          modules={[EffectFade, Navigation, Autoplay, Pagination]}
          className="mySwiper  h-[80vh] md:h-[700px] group"
          style={{
            "--swiper-navigation-color": "#fff",
            // "--swiper-pagination-color": "#fff",
          }}
        >
          {data.map((slide, index) => {
            const desc = slide.desc.split(" ");
            const descLength = desc.length / 2;
            const firstDesc = desc.slice(0, descLength).join(" ");
            const secondDesc = desc.slice(descLength).join(" ");
            return (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className="relative after:content-[''] after:absolute object-cover h-full
        after:inset-0 after:bg-gradient-to-r after:from-teal-700  after:to-transparent "
                  >
                    <Image
                      src={slide.image}
                      alt=""
                      width="1200"
                      height="780"
                      className="w-full h-full object-cover object-top"
                    />
                 
                    <div
                      className={` md:w-2/3 absolute inset-0 z-[1] xl:p-20 p-6 md:p-10
                text-white   flex  flex-col md:items-start items-center justify-center md:justify-start`}
                    >
                      <div className="text-2xl  text-white  md:mt-6 sm:text-4xl  font-bold">
                        <p
                          className={`${
                            isActive
                              ? "translate-x-0  opacity-100 duration-1000"
                              : "-translate-x-10 opacity-0 duration-200 "
                          } px-4 py-2 md:p-4 overflow-hidden bg-white transition-all  ease-in-out  text-teal-500 capitalize `}
                        >
                          {" "}
                          {firstDesc}{" "}
                        </p>
                      </div>
                      <div className="text-2xl text-white font-semibold sm:text-4xl  md:font-bold ">
                        <p
                          className={`${
                            isActive
                              ? "translate-x-0 opacity-100 duration-1000 delay-300"
                              : "translate-x-10 opacity-0 duration-200"
                          } px-4 py-2 md:p-4 overflow-hidden transition-all ease-in-out   text-white bg-teal-500 capitalize`}
                        >
                          {" "}
                          {secondDesc}
                        </p>
                      </div>
                      <p
                        className={`${
                          isActive
                            ? "translate-x-0 opacity-100 transition-all duration-1000 delay-500 "
                            : "-translate-x-8 opacity-0"
                        } mt-6 md:mt-10 md:text-xl xl:w-2/3 text-center  md:text-left text-lg text-white  leading-5`}
                      >
                        {slide.detail}
                      
                      </p>


                      <Link href={slide.href.link}
                          className={`
                          ${
                            isActive
                              ? "translate-x-0 opacity-100 transition-all duration-1000 delay-700 "
                              : "translate-x-8 opacity-0"
                          } 
                text-white  rounded-sm w-full sm:w-auto mt-8 md:mt-10 font-semibold flex  flex-col justify-center items-center gap-y-6 md:gap-y-12 overflow-hidden transition-all  ease-in-out tracking-wider`}
                        >
                        <button className="w-full max-w-xs sm:w-auto py-3 px-6 bg-slate-800 hover:bg-white hover:text-slate-800 transition-all duration-300">
                         {slide.href.text}
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-20 group-hover:right-2 transition-all duration-150 ease-in-out">

          <SwiperButtonRight />

          </div>
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-20 group-hover:left-2 transition-all duration-150 ease-in-out">
          <SwiperButtonLeft />
          </div>
          
        </Swiper>

        <HeroBanner/>
      </div>
    </>
  );
};

export default HeroSlider;
