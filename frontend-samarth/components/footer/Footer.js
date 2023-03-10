import Link from "next/link"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import {services} from "../services/OurServices.js"

const Footer = () => {
    const today = new Date()


  return (
    <footer className="mt-auto bg-cover md:pt-20 pt-14 pb-8 flex flex-col relative bg-center after:content-[''] after:absolute after:inset-0 after:bg-black/80">
     
    <div className="flex flex-col md:flex-row px-4 md:px-16 lg:gap-x-20 gap-x-10   gap-y-16">
    <div className="md:w-[40%] flex flex-col gap-6 z-10 grow">
        <h1 className="text-3xl text-gray-200 font-bold ">SAMARTH</h1>
        <p className="text-gray-300">We here at Samarth – The best Physiotherapy in Nagpur will help you take those little steps by making you go through a detailed examination conducted by our Certified Healthcare Professionals. </p>
        <div className="flex gap-4 text-white/50 [&>svg:hover]:text-white [&>svg]:cursor-pointer">
            <FaInstagram/> <FaYoutube/> <FaTwitter/>
        </div>
    </div>
    <div className="md:w-[60%] grid sm:grid-cols-3">
        <div className="flex flex-col text-gray-200 gap-4 z-10">
            <h5 className="font-semibold tracking-wide">What We Offer</h5>
            <ul className="text-gray-400 cursor-pointer [&>a:hover]:underline text-sm [&>a:hover]:text-gray-200 [&>a]:transition-all duration-500">
                {services.map(service =>{
                    return(
                        <Link key={service.name} href={`/our-services/${service.name.split(" ").join("-").toLowerCase()}`}>
                        <li className="pb-2">{service.name}</li>
                        </Link>
                        // `/our-services/${sublink.split(" ").join("-").toLowerCase()}`
                    )
                })}

            
            </ul>
        </div>
        <div className="flex flex-col text-gray-200 gap-4 z-10">
            <h5 className="font-semibold">Links</h5>
            <ul className="text-gray-400 cursor-pointer [&>li:hover]:underline text-sm [&>li:hover]:text-gray-200 [&>li]:pb-2">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="#our-services">Our Services</Link></li>
            <li> <Link href="/contact-us">Contact Us</Link></li>
            {/* <li>Therapists Details</li>
            <li>Blog Standard</li>
            <li>Blog Details</li> */}
            </ul>
        </div>

        <div className="flex flex-col text-gray-200 z-10">
        <h5 className="font-semibold">Address :</h5>
        <address className="text-sm font-normal mt-2">
            123, Swawalambi Nagar, Abc Road, Nagpur <br/>
            Dist Nagpur 440022 MS
        </address>
        <div className="mt-6">
            <p className="font-semibold">Contact :</p>
        <p className="text-sm mt-2">9876543210</p>
        <p className="text-sm">contact@email.com</p>
        </div>
        </div>
    </div>
    </div>
    
    <div className="z-10 px-4 md:px-14 mt-10 md:mt-20 text-gray-400 border-t border-gray-400 flex justify-between items-center text-sm">
    <p className="z-10  mt-4"> &copy;{today.getFullYear()} Samarth Physio . All rights reserved</p> 
    <span className="flex md:gap-2 cursor-pointer "><p>Terms of service</p><p>Privacy Policy</p></span>
    </div>
</footer>
  )
}

export default Footer