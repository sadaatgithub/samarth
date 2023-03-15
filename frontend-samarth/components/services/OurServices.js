"use client";
import Container from "../container/Container";
import DivHeading from "../headings/DivHeading";
import Slide1 from "../../public/slide1.jpg";
import Slide2 from "../../public/slide2.jpg";
import Slide3 from "../../public/slide3.jpg";
import hydrotherapy from "../../public/hydrotherapy.jpg"
import orthopedic from "../../public/orthopedic.jpg"



import Subheading from "../headings/Subheading";
import EachService from "./EachService";

export const services = [
  {
    id: 1,
    name: "Orthopedic Physiotherapy",
    designation: "Doctor",
    content:
      "Orthopedic physiotherapy helps finding pain relief due to or musculoskeletal conditions in bones or soft tissues - including back pain, neck pain, shoulder pain, knee pain, joint pain...",
    image: orthopedic,
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
    image: hydrotherapy,
  },
  {
    id:5,
    name:"Physiotherapy in Hemophilia",
    content:`
    Physiotherapy in hemophilia is essential for maintaining joint health and preventing joint damage. Hemophilia patients are at a higher risk of
    `,
    image:Slide1,
  }
];

const OurServices = () => {
  return (
    <Container bg="">
      <div
        id="our-services"
        className={`min-h-screen flex flex-col  justify-center items-center bg-[url('../public/knee.svg')] bg-no-repeat  bg-[10%] bg-fixed`}
      >
        <DivHeading title="Our Services" />
        <Subheading
          title="We provide a wide range of physiotherapy services to help our clients achieve optimal physical health and wellness.
        Our experienced therapists are dedicated to providing personalized care tailored to each patient's unique needs. Some of the services we offer include"
        />

        <div
          
          className="py-20 grid md:grid-cols-2  lg:grid-cols-3 xl:gap-12 gap-8"
        >
          {services.map((service, idx) => {
            return <EachService key={service.id} service={service} idx={idx}/>
           
          })}
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
