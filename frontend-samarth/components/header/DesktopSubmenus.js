import Link from "next/link"



const DesktopSubmenus = ({sublink}) => {
  return (
         <ul className="group-hover:visible group-hover:opacity-100 group-hover:translate-y-2 opacity-0 top-[40px] invisible absolute left-0 z-[20] bg-white 
          w-[350%] transition-all duration-100 ease-linear flex flex-col shadow-xl overflow-hidden rounded-sm scale-75  group-hover:scale-100 origin-top-left">
             
             {sublink.map((sublink,index) =>{
              return(<li key={index} className="font-normal border-l-4 border-transparent hover:border-l-4 hover:border-rose-500 p-3 hover:bg-gray-50 transition-all duration-200">
              <Link href={`/our-services/${sublink.split(" ").join("-").toLowerCase()}`} className="py-3"> {sublink}</Link></li>)
             })}
             
             
            </ul>
  )
}

export default DesktopSubmenus