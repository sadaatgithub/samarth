import Container from "../container/Container"
import DivHeading from "../headings/DivHeading"
import Slide1 from "../../public/slide1.jpg"
import Slide2 from "../../public/slide2.jpg"
import Slide3 from "../../public/slide3.jpg"
import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"


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

const OurServices = () => {
  return (
    <Container bg="bg-gray-50">
    <div id="our-services" className="min-h-screen flex flex-col  justify-center items-center ">

        <DivHeading title="Our Services"/>
        <p className="mt-6 md:text-lg text-gray-500 md:w-3/4 text-center">We provide a wide range of physiotherapy services to help our clients achieve optimal physical health and wellness.
        Our experienced therapists are dedicated to providing personalized care tailored to each patient&apos;s unique needs. Some of the services we offer include</p>

      
       {/* <OurServiceSlider/> */}
       <div className="py-20 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
{services.map((service) =>{
  return(
  <div key={service.id} className="flex flex-col bg-white max-w-sm border hover:shadow-2xl transition-all duration-300">
    <Image src={service.image} width={320} height={240} className="w-full h-60 object-cover"/>
    <div className="px-2 flex flex-col justify-between h-full">
    <div className="flex flex-col gap-y-4  mt-8">
<h4 className="text-3xl text-gray-700">{service.name}</h4>
<p className="text-gray-500">{service.content}</p>
    </div>
    <button className="self-end mr-2 mb-2 text-rose-500 font-semibold "><Link href={`/our-services/${service.name.split(" ").join("-").toLowerCase()}`} className="flex gap-2 items-center">Read More <FaChevronRight className="text-xs"/></Link></button>

    </div>
  </div>
  )
})}
       </div>
       

    </div>
    </Container>
  )
}

export default OurServices