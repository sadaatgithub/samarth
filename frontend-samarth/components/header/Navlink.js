import Link from "next/link";
import { AiOutlineCaretDown } from "react-icons/ai";
import DesktopSubmenus from "./DesktopSubmenus";
import {useRouter} from "next/router";



export const link = ["Orthopedic Physiotherapy","Neuro Physiotherapy","Sports Physiotherapy & Fitness","Hydrotherapy"]
export const menuLink = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
  },
  {
    id: 3,
    title: "Services",
    href: "",
    sublink:link,
  },
  {
    id: 4,
    title: "Blogs",
    href: "/blogs-and-articles",
  },
  {
    id: 5,
    title: "Contact Us",
    href: "/contact-us",
  },
];


const Navlink = ({ visible,serviceNav }) => {
  const { pathname } = useRouter();
  // console.log(serviceNav)

 
  return (
    <nav className="flex flex-grow  w-full lg:px-14  text-gray-600 font-medium">
      <ul
        className={` ${
          visible ? "justify-end" : ""
        }  hidden w-full md:flex gap-8 [&>li]:cursor-pointer items-center navlink  [&>li]:relative [&>li]:py-3`}
      >
        {menuLink.map((link) => {
          const isSublink = typeof link.sublink === "object";
          const isLinkActive = link.href === pathname

          return isSublink ? (
            <li  className={`${isLinkActive? "active":""} group flex gap-2`} key={link.id}>
              {link.title} <DesktopSubmenus sublink={link.sublink} />
              <AiOutlineCaretDown className="text-sm self-center" />
            </li>
          ) : (
            <li key={link.id} className={`${isLinkActive? "active":""} group flex`}>
              <Link href={link.href} className="relative">
                {link.title}
                
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navlink;
