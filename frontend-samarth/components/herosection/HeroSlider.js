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

const data = [
  {
    image: Slide1,
    desc: " Best physiotherapy service you can get in Nagpur ",
    detail: `Samarth Physio is a well-known physiotherapy center in Nagpur, committed to providing top-notch care to its clients through a team of experienced therapists and state-of-the-art equipment.`,
  },
  {
    image: Slide2,
    desc: "Regain Your Mobility with Expert Physiotherapy",
    detail: `Samarth Physio offers expert physiotherapy services personalized to each patient's specific needs, aiming to achieve optimal physical health and wellness.`,
  },
  {
    image: Slide3,
    desc: "Say Goodbye to Pain with Personalized Treatment Plans",
    detail: `Samarth Physio provides personalised treatment plans tailored to each patient's specific needs to ensure the highest quality care and optimal physical health and wellness.`,
  },
];

const HeroSlider = () => {
  return (
    <>
      {" "}
      <div className="relative">
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
          lazy={true}
          modules={[EffectFade, Navigation, Autoplay, Lazy, Pagination]}
          className="mySwiper  h-screen sm:h-[80vh] md:h-[600px] group"
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
            console.log(firstDesc, secondDesc);

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
                      className={` md:w-2/3 absolute inset-0 z-10 xl:p-20 p-6 md:p-10
                text-white   flex  flex-col md:items-start items-center justify-center md:justify-start`}
                    >
                      <div className="text-xl  text-white  md:mt-6 sm:text-3xl  font-bold shadow-xl ">
                        <p
                          className={`${
                            isActive
                              ? "translate-x-0 opacity-100 duration-1000"
                              : "-translate-x-10 opacity-0 duration-200"
                          } p-4 overflow-hidden bg-white transition-all  ease-in-out text-teal-500 `}
                        >
                          {" "}
                          {firstDesc}{" "}
                        </p>
                      </div>
                      <div className="text-xl text-white font-semibold sm:text-3xl  md:font-bold shadow-xl ">
                        <p
                          className={`${
                            isActive
                              ? "translate-x-0 opacity-100 duration-1000"
                              : "translate-x-10 opacity-0 duration-200"
                          } p-4 overflow-hidden transition-all  ease-in-out text-white bg-teal-500`}
                        >
                          {" "}
                          {secondDesc}
                        </p>
                      </div>
                    <p className={`${isActive? "translate-x-0 opacity-100 transition-all duration-1000 delay-500 ease-in-out":"-translate-x-8 opacity-0"} mt-6 md:text-xl xl:w-2/3 text-center md:text-left`}>{slide.detail}</p>
                    <Link href="/contact-us">
                      <button
                        className={`
                          ${isActive? "translate-x-0 opacity-100 transition-all duration-1000 delay-700 ease-in-out":"-translate-x-8 opacity-0"} 
                text-white p-2 md:py-4 md:px-8 border-2 rounded-sm mt-6 flex justify-center items-center flex-col gap-y-6 md:gap-y-12 overflow-hidden transition-all  ease-linear`}
                      >
                        Start Your Recovery
                      </button>
                    </Link>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            );
          })}
          <SwiperButtonRight />
          <SwiperButtonLeft />
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
