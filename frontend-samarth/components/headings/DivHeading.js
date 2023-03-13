
import { motion as m } from "framer-motion"
import  {fadeIn}  from "../../lib/Animation"


// variants={slideIn('up','tween',0.2,0.5)} initial="hidden" whileInView="show" viewport={{once:false, amount:0.1}} 

const DivHeading = ({title}) => {
  return (
  <m.div variants={fadeIn('up','tween',0.2,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.1}}  className="flex flex-col gap-4 items-center z-[1]">
  <h2  className="text-3xl md:text-5xl text-slate-600 font-semibold">{title}</h2>
  <div className="w-1/2 h-[4px] bg-teal-400 mt-auto mb-1 rounded-lg"></div>
  {/* <Underline/> */}
   </m.div>
  )
}

export default DivHeading