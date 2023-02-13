import Link from "next/link";


const About = () => {
  return (
    <div className="md:px-24 flex items-center justify-center flex-col text-center [&>p]:text-slate-500 gap-y-8">
      <h2 className="text-4xl font-bold text-slate-500 mt-16">
        Everything About &nbsp;
        <span className="text-slate-700">
          Samarth <span className="text-teal-500">Physio</span>
        </span>
      </h2>
      

      <p class="mt-10 leading-8 md:px-24 px-4 md:text-lg ">
        
        <strong> Samarth Physio</strong> is a leading provider of physiotherapy services in the
        community. Our mission is to help patients of all ages and abilities
        regain their health and mobility through expert care and personalized
        attention.
      </p>

      <p class="leading-8 md:px-24 px-4 md:text-lg">
      
        Founded by a team of highly skilled and experienced physiotherapists,
        <strong> Samarth Physio</strong> has quickly become known for its state-of-the-art
        facilities, advanced treatments, and compassionate care. Our therapists
        are dedicated to providing the highest quality physiotherapy services to
        our patients and are committed to helping them achieve their best
        possible outcomes.
      </p>

      <p class="leading-8 md:px-24 px-4 md:text-lg">
        
        At <strong> Samarth Physio</strong>, we believe in the power of physiotherapy to transform
        lives. That&apos;s why we use the latest techniques and evidence-based
        methods to deliver effective care that is tailored to each patient&apos;s
        unique needs and goals. From chronic pain to sports injuries, our
        therapists work with patients to develop a comprehensive treatment plan
        that addresses their specific health concerns and helps them regain
        their strength, flexibility, and mobility.
      </p>

      <p class="leading-8 md:px-24 px-4 md:text-lg">
        
        At <strong> Samarth Physio</strong>, we understand the importance of trust and
        transparency in the healthcare industry. That&apos;s why we are committed to
        providing our patients with the highest standards of care, as well as
        the information and support they need to make informed decisions about
        their health.
      </p>

      <p class="leading-8 md:px-24 px-4 md:text-lg">
        
        If you&apos;re looking for a trusted provider of physiotherapy services, look
        no further than <strong> Samarth Physio</strong>. <Link href="/contact-us" className="text-blue-600 font-semibold">Contact us</Link> today to learn more about how
        we can help you transform your life through expert care and personalized
        attention.
      </p>
    </div>
  );
};

export default About;
