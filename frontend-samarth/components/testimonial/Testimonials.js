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

import Slide1 from "../../public/slide1.jpg"
import Slide2 from "../../public/slide2.jpg"
import Slide3 from "../../public/slide3.jpg"


const testimonial = [
  {
    id: 1,
    patient: "John doe",
    designation: "",
    desc: `I was skeptical about physiotherapy at first, but after just a few sessions with the team at Samarth Physio, I am completely pain-free and back to my active lifestyle. I can't thank them enough for their expertise and personalized care.`,
    image:Slide1
  },
  {
    id: 2,
    patient: "Jane Smith",
    designation: "",
    desc: `After a serious sports injury, I was having trouble regaining my strength and mobility. The therapists at Samarth Physio helped me develop a tailored treatment plan and now I am stronger and more flexible than ever. Highly recommend!`,
    image:Slide2
  },
  {
    id: 3,
    patient: "David Lee",
    designation: "",
    desc: `I was struggling with chronic back pain for years and had tried every treatment under the sun with no relief. The physiotherapists at Samarth Physio took the time to understand my condition and develop a plan that worked for me. I can finally say goodbye to pain!`,
    image:Slide3
  },
  {
    id: 4,
    patient: "Sarah Johnson",
    designation: "",
    desc: `I was nervous about undergoing physiotherapy after a recent surgery, but the team at Samarth Physio put me at ease from the moment I walked in the door. Their evidence-based techniques and personalized attention have made all the difference in my recovery.`,
    image:Slide2
  },
  {
    id: 5,
    patient: "Michel Brown",
    designation: "",
    desc: `I have been seeing the therapists at Samarth Physio for several months now and have noticed a huge improvement in my overall well-being. Their holistic approach to physiotherapy has not only helped me heal from my injuries, but has also made me stronger and more resilient.`,
    image:Slide1
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-20">
      <div className="w-full lg:px-10 xl:px-20 px-2 flex flex-col items-center ">
        <DivHeading title="What Our Patients Says" />
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
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper testimonial-div bg-[url('../public/slide2.jpg')] bg-fixed w-full h-fit flex mt-8 md:mt-16  bg-center after:content-[''] after:absolute after:inset-0
         after:bg-gradient-to-r after:from-slate-800/80 after:to-slate-800/80 group"
      >
        {testimonial.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="p-2  lg:p-8  w-full h-full flex flex-col justify-center"
            >
              <div
                className="relative flex h-full m-auto flex-col-reverse  max-w-4xl rounded-xl  p-2 py-12 justify-center
                            items-center gap-4 md:gap-8"
              >
                <div className="flex flex-col  text-white w-full px-4">
                  <div className="px-2 text-base md:text-xl text-center flex gap-2  relative">
                    <span className="font-serif text-7xl  absolute -top-5 -left-5 ">
                      &ldquo;
                    </span>

                    <p className="self-center md:leading-8 text-gray-100 font-light px-4">
                      {data.desc} Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Eius, sed!
                    </p>
                    <span className="font-serif text-7xl  flex flex-col absolute -bottom-10 right-0">
                      &rdquo;
                    </span>
                  </div>
                  <h4 className="text-xl px-2 font-medium mt-12 self-center">
                    - {data.patient}
                  </h4>
                  <p className="text-sm px-2 self-center text-slate-300">
                    {data.designation}
                  </p>
                </div>
                <Image 
                  src={data.image}
                  alt={data.patient}
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperButtonLeft />
        <SwiperButtonRight />
      </Swiper>
    </div>
  );
};

export default Testimonials;
