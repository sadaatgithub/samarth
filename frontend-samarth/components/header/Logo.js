import Image from "next/image"
import Link from "next/link"
import logoPng from "../../public/physiologo2.png"

const Logo = ({visible}) => {
  return (
    <div className={`${visible? "md:w-2/3 w-full flex-grow":"w-full"} text-xl md:text-3xl  font-bold flex col-span-full md:col-span-5 lg:col-span-4 text-slate-700 text-center items-center justify-start drop-shadow-sm`}>
      <Link href="/" className="flex items-center ">
      <div className="w-20 h-20">
    <Image src={logoPng} width={80} height={80} alt="logo" className="-translate-x-5"/>
    </div>
     <h1 className="-translate-x-7 flex flex-col text-left text-teal-500  font-aladin font-black drop-shadow-sm leading-6"> Samartha <span className="text-gray-400 text-sm font-medium font-sourceSansPro">Physiotherapy & Rehab Clinic</span></h1>
     </Link></div>

  )
}

export default Logo