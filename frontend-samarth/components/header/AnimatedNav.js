import { FaBars } from "react-icons/fa"
import BurgerMenu from "./BurgerMenu"
import Logo from "./Logo"
import Navlink from "./Navlink"

const AnimatedNav = ({visible,setBurgerMenuState,burgerMenuState}) => {
  return (
    <div className={`${visible? "top-0 opacity-100 transition-all duration-500 ease-in-out ":"-top-24 opacity-0"}  md:flex fixed  shadow-md left-0 right-0 z-[999] px-2 lg:px-14 bg-white`}>
        <Logo visible={visible}/>
        <Navlink visible={visible}/>
       <FaBars className="absolute top-[18px] left-3 text-teal-400 z-[999] md:hidden w-8 h-8 p-1 bg-white border-2 border-teal-300 rounded-sm cursor-pointer" onClick={()=> setBurgerMenuState(!burgerMenuState)}/>
       {/* <BurgerMenu animateNav={visible} burgerMenuState={burgerMenuState} setBurgerMenuState={setBurgerMenuState}/> */}

    </div>
  )
}

export default AnimatedNav