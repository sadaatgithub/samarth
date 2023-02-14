import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

import Slide1 from "../../public/banner1.jpg"
import Slide2 from "../../public/banner2.jpg"
import Slide3 from "../../public/banner3.jpg"

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Autoplay, Lazy,Pagination } from "swiper";
import HeroBanner from "./HeroBanner";
import SwiperButtonRight from "../buttons/SwiperButtonRight";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft";
import Link from "next/link";


const data = [
    { image: Slide1, desc: " Best physiotherapy service you can get in Nagpur " },
    { image: Slide2, desc: "Regain Your Mobility with Expert Physiotherapy" },
    { image: Slide3, desc: "Say Goodbye to Pain with Personalized Treatment Plans" },
  ];



const HeroSlider = () => {
  return (
    <> <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        lazy={true}
        modules={[EffectFade, Navigation,Autoplay, Lazy,Pagination]}
        className="mySwiper  h-[60vh] sm:h-[80vh] lg:h-[600px] group"
        style={{
          "--swiper-navigation-color": "#fff",
          // "--swiper-pagination-color": "#fff",
        }}
      >
        {data.map((slide,index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className="relative after:content-[''] after:absolute object-cover h-full
        after:inset-0 after:bg-teal-900/60"
                >
                  <Image
                    src={slide.image}
                    alt=""
                    width="1200"
                    height="780"
                    className="w-full h-full object-cover object-top  swiper-lazy"
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  <div
                    className={`${
                      isActive
                        ? "-translate-y-1/2 opacity-100 delay-300 duration-500 active"
                        : "duration-200 opacity-0"
                    }  w-full absolute left-1/2 -translate-x-1/2  top-[40%] z-10 md:w-3/4   lg:w-2/3
                text-white   flex justify-center items-center flex-col  overflow-hidden transition-all  ease-linear`}
                  >
                    <p className="text-xl text-gray-100 rounded-md sm:text-3xl lg:text-5xl font-bold text-center tracking-wide drop-shadow-xl shadow-teal-300 p-8">
                      {/* <span className="text-teal-400">&ldquo;</span> */}
                      {slide.desc} 
                      {/* <span className="text-teal-400">&rdquo;</span> */}
                    </p>
                    
                  </div>
                 <Link href="/contact-us"><button  className={`${
                      isActive
                        ? "lg:bottom-[30%] bottom-1/4 opacity-100  duration-500 active delay-700"
                        : "duration-200 opacity-0 bottom-[10%]"
                    }  absolute left-1/2 -translate-x-1/2   z-10
                text-white p-2 md:py-4 md:px-8 border-2 rounded-sm  flex justify-center items-center flex-col gap-y-6 md:gap-y-12 overflow-hidden transition-all  ease-linear`}>Start Your Recovery
                </button></Link>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <SwiperButtonRight/>
        <SwiperButtonLeft/>
      </Swiper>
      </div>
    </>
  )
}

export default HeroSlider