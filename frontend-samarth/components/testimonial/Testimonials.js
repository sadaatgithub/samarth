import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa"
import { services } from "../services/OurServiceSlider";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <p className="mt-20 text-rose-500 font-semibold">OUR TESTIMONIALS</p>

        <h2 className="text-2xl lg:text-5xl text-slate-700 font-semibold mt-3">What Our Patients Say</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
      
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper testimonial-div w-full h-fit flex mt-8 md:mt-16  bg-center after:content-[''] after:absolute after:inset-0
         after:bg-gradient-to-r after:from-teal-600 after:to-transparent"
      >
        
        {services.map((data) =>{
          return(
          <SwiperSlide key={data.id} className="p-2  lg:p-8  w-full h-full flex flex-col justify-center backdrop-blur-md">
            <div className="relative flex h-full m-auto flex-col-reverse md:flex-row max-w-4xl rounded-xl  p-2 justify-center
            items-center md:gap-4">
              
              <div className="flex flex-col  text-white mt-6 md:w-2/3 w-full">
              <p className="italic px-2 text-base md:text-2xl">&ldquo;{data.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sed! &rdquo;</p>
              <h4 className="text-xl px-2 font-bold mt-6">{data.name}</h4>
              <p className="text-sm px-2">{data.designation}</p>
              </div>
              <Image src={data.image} alt={data.desc} className="md:w-44 md:h-44 w-20 h-20 object-cover rounded-full"/>
            </div>
            <FaQuoteRight className="self-end mr-4 mt-4 text-gray-50/50 text-6xl"/>


          </SwiperSlide>)
        })}
       
      </Swiper>
    </div>
  )
}

export default Testimonials