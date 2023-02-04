import Logo from "./Logo"
import Navlink from "./Navlink"

const AnimatedNav = ({visible}) => {
  return (
    <div className={`${visible? "top-0 opacity-100 transition-all duration-500 ":"-top-24"} opacity-0 hidden md:flex fixed  shadow-md left-0 right-0 z-[102] md:px-20 bg-white py-2 `}>
        <Logo visible={visible}/>
        <Navlink visible={visible}/>
    </div>
  )
}

export default AnimatedNav