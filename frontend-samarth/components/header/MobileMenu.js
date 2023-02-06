import { menuLink } from "./Navlink"
import Link from "next/link"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"


const MobileMenu = ({setBurgerMenu})=>{

    const [mobileSubmenuOpen,setMobileSubmenuOpen] = useState(false)


   

    return(
    <>
        <div className="fixed inset-0 h-full flex  items-center z-[101] backdrop-blur-sm
        bg-black/70">
            <ul className="flex flex-col gap-6 text-white  text-2xl bg-teal-700/80 w-5/6 h-full justify-center [&>li]:pl-8">
           {menuLink.map((menulink) =>{
            const isSublink = typeof menulink.sublink === "object"

            return(
                isSublink? <li key={menulink.id} className="flex gap-2 group items-center relative cursor-pointer" onClick={()=>setMobileSubmenuOpen(!mobileSubmenuOpen)}>{menulink.title}  <FaPlus className="text-xs"/>
                <ul className={`${mobileSubmenuOpen? "flex":"hidden"}   flex-col text-base absolute top-0 -right-[0%] w-fit bg-teal-800 p-3 rounded-sm space-y-3`}>
                    {menulink.sublink.map((link,index) =>{
                        return(<Link href={`/our-services/${link.split(" ").join("-").toLowerCase()}`} onClick={()=> setBurgerMenu(false)} key={index}>{link}</Link>)
                    })}
                </ul>
                </li>
                :<li key={menulink.id} onClick={()=> setBurgerMenu(false)}><Link href={menulink.href}>{menulink.title}</Link></li>
                 
          
        
)
           })}
           </ul>
        </div>
    </>)
}
export default MobileMenu