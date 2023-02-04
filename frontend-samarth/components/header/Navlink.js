import Link from "next/link"
import { AiOutlineCaretDown } from "react-icons/ai"
import BookAppointement from "../buttons/BookAppointement"


export const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]

export const menuLink = [
  {
    id:1,
    title:"Home",
    href:"/"
  },
  {
    id:2,
    title:"About Us",
    href:"/about"
  },
  {
    id:3,
    title:"Services",
    href:" ",
    sublink:link,
  },
  {
    id:4,
    title:"Blogs",
    href:"/blogs-and-articles"
  },
  {
    id:5,
    title:"Contact Us",
    href:"/contact-us"
  }

]

const Navlink = ({visible}) => {
  return (
    <nav className="flex flex-grow  w-full lg:px-20 px-6  text-slate-600 font-medium ">
        
        <ul className={` ${visible? "justify-end":""}  hidden w-full md:flex gap-8 [&>li]:cursor-pointer items-center navlink font-semibold [&>li]:relative`}>
          {menuLink.map(link => {
            const isSublink = typeof link.sublink === "object"
            
            return( 
            <li key={link.id} className={`${isSublink? "relative group flex":""} flex `}>
              <Link href={link.href} className={`${isSublink? "w-full flex gap-2":""} py-3`}>{link.title} {isSublink? <AiOutlineCaretDown className="text-sm self-center"/>:""}
              </Link>
              {isSublink? <>
              <ul className="group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 opacity-0 top-[40px] invisible absolute left-0 z-[20] bg-white 
          w-[350%] transition-all duration-100 ease-linear flex flex-col shadow-xl overflow-hidden rounded-sm scale-75  group-hover:scale-100 origin-top-left">
             
             {link.sublink.map((sublink,index) =>{
              return(<li key={index} className="font-normal border-l-4 border-transparent hover:border-l-4 hover:border-rose-500 p-3 hover:bg-gray-50 transition-all duration-200">
              <Link href={`/our-services/${sublink.split(" ").join("-").toLowerCase()}`} className="py-3"> {sublink}</Link></li>)
             })}
             
             
            </ul>
              </>:""}
              </li>
            )
          })}
          
          
        
        </ul>
      </nav>
  )
}

export default Navlink