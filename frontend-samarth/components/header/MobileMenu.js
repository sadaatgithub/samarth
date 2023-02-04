import { menuLink } from "./Navlink"
import Link from "next/link"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const MobileMenu = ({setBurgerMenu})=>{

    const [mobileSubmenuOpen,setMobileSubmenuOpen] = useState(false)

    return(
    <>
        <div className="fixed inset-0 h-full flex  items-center z-[101] 
        bg-black/70">
            <ul className="flex flex-col gap-6 text-white  text-2xl bg-teal-700 w-5/6 h-full justify-center">
           {menuLink.map((link,index) =>{
            const isSublink = typeof link.sublink === "object"

            return(
                <> 
            <li key={index} onClick={()=> isSublink? setMobileSubmenuOpen(!mobileSubmenuOpen):setBurgerMenu(false)} className="relative ml-8">
                <Link href={link.href} className={`${isSublink? "flex gap-2 items-center":""}`}>
                {link.title} {isSublink? <FaPlus className="text-xs"/>:""}
                </Link>
                {mobileSubmenuOpen && isSublink? <ul className="ml-6 font-light mt-2 absolute left-[25%] top-10 -translate-y-[50px]  text-lg flex flex-col gap-2
                p-6 rounded-md bg-teal-500">
               { link.sublink.map((sublink,index) =>{
                    
                    return(<li key={index} onClick={()=> setBurgerMenu(false)}><Link href={`/our-services/${sublink.split(" ").join("-").toLowerCase()}`}>{sublink}</Link></li>)
                })}
                </ul>:""}
            
            </li>
            </>
)
           })}
           </ul>
        </div>
    </>)
}
export default MobileMenu