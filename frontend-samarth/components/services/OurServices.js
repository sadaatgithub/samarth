import DivHeading from "../headings/DivHeading"
import OurServiceSlider from "../services/OurServiceSlider"



const OurServices = () => {
  return (
    <div id="our-services" className="min-h-screen flex flex-col lg:px-14 md:mt-12 px-2 py-12 justify-center items-center bg-gray-50">

        <DivHeading title="Our Services"/>
        <p className="mt-6 md:text-lg text-gray-500 md:w-3/4 text-center">We provide a wide range of physiotherapy services to help our clients achieve optimal physical health and wellness.
        Our experienced therapists are dedicated to providing personalized care tailored to each patient&apos;s unique needs. Some of the services we offer include</p>

      
       <OurServiceSlider/>
       

    </div>
  )
}

export default OurServices