import Image from "next/image"
import Link from "next/link"
import logoPng from "../../public/physiologo2.png"

const Logo = ({visible}) => {
  return (
    <div className={`${visible? "md:w-2/3 w-full flex-grow":"w-full"}  text-xl md:text-3xl font-bold flex col-span-full md:col-span-5 lg:col-span-4 text-slate-700 text-center items-center justify-center md:justify-start drop-shadow-sm`}>
      <Link href="/" className="flex items-center ">
      
    <Image src={logoPng} width={70} height={70} className="translate-y-2 -translate-x-5"/>

     <h1 className="-translate-x-5"> Samarth <span className="text-teal-500">Physio</span></h1></Link></div>

  )
}

export default Logo