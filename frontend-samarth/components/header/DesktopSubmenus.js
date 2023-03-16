import Link from "next/link"



const DesktopSubmenus = ({sublink}) => {

  return (
         <ul className="group-hover:visible group-hover:opacity-100 opacity-0 invisible top-[60px] group-hover:top-[48px] absolute left-0 z-[20] bg-white 
          w-[350%] transition-all duration-100 ease-linear flex flex-col shadow-2xl overflow-hidden rounded-sm">
             
             {sublink?.map((sublink,index) =>{
              return(<li key={index} className="font-normal border-l-4 border-transparent hover:border-l-4 hover:border-teal-400 p-3 hover:bg-gray-50  transition-all duration-200">
              <Link href={`/our-services/${sublink.split(" ").join("-").toLowerCase()} `} className="py-3"> {sublink}</Link></li>)
             })}
             
             {/* */}
            </ul>
  )
}

export default DesktopSubmenus