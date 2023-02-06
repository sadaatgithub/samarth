import { link } from "./Navlink"
import Link from "next/link"

const MobileSublink = () => {
  return (
    <ul className="ml-6 font-light mt-2 absolute left-[25%] top-10 -translate-y-[50px]  text-lg flex flex-col gap-2
                p-6 rounded-md bg-teal-500">
               { link.map((sublink) =>{
                    
                    return(<li key={sublink}><Link href={`/our-services/${sublink.split(" ").join("-").toLowerCase()}`}>{sublink}</Link></li>)
                })}
                </ul>
  )
}

export default MobileSublink