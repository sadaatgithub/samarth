import { menuLink } from "./Navlink"
import Link from "next/link"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"


const MobileMenu = ({setBurgerMenu,menuState})=>{

    const [mobileSubmenuOpen,setMobileSubmenuOpen] = useState(false)


   

    return(
    <>
        <div className="fixed inset-0 h-full flex  items-center z-[101] backdrop-blur-sm
        bg-black/70">
            <div className="h-full bg-teal-700/80 w-5/6">
            <ul className={`${menuState? "animate-slideInLeft":"-translate-x-full"} flex flex-col gap-6 mt-[30%] text-white transition-all duration-500  text-xl  h-full  [&>li]:pl-8`}>
           {menuLink.map((menulink) =>{
            const isSublink = typeof menulink.sublink === "object"

            return(
                isSublink? <li key={menulink.id} className="gap-2 relative cursor-pointer" onClick={()=>setMobileSubmenuOpen(!mobileSubmenuOpen)}>{menulink.title}  <FaPlus className={` ${mobileSubmenuOpen? "":""} text-xs absolute left-[40%] top-1 translate-y-[50%]`}/>
                <ul className={`${mobileSubmenuOpen? "animate-drawerDown":"hidden"} flex ml-6 flex-col text-base  w-fit bg-teal-800 p-4  rounded-sm space-y-3 transition-all duration-700`}>
                    {menulink.sublink.map((link,index) =>{
                        return(<Link href={`/our-services/${link.split(" ").join("-").toLowerCase()}`} className="border-b border-y-gray-500" onClick={()=> setBurgerMenu(false)} key={index}>{link}</Link>)
                    })}
                </ul>
                </li>
                :<li key={menulink.id} onClick={()=> setBurgerMenu(false)}><Link href={menulink.href}>{menulink.title}</Link></li>
                 
          
        
)
           })}
           </ul>
           </div>
        </div>
    </>)
}
export default MobileMenu