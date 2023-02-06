import {MdOutlineHealthAndSafety} from "react-icons/md"
import {BiClinic} from "react-icons/bi"
import {TbPhysotherapist} from "react-icons/tb"


const HeroBanner = () => {
  return (
    <div className="flex md:flex-row flex-col bg-white p-6 py-10 border [&>div]:gap-y-4 [&>div>svg]:text-5xl
md:[&>div>svg]:text-6xl [&>div]:items-center rounded-lg  shadow-sm gap-8 md:gap-16 [&>div]:text-center [&>div>svg]:text-teal-500
[&>div>h3]:text-2xl [&>div>h3]:font-bold [&>div>h3]:text-slate-600 [&>div>p]:text-slate-500 [&>div>p]:text-lg">
        <div className="flex flex-col">
    <MdOutlineHealthAndSafety/>
    <h3>Health Guarantee</h3>
    <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorem aut voluptates sequi expedita dignissimos.</p>
        </div>
        <div className="flex flex-col">
    <BiClinic/>
    <h3>Trusted Clinic</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorem aut voluptates sequi expedita dignissimos.</p>
        </div>
        <div className="flex flex-col">
    <TbPhysotherapist/>
    <h3>Expert Therapist</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorem aut voluptates sequi expedita dignissimos.</p>
        </div>
</div>
  )
}

export default HeroBanner