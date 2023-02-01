import OurServiceSlider from "../services/OurServiceSlider"



const OurServices = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-20 md:mt-12 px-2 justify-center items-center">
      <p className="mt-20 text-rose-500 font-semibold">OUR SERVICES</p>

        <h2 className="text-2xl lg:text-5xl text-slate-700 font-semibold mt-3">What We Are Offering</h2>

      
       <OurServiceSlider/>
       

    </div>
  )
}

export default OurServices