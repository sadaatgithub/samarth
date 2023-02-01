import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail,TfiLocationPin } from "react-icons/tfi";

const contactUs = () => {
  return (
    <div name="contact-us" className="min-h-screen md:px-10 flex justify-center w-full md:flex-row flex-col bg-gray-100  rounded-md overflow-hidden p-12">
    <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col gap-y-4 bg-slate-600  py-6 text-white justify-between md:rounded-l-lg px-6 font-hindGuntur shadow-lg">
      <h3 className="text-xl md:text-2xl font-semibold font-monteserrat">Get in touch</h3>
      <h5 className="text-base font-hindGuntur">
        Got a question about us? Are you intrested in volunteering with us?
        Have some suggestions or any other query? Just contact us. we are here
        to assist you.
      </h5>

      <div className="flex gap-4  items-center">
        <FiPhoneCall /> <p>9823598235</p>
      </div>
      <div className="flex gap-4 items-center">
        <TfiEmail /> <p>nagpur@email.com</p>
      </div>
      <div className="flex gap-4  flex-col">
        <address className="flex">
        <TfiLocationPin className="text-xl"/>
                123, Swawalambi Nagar, Abc Road, Nagpur <br/>
                Dist Nagpur 440022 MS
            </address>
            <p>9876543210</p>
            <p>contact@email.com</p>
          </div>
        <div className="mt-2 rounded-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.3527285104383!2d79.07790911253058!3d21.144842442857172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff90e72306f%3A0x192616fc50e41145!2sLata%20Mangeshkar%20Hospital!5e0!3m2!1sen!2sin!4v1670243702439!5m2!1sen!2sin"
            width="350"
            height="200"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >

          </iframe>
        </div>
      </div>


    <div className="w-full md:w-7/12 lg:w-7/12 bg-white p-4 shadow-lg md:rounded-r-lg">

      <form className="w-full lg:w-8/12 flex pl-8 flex-col gap-y-4 py-1 [&>div>label]:text-sm [&>div]:gap-y-1 [&>div>label]:text-gray-600">
        <h2 className="text-xl first-letter:md:text-2xl font-semibold text-secondary py-2 font-monteserrat">Enter Details</h2>
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="" id="" className="p-2 rounded-sm border caret-amarnath"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Id</label>
          <input type="email" name="email" id="" className="p-2 rounded-sm border"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobile">Mobile</label>
          <input type="number" name="mobile" id="" className="p-2 rounded-sm border appearance-none"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="60" rows="5" className="border"></textarea>
        </div>
        <button className="mt-1 bg-teal-500 p-4 text-white rounded-sm">SUBMIT</button>
      </form>
    </div>
    </div>
  )
}

export default contactUs