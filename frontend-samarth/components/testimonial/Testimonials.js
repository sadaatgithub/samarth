import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import { services } from "../services/OurServiceSlider";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft";
import SwiperButtonRight from "../buttons/SwiperButtonRight";
import DivHeading from "../headings/DivHeading";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      {/* <p className="mt-20 text-rose-500 font-semibold">OUR TESTIMONIALS</p> */}
<div className="w-full md:px-20 px-2">
<DivHeading title="What Our Patients Says"/>
</div>
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
      
        navigation={false}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper testimonial-div bg-[url('../public/slide2.jpg')] bg-fixed w-full h-fit flex mt-8 md:mt-16  bg-center after:content-[''] after:absolute after:inset-0
         after:bg-gradient-to-r after:from-slate-800/80 after:to-slate-800/80 group"
      >
        
        {services.map((data) =>{
          return(
          <SwiperSlide key={data.id} className="p-2  lg:p-8  w-full h-full flex flex-col justify-center">
           
            <div className="relative flex h-full m-auto flex-col-reverse  max-w-4xl rounded-xl  p-2 py-12 justify-center
                            items-center gap-4 md:gap-8">
              
              <div className="flex flex-col  text-white w-full px-4">
              <div className="px-2 text-base md:text-xl text-center flex gap-2  relative">
                <span className="font-serif text-7xl  absolute -top-5 -left-5 ">&ldquo;</span>

                  <p className="self-center md:leading-8 text-gray-100 font-light px-4">{data.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sed!</p>
                    <span className="font-serif text-7xl  flex flex-col absolute -bottom-10 right-0">&rdquo;</span>
            </div>
              <h4 className="text-xl px-2 font-medium mt-12 self-center">- {data.name}</h4>
              <p className="text-sm px-2 self-center text-slate-300">{data.designation}</p>
              </div>
              <Image src={data.image} alt={data.name} className="w-20 h-20 object-cover rounded-full"/>
            </div>


          </SwiperSlide>)
        })}
       <SwiperButtonLeft/>
       <SwiperButtonRight/>
      </Swiper>
    </div>
  )
}

export default Testimonials