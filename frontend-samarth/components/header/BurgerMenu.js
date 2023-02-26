import React ,{useRef} from 'react'

const BurgerMenu = ({animateNav,burgerMenuState,setBurgerMenuState}) => {
    const burgerState = useRef()
    const hamburgerHandler = () =>{
        const currentState = burgerState.current.getAttribute("data-state")
        if(!currentState || currentState === "closed"){
      
          burgerState.current.setAttribute("data-state","opened")
          burgerState.current.setAttribute("aria-expanded","true")
          setBurgerMenuState(true)
        } else{
          closeBurgerOnLink()
      
        }
       }

       const closeBurgerOnLink = () =>{
        burgerState.current.setAttribute("aria-expanded","false")
        burgerState.current.setAttribute("data-state","closed")
      
        setBurgerMenuState(false)
       }


  return (
    <div className="md:hidden absolute right-2 top-4 dark:text-white z-[999]">
         
        <button ref={burgerState} className="button-one" aria-controls="primary-navigation" aria-expanded="false" onClick={hamburgerHandler}> 
    <svg fill={`${animateNav? "var(--button-color-dark)":"var(--button-color)"}`} className="hamburger" viewBox="0 0 100 100" width="30">
      <rect className="line top" width="80" height="10" x="10" y="25" rx="5">
      </rect>
      <rect className="line middle" width="80" height="10" x="10" y="45" rx="5">
      </rect>
      <rect className="line bottom" width="80" height="10" x="10" y="65" rx="5">
      </rect>
    </svg>
  </button>
        </div>
  )
}

export default BurgerMenu