import DivHeading from "../headings/DivHeading"
import OurServiceSlider from "../services/OurServiceSlider"



const OurServices = () => {
  return (
    <div id="our-services" className="min-h-screen flex flex-col lg:px-10 xl:px-20 md:mt-12 px-2 justify-center items-center">

        <DivHeading title="Our Services"/>

      
       <OurServiceSlider/>
       

    </div>
  )
}

export default OurServices