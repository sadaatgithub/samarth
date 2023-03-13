import Image from "next/image";
import aboutImage from "../../public/slide1.jpg"
import { motion as m } from "framer-motion";
import { fadeIn ,textContainer,textVariant} from "../../lib/Animation";

const About = () => {
  return (
    <section className="md:px-24 flex items-center justify-center flex-col text-center [&>p]:text-slate-500 gap-y-8 px-4">
      <m.h2 variants={fadeIn('up','tween',0.2,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}
       className="text-4xl font-bold text-slate-500 mt-16">
        About &nbsp;
        <span className="text-slate-700">
          Samarth <span className="text-teal-500">Physio</span>
        </span>
      </m.h2>
      
      <m.div variants={textContainer} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}} className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center text-left mt-16">
      <div className="[&>p]:text-lg">
        <m.h3 variants={textVariant(0.1)} className="text-2xl font-bold  text-slate-600">Our History</m.h3>
        <m.p variants={textVariant(0.2)} className="text-gray-500 text-lg   mb-4 mt-6">XYZ Physiotherapy was founded in 2010 by Dr. Jane Smith, a highly experienced physiotherapist with over 20 years of experience in the field. Dr. Smith saw the need for a physiotherapy practice that provided personalized care in a comfortable and supportive environment, and she set out to create a place where patients could receive the highest quality of care.</m.p>
        <m.p variants={textVariant(0.3)} className="text-gray-500 text-lg">Since our founding, we have helped thousands of patients overcome injuries and conditions that limit their mobility and quality of life. Our team of skilled therapists is committed to providing personalized care to each patient, using the latest techniques and technology to help them achieve their goals.</m.p>
      </div>
      <m.div variants={fadeIn('up','tween',0.2,0.5)}>
        <Image src={aboutImage} width={500} height={300} alt="Our Company" className="rounded-lg"/>
      </m.div>
    </m.div>
    <m.div variants={textContainer} initial="hidden" whileInView="show" viewport={{once:true, amount:0.3}}  className="mt-12 text-left [&>p]:text-lg">
      <m.h3 variants={textVariant(0.1)} className="text-2xl font-bold text-slate-600">Our Mission</m.h3>
      <m.p variants={textVariant(0.2)} className="text-gray-500 leading-relaxed mt-6">At XYZ Physiotherapy, our mission is to help our patients regain their strength, mobility, and confidence. We believe that every patient is unique, and we work with them to develop personalized treatment plans that address their specific needs and goals. We strive to provide a comfortable and supportive environment where patients can feel empowered to take an active role in their own recovery.</m.p>
      <m.p variants={textVariant(0.3)} className="text-gray-500 leading-relaxed mt-6">We are committed to staying up-to-date with the latest advancements in physiotherapy, and we are dedicated to providing the highest quality of care to each and every patient. Our goal is to help our patients achieve long-lasting results and a better quality of life.</m.p>
    </m.div>





      
    </section>
  );
};

export default About;
