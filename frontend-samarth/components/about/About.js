import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../public/slide1.jpg"

const About = () => {
  return (
    <section className="md:px-24 flex items-center justify-center flex-col text-center [&>p]:text-slate-500 gap-y-8">
      <h2 className="text-4xl font-bold text-slate-500 mt-16">
        Everything About &nbsp;
        <span className="text-slate-700">
          Samarth <span className="text-teal-500">Physio</span>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center text-left mt-16">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-slate-600">Our History</h3>
        <p className="text-gray-600 leading-relaxed mb-4">XYZ Physiotherapy was founded in 2010 by Dr. Jane Smith, a highly experienced physiotherapist with over 20 years of experience in the field. Dr. Smith saw the need for a physiotherapy practice that provided personalized care in a comfortable and supportive environment, and she set out to create a place where patients could receive the highest quality of care.</p>
        <p className="text-gray-600 leading-relaxed mb-4">Since our founding, we have helped thousands of patients overcome injuries and conditions that limit their mobility and quality of life. Our team of skilled therapists is committed to providing personalized care to each patient, using the latest techniques and technology to help them achieve their goals.</p>
      </div>
      <div>
        <Image src={aboutImage} width={500} height={300} alt="Our Company" className="rounded-lg"/>
      </div>
    </div>
    <div className="mt-12 text-left">
      <h3 className="text-2xl font-bold mb-4 text-slate-600">Our Mission</h3>
      <p className="text-gray-600 leading-relaxed mb-4">At XYZ Physiotherapy, our mission is to help our patients regain their strength, mobility, and confidence. We believe that every patient is unique, and we work with them to develop personalized treatment plans that address their specific needs and goals. We strive to provide a comfortable and supportive environment where patients can feel empowered to take an active role in their own recovery.</p>
      <p className="text-gray-600 leading-relaxed mb-4">We are committed to staying up-to-date with the latest advancements in physiotherapy, and we are dedicated to providing the highest quality of care to each and every patient. Our goal is to help our patients achieve long-lasting results and a better quality of life.</p>
    </div>





      {/* <p className="mt-10 leading-8 md:px-24 px-4 md:text-lg ">
        
        <strong> Samarth Physio</strong> is a leading provider of physiotherapy services in the
        community. Our mission is to help patients of all ages and abilities
        regain their health and mobility through expert care and personalized
        attention.
      </p>

      <p className="leading-8 md:px-24 px-4 md:text-lg">
      
        Founded by a team of highly skilled and experienced physiotherapists,
        <strong> Samarth Physio</strong> has quickly become known for its state-of-the-art
        facilities, advanced treatments, and compassionate care. Our therapists
        are dedicated to providing the highest quality physiotherapy services to
        our patients and are committed to helping them achieve their best
        possible outcomes.
      </p>

      <p className="leading-8 md:px-24 px-4 md:text-lg">
        
        At <strong> Samarth Physio</strong>, we believe in the power of physiotherapy to transform
        lives. That&apos;s why we use the latest techniques and evidence-based
        methods to deliver effective care that is tailored to each patient&apos;s
        unique needs and goals. From chronic pain to sports injuries, our
        therapists work with patients to develop a comprehensive treatment plan
        that addresses their specific health concerns and helps them regain
        their strength, flexibility, and mobility.
      </p>

      <p className="leading-8 md:px-24 px-4 md:text-lg">
        
        At <strong> Samarth Physio</strong>, we understand the importance of trust and
        transparency in the healthcare industry. That&apos;s why we are committed to
        providing our patients with the highest standards of care, as well as
        the information and support they need to make informed decisions about
        their health.
      </p>

      <p className="leading-8 md:px-24 px-4 md:text-lg">
        
        If you&apos;re looking for a trusted provider of physiotherapy services, look
        no further than <strong> Samarth Physio</strong>. <Link href="/contact-us" className="text-blue-600 font-semibold">Contact us</Link> today to learn more about how
        we can help you transform your life through expert care and personalized
        attention.
      </p> */}
    </section>
  );
};

export default About;
