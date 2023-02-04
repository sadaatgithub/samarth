import Link from "next/link"
import { AiOutlineCaretDown } from "react-icons/ai"
import BookAppointement from "../buttons/BookAppointement"


const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]

const Navlink = ({animateNav}) => {
  return (
    <nav className="flex  w-full lg:px-20 px-6  text-slate-800 font-medium ">
        
        <ul className={` ${animateNav? "justify-end":""}  hidden w-full md:flex gap-8 [&>li]:cursor-pointer [&>li]:py-3 navlink font-semibold [&>li]:relative`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="relative group flex items-center gap-2">Services <AiOutlineCaretDown className="text-sm"/>
            <ul className="group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 opacity-0 top-[40px] invisible absolute left-0 z-[20] bg-white 
          w-[350%] transition-all duration-100 ease-linear flex flex-col shadow-xl overflow-hidden rounded-sm scale-75  group-hover:scale-100 origin-top-left">
              {link.map((services,index) =>(
                <li key={index} className="font-normal border-l-4 border-transparent hover:border-l-4 hover:border-rose-500 p-3 hover:bg-gray-50 transition-all duration-200">
                 <Link href={`/our-services/${services.split(" ").join("-").toLowerCase()}`}> {services}</Link></li>
              ))}
            </ul>
          </li>
          <li><Link href="/blogs-and-articles">Blogs</Link></li>

          <li><Link href="/contact-us">Contact Us</Link></li>
         {/* {animateNav? <li><BookAppointement/></li>:null} */}
        </ul>
      </nav>
  )
}

export default Navlink