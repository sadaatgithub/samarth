import React from 'react'
import { motion as m } from "framer-motion"
import  {fadeIn}  from "../../lib/Animation"


const Subheading = ({title}) => {
  return (
    <m.p variants={fadeIn('up','tween',0.5,0.5)} initial="hidden" whileInView="show" viewport={{once:true, amount:0.1}} className="mt-6 md:text-lg text-gray-500 md:w-3/4 text-center z-[1]">{title}</m.p>

  )
}

export default Subheading