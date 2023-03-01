import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import Slide1 from "../../public/slide1.jpg"
import Slide2 from "../../public/slide2.jpg"
import Slide3 from "../../public/slide3.jpg"
import Link from "next/link"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft"
import SwiperButtonRight from "../buttons/SwiperButtonRight"
import { useState } from "react"

export const services = [
  {
    id: 1,
    name: "Orthopedic Physiotherapy",
    designation: "Doctor",
    content:
      "Orthopedic physiotherapy helps finding pain relief due to or musculoskeletal conditions in bones or soft tissues - including back pain, neck pain, shoulder pain, knee pain, joint pain...",
    image: Slide1,
  },
  {
    id: 2,
    name: "Neuro Physiotherapy",
    designation: "Advocate",
    content:
      "Neuro physiotherapy for Stroke, Multiple Sclerosis, Paralysis, Muscular Dystrophy, Bell's Palsy, Parkinson's disease to relearn skills lost due to the damage to their brain, spinal...",
    image: Slide2,
  },
  {
    id: 3,
    name: "Sports Physiotherapy & Fitness",
    designation: "Social worker",
    content:
      "Sports Physiotherapy and fitness services for sports injury, sports rehabilitation and injury prevention. Running marathon, playing football, dancing zumba or aerobics, stay injury...",
    image: Slide3,
  },
  {
    id: 4,
    name: "Hydrotherapy",
    designation: "Advocate",
    content:
      "Hydrotherapy refers to using water as therapy in any form, in this instance we use it for the performing of exercises in water.",
    image: Slide1,
  },
];

const SliderTwo = () => {
const [autoSlider, setAutoSlider] = useState(true)

  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          240:{
            slidesPerView: 1,
            // spaceBetween: 20,
          slidesPerGroup:1,
          },
          420:{
            slidesPerView: 1,
            spaceBetween: 10,
          slidesPerGroup:1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          slidesPerGroup:2,

          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          slidesPerGroup:3,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          slidesPerGroup:3,

          },
        }}
        navigation={false}
        modules={[Pagination]}
        className="mySwiper w-full flex mt-8 md:mt-16 relative overflow-visible group" 
      >
        <SwiperButtonLeft/>
        <SwiperButtonRight pos="attached"/>
        {services.map((data) =>{
          return(
          <SwiperSlide key={data.id} >
            <div className="flex h-full flex-grow flex-col gap-4 border rounded-md overflow-hidden max-w-sm mx-auto bg-white">
              <div className="h-60 overflow-hidden">
            <Image src={data.image} alt="" width="480px" height="320px" className="w-full h-full object-cover"/>
            </div>
            <div className="h-1/2 flex flex-col gap-2 py-6 px-2 mt-1 ">
            <h4 className="text-xl font-semibold px-2 text-slate-700">{data.name} </h4>
            <p className="text-gray-500 px-2">{data.content}</p>
                    <button className="self-end mr-2 mb-2 text-rose-500 font-semibold"><Link href={`/our-services/${data.name.split(" ").join("-").toLowerCase()}`}>Read More</Link></button>
                    </div>
            </div>

          </SwiperSlide>)
        })}
       


      </Swiper>
    </>
    
  )
}

export default SliderTwo