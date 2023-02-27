import { FaBars } from "react-icons/fa"
import Logo from "./Logo"
import Navlink from "./Navlink"

const AnimatedNav = ({visible,setBurgerMenuState,burgerMenuState}) => {

  
  
  return (
    <div className={`${visible? "top-0 opacity-100 transition-all duration-500 ease-in-out ":"-top-24 opacity-0"}  md:flex fixed  shadow-md left-0 right-0 z-[103] px-2 lg:px-14 bg-white`}>
        <Logo visible={visible}/>
        <Navlink visible={visible}/>
       <FaBars className="absolute top-[18px] right-3 text-[#485170] z-[103] md:hidden w-8 h-8 p-1 bg-white rounded-sm cursor-pointer" onClick={()=> setBurgerMenuState(!burgerMenuState)}/>

    </div>
  )
}

export default AnimatedNav