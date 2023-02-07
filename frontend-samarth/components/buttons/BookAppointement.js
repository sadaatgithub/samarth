import Link from "next/link"


const BookAppointement = () => {
  return (
    <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-extralight text-base hidden lg:block"><Link href="/contact-us">Book Appointment</Link></button>

  )
}

export default BookAppointement