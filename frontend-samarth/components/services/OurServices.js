import OurServiceSlider from "../services/OurServiceSlider"



const OurServices = () => {
  return (
    <div className="min-h-screen flex flex-col lg:px-20 md:mt-12 px-2 justify-center items-center">
      {/* <p className="mt-20 text-rose-500 font-semibold">OUR SERVICES</p> */}

        <div className="mt-20  self-start flex gap-3">
           <h2 className="text-2xl lg:text-4xl text-slate-700 font-semibold drop-shadow-md">Our Services</h2>
           <div className="w-12 h-[3px] bg-rose-500 mt-auto mb-1 rounded-lg"></div>
            </div>

      
       <OurServiceSlider/>
       

    </div>
  )
}

export default OurServices