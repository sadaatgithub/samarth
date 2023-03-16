import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import SwiperButtonLeft from "../buttons/SwiperButtonLeft";
import SwiperButtonRight from "../buttons/SwiperButtonRight";
import DivHeading from "../headings/DivHeading";
import {FaStar} from "react-icons/fa"
import Slide1 from "../../public/slide1.jpg"
import Slide2 from "../../public/slide2.jpg"
import Slide3 from "../../public/slide3.jpg"
import Container from "../container/Container";
import Subheading from "../headings/Subheading";
import { motion as m } from "framer-motion";
import { fadeIn } from "../../lib/Animation";
// bg-[url('../public/slide2.jpg')] bg-fixed after:content-[''] after:absolute after:inset-0
        //  after:bg-gradient-to-r after:from-slate-800/80 after:to-slate-800/80 
const testimonial = [
  {
    id: 1,
    patient: "John doe",
    designation: "Cricketer",
    desc: `I was skeptical about physiotherapy at first, but after just a few sessions with the team at Samarth Physio, I am completely pain-free and back to my active lifestyle. I can't thank them enough for their expertise and personalized care.`,
    image:Slide1
  },
  {
    id: 2,
    patient: "Jane Smith",
    designation: "Architect",
    desc: `After a serious sports injury, I was having trouble regaining my strength and mobility. The therapists at Samarth Physio helped me develop a tailored treatment plan and now I am stronger and more flexible than ever. Highly recommend!`,
    image:Slide2
  },
  {
    id: 3,
    patient: "David Lee",
    designation: "Athelete",
    desc: `I was struggling with chronic back pain for years and had tried every treatment under the sun with no relief. The physiotherapists at Samarth Physio took the time to understand my condition and develop a plan that worked for me. I can finally say goodbye to pain!`,
    image:Slide3
  },
  {
    id: 4,
    patient: "Sarah Johnson",
    designation: "CA",
    desc: `I was nervous about undergoing physiotherapy after a recent surgery, but the team at Samarth Physio put me at ease from the moment I walked in the door. Their evidence-based techniques and personalized attention have made all the difference in my recovery.`,
    image:Slide2
  },
  {
    id: 5,
    patient: "Michel Brown",
    designation: "Shop Keeper",
    desc: `I have been seeing the therapists at Samarth Physio for several months now and have noticed a huge improvement in my overall well-being. Their holistic approach to physiotherapy has not only helped me heal from my injuries, but has also made me stronger and more resilient.`,
    image:Slide1
  },
];
// bgpattern.svg

const Testimonials = () => {
  return ( 
    <Container bg="bg-gray-50">
    <div className="flex flex-col justify-center items-center">
      <div className="w-full lg:px-10 xl:px-20 px-2 flex flex-col items-center ">
        <DivHeading title="What Our Patients Says" />
<Subheading title="Expert Care and Personalized Attention: Our Clients Share Their Experiences"/>

      </div>
  <m.div variants={fadeIn("up", "tween", 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}  className="">
      <Swiper  
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={2}
        loop={true}
        lazy={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={false}
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
            slidesPerView: 1,
            spaceBetween: 30,
          slidesPerGroup:1,

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          slidesPerGroup:2,

          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          slidesPerGroup:3,

          },
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper  w-full h-ful relative   mt-8 md:mt-20 gap-8  group  grid grid-cols-1 group"
      >
        {testimonial.map((data,idx) => {
          return (
            <SwiperSlide 
              key={data.id}
              className="w-full flex flex-col p-8  rounded-md shadow-sm bg-white"
            >
             
                <div className="flex flex-col   w-full gap-8 ">
                  <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  <div className="text-center flex gap-2  relative">
                   

                    <p className="text-left text-gray-700">
                      {data.desc} 
                    </p>
                  
                  </div>

                  <div className="flex items-center  gap-4">
                  <Image 
                  src={data.image}
                  alt={data.patient}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-medium text-gray-900">
                     {data.patient}
                  </p>
                  <p className="text-gray-500">
                    {data.designation}
                  </p>
                  </div>
                  </div>
                </div>
               
            </SwiperSlide>
          );
        })}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-20 group-hover:left-2 transition-all duration-200 ease-linear">
        <SwiperButtonLeft />
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-20 group-hover:right-2 transition-all duration-200 ease-linear">
        <SwiperButtonRight />
        </div>
      </Swiper>
      </m.div>
    </div>
    </Container>
  );
};
// bg-[url('../public/flipped-diamonds.svg')]

export default Testimonials;
