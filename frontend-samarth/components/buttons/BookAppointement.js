import Link from "next/link"


const BookAppointement = ({title}) => {
  return (
    <Link href="/contact-us"> <button className="rounded-sm w-full sm:w-auto max-w-xs text-white px-6 py-3 bg-teal-400  tracking-wider hover:bg-teal-800 transition-all duration-200">{title}</button></Link>

  )
}

export default BookAppointement