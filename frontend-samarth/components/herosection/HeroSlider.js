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

import { EffectFade, Navigation, Autoplay, Lazy } from "swiper";
import HeroBanner from "./HeroBanner";
import SwiperButtonRight from "../buttons/SwiperButtonRight";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft";


const data = [
    { image: Slide1, desc: " Best Physiotherapy service you can get in Nagpur " },
    { image: Slide2, desc: " Expert Care for Your Pain and Injuries" },
    { image: Slide3, desc: " Transform Your Health and Well-Being with Us " },
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
        modules={[EffectFade, Navigation, Autoplay, Lazy]}
        className="mySwiper  h-[50vh] sm:h-[400px] lg:h-[600px] group"
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
        after:inset-0 after:bg-teal-900/70"
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
                        ? "-translate-y-12  opacity-100 delay-500 duration-500 active"
                        : "duration-200 opacity-0"
                    }  w-full absolute z-10 rounded-sm left-1/2 top-[40%] translate-x-[-50%]  md:w-2/3 
                text-white  p-5  flex justify-center items-center flex-col gap-y-6 md:gap-y-12 overflow-hidden transition-all  ease-linear`}
                  >
                    <p className="text-xl sm:text-4xl md:text-5xl font-bold text-center font-serif tracking-wide drop-shadow-2xl ">
                      <span className="text-teal-400">&ldquo;</span>{slide.desc} <span className="text-teal-400">&rdquo;</span>
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}
        <SwiperButtonRight/>
        <SwiperButtonLeft/>
      </Swiper>
        <HeroBanner/>
      </div>
    </>
  )
}

export default HeroSlider