import { menuLink } from "./Navlink";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaChevronDown,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import {motion} from "framer-motion"

const MobileMenu = ({ setBurgerMenu, menuState }) => {
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  return (

    // 
      <motion.div initial={{opacity:0,x:"-100%"}} animate={{opacity:1,x:0}} exit={{opacity:0,x:"-100%"}} transition={{duration:0.2}} 
        className="fixed inset-0 h-full flex  items-center z-[150]  backdrop-blur-sm
        "
      >

        <div 
          className={` h-full bg-sky-900/90 w-full sm:w-5/6 flex flex-col justify-between relative`}
        >
          <FaTimes
            className="absolute right-3 top-3 md:hidden w-8 h-8 p-1 cursor-pointer text-white"
            onClick={() => setBurgerMenu(false)}
          />
          <ul className={`flex flex-col gap-4 mt-[20%] text-white transition-all duration-500  text-xl focus:bg-none   [&>li]:pl-8`}>
            {menuLink.map((menulink) => {
              const isSublink = typeof menulink.sublink === "object";

              return isSublink ? (
                <li
                  key={menulink.id}
                  className="relative cursor-pointer "
                  onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                >
                  {menulink.title}{" "}
                  <FaChevronDown
                    className={` ${
                      mobileSubmenuOpen ? "rotate-180" : ""
                    }  absolute left-[40%] top-1 text-[15px] hover:bg-none transition-transform duration-300`}
                  />
                  <ul
                    className={`${
                      mobileSubmenuOpen ? "h-[200px]" : "h-0 overflow-hidden"
                    } flex  mt-2 flex-col text-base rounded-sm transition-height duration-500 w-fit`}
                  >
                    {menulink.sublink.map((link, index) => {
                      return (
                        <Link
                          href={`/our-services/${link
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          className="py-2 px-3 bg-teal-800"
                          onClick={() => setBurgerMenu(false)}
                          key={index}
                        >
                          {link}
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li key={menulink.id} onClick={() => setBurgerMenu(false)}>
                  <Link href={menulink.href}>{menulink.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto p-6 pl-8 flex flex-col gap-2 text-white ">
            <p>Follow Us</p>
            <div className="flex gap-4 text-xl text-gray-300">
            <FaTwitter />
            <FaFacebook />
            <a href="https://instagram.com/samarthphysioclinic" target="_blank" rel="noreferrer"> <FaInstagram /></a>
            </div>
          </div>
        </div>
      </motion.div>
  );
};
export default MobileMenu;
