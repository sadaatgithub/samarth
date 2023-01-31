
const footer = () => {
    const today = new Date()


  return (
    <footer className="bg-cover relative bg-center after:content-[''] after:absolute after:inset-0 after:bg-black/70">
    <div className="grid md:grid-cols-6 p-12 gap-4 py-16 z-10">
    <div className="col-span-2 flex flex-col gap-4 z-10">
        <h1 className="text-3xl text-white font-bold ">SAMARTH</h1>
        <p className="text-gray-300">We here at Samarth – The best Physiotherapy in Nagpur will help you take those little steps by making you go through a detailed examination conducted by our Certified Healthcare Professionals. </p>
    </div>
    <div className="flex flex-col text-white gap-4 z-10">
        <h5 className="font-semibold">What We Offer</h5>
        <ul className="text-gray-400">
            <li>Physiotherapy</li>
            <li>Diagnostics</li>
            <li>Manual Therapy</li>
            <li>Massage Therapy</li>
            <li>Rehabilitation</li>
            <li>Acupuncture</li>
        </ul>
    </div>
    <div className="flex flex-col text-white gap-4 z-10">
        <h5 className="font-semibold">Links</h5>
        <ul className="text-gray-400">
           <li>About Us</li>
           <li>Our Services</li>
           <li>Contact Us</li>
           <li>Therapists Details</li>
           <li>Blog Standard</li>
           <li>Blog Details</li>
        </ul>
    </div>

    <div className="col-span-2 flex flex-col text-white gap-4 z-10">
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

export default footer