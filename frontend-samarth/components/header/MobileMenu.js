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


const MobileMenu = ({ setBurgerMenu, menuState }) => {
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  return (

    // 
      <div
        className="fixed inset-0 h-full flex  items-center z-[110]  backdrop-blur-sm
        bg-black/70"
      >

        <div 
          className={`${
            menuState ? "animate-slideInLeft" : "-translate-x-full "
          } h-full bg-teal-700/80 w-5/6 flex flex-col justify-between`}
        >
          <FaTimes
            className="absolute right-1 top-1 md:hidden w-8 h-8 p-1 cursor-pointer text-white"
            onClick={() => setBurgerMenu(false)}
          />
          <ul className={`flex flex-col gap-6 mt-[30%]  text-white transition-all duration-500  text-xl focus:bg-none   [&>li]:pl-8`}>
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
          <div className="mt-auto p-6 pl-8 flex gap-4 text-xl text-gray-300">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
  );
};
export default MobileMenu;
