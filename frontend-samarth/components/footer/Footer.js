import Link from "next/link"
import { services } from "../services/OurServiceSlider"

const Footer = () => {
    const today = new Date()


  return (
    <footer className=" bg-cover relative bg-center after:content-[''] after:absolute after:inset-0 after:bg-black/70">
    <div className="grid md:grid-cols-6  px-4 md:p-12 gap-4 py-16 z-10">
    <div className="col-span-2 flex flex-col gap-4 z-10">
        <h1 className="text-3xl text-gray-200 font-bold ">SAMARTH</h1>
        <p className="text-gray-300">We here at Samarth – The best Physiotherapy in Nagpur will help you take those little steps by making you go through a detailed examination conducted by our Certified Healthcare Professionals. </p>
    </div>
    <div className="flex flex-col text-gray-200 gap-4 z-10">
        <h5 className="font-semibold">What We Offer</h5>
        <ul className="text-gray-400 cursor-pointer [&>a:hover]:underline text-base [&>a:hover]:text-gray-200 [&>a]:transition-all duration-500">
            {services.map(service =>{
                return(
                    <Link key={service.name} href={`/our-services/${service.name.split(" ").join("-").toLowerCase()}`}>
                    <li >{service.name}</li>
                    </Link>
                    // `/our-services/${sublink.split(" ").join("-").toLowerCase()}`
                )
            })}

           
        </ul>
    </div>
    <div className="flex flex-col text-gray-200 gap-4 z-10">
        <h5 className="font-semibold">Links</h5>
        <ul className="text-gray-400 cursor-pointer [&>li:hover]:underline [&>li:hover]:text-gray-200">
           <li><Link href="/about-us">About Us</Link></li>
           <li><Link href="#our-services">Our Services</Link></li>
           <li> <Link href="/contact-us">Contact Us</Link></li>
           {/* <li>Therapists Details</li>
           <li>Blog Standard</li>
           <li>Blog Details</li> */}
        </ul>
    </div>

    <div className="col-span-2 flex flex-col text-gray-200 gap-4 z-10">
    <h5 className="font-semibold">Address</h5>
    <address>
        123, Swawalambi Nagar, Abc Road, Nagpur <br/>
        Dist Nagpur 440022 MS
    </address>
    <p>9876543210</p>
    <p>contact@email.com</p>
    </div>
    </div>
    <div className="bg-slate-700  px-12 py-3 text-white text-sm font-thin z-10">
        <div className="z-10">
      <p className="">Copyright &copy; {today.getFullYear()}, All rights reserved</p> 
      </div>
    </div>
</footer>
  )
}

export default Footer