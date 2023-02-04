import Link from "next/link"

const Logo = ({visible}) => {
  return (
    <h1 className={`${visible? "w-1/2":"w-full"} text-xl md:text-3xl font-bold  col-span-full md:col-span-2 text-slate-700 text-center md:text-start drop-shadow-xl`}><Link href="/">Samarth <span className="text-teal-500">Physio</span></Link></h1>

  )
}

export default Logo