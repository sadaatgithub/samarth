import { FaBars } from "react-icons/fa"
import Logo from "./Logo"
import Navlink from "./Navlink"

const AnimatedNav = ({visible,closeMenu,menuState}) => {
  return (
    <div className={`${visible? "top-0 opacity-100 transition-all duration-500 ":"-top-24 opacity-0"}  md:flex fixed  shadow-md left-0 right-0 z-[102] px-4 lg:px-20 bg-white py-2`}>
        <Logo visible={visible}/>
        <Navlink visible={visible}/>
       <FaBars className="absolute top-[6px] left-3 text-teal-400 z-[102] md:hidden w-8 h-8 p-2 cursor-pointer" onClick={()=> closeMenu(!menuState)}/>

    </div>
  )
}

export default AnimatedNav