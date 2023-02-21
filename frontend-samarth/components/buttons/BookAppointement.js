import Link from "next/link"


const BookAppointement = () => {
  return (
    <button className="bg-teal-500 text-white px-4 py-2 rounded-sm font-medium text-base hidden lg:block hover:bg-teal-400 transition-all duration-200 shadow-md"><Link href="/contact-us">Book Now</Link></button>

  )
}

export default BookAppointement