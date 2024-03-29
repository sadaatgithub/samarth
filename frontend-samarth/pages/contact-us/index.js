import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import FormsInput from "@/components/forms/FormsInput";
import { useState } from "react";
import PageBanner from "@/components/banners/PageBanner";
import { submitContactForm } from "@/lib/submitContactForm";

const initialFormValue = {
  name: "",
  email: "",
  subject: "Book Appointment",
  contact: "",
  message: "",
};

const initialState = { isLoading: false, error: "", values: initialFormValue };

const ContactUs = () => {
  const [state, setState] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const { isLoading, values, error } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await submitContactForm(values);
      setState(initialState);
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <PageBanner />
      <div
        name="contact-us"
        className="min-h-screen border  flex justify-center w-full md:flex-row flex-col bg-gray-50  rounded-md overflow-hidden px-4 md:px-10 xl:px-20 py-8"
      >
        <div className="w-full md:w-5/12 lg:w-5/12 flex flex-col gap-y-4 relative after:content-[''] after:absolute after:inset-0 after:bg-teal-600/70 after:backdrop-blur-sm bg-[url('../public/dumbels.jpg')] bg-no-repeat bg-cover py-6  text-gray-100  md:rounded-l-lg px-10 font-hindGuntur shadow-lg">
          <h3 className="text-xl md:text-4xl font-semibold font-monteserrat mt-4 z-[1]">
            Have Any Queries?
          </h3>
          <p className="z-[1]">
            Wish to get a free consultation or a quick checkup to identify the
            kind of treatment you need? Just give us a call or submit the form
            here.
          </p>

          <ul className="flex gap-4 flex-col divide-y-[1px] divide-gray-200 mt-5 z-[1] text-xl">
            <li className="flex gap-4">
              {" "}
              <FiPhoneCall className="my-auto" /> <p>9823598235</p>
            </li>
            <li className="flex gap-4">
              {" "}
              <FiPhoneCall className="my-auto" /> <p>9823598235</p>
            </li>
            <li className="flex gap-4">
              {" "}
              <FiPhoneCall className="my-auto" /> <p>9823598235</p>
            </li>
            <li className="flex gap-4">
              <TfiEmail className="my-auto" /> <p>nagpur@email.com</p>
            </li>
          </ul>

          <div className="flex gap-4  flex-col z-[1] mt-4">
            <address className="flex">
              <TfiLocationPin className="text-xl" />
              Plot No 114, Deendayal Nagar, Ram Mandir Marg, Swavalambi Nagar, Nagpur <br/>
        Maharashtra 440022
            </address>
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-7/12 bg-white p-4 md:shadow-lg md:rounded-r-lg flex flex-col gap-8  justify-center ">
        <h2 className="text-xl md:text-3xl font-semibold text-secondary py-2 text-teal-400 md:pl-8">
              Enter Details
            </h2>
          <form
            onSubmit={submitHandler}
            className="w-full  lg:w-10/12 flex md:pl-8 flex-col gap-y-8 py-1 [&>div>label]:text-sm [&>div]:gap-y-1 [&>div>label]:text-gray-600"
          >
            
            <div className="flex flex-col">
              <FormsInput
                value={values?.name}
                type={"text"}
                name="name"
                label="Full Name"
                setState={setState}
              />
            </div>
            <div className="flex flex-col">
              <FormsInput
                value={values?.email}
                type={"email"}
                name="email"
                label="Email"
                setState={setState}
              />
            </div>
            <div className="flex flex-col">
              <FormsInput
                value={values?.contact}
                type={"number"}
                name="contact"
                label="Mobile No"
                setState={setState}
              />
            </div>

            <div className="flex flex-col">
              <FormsInput
                value={values?.message}
                type={"textarea"}
                name="message"
                label="Message"
                setState={setState}
                row="7"
              />
            </div>

            <div className="flex gap-4 w-full ">
              <input
                type="reset"
                value="Clear"
                disabled={isLoading}
                className={`${
                  isLoading ? "hidden" : "block"
                } px-3 shadow-md py-2 ml-auto cursor-pointer border rounded-sm w-20 border-teal-500 text-teal-500 hover:-translate-y-1 transition-all duration-200`}
                onClick={() => setState(initialState)}
              />
              <button className="bg-teal-500 px-3 py-2 shadow-md text-white rounded-sm hover:-translate-y-1 transition-all duration-200">
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-2 rounded-sm overflow-hidden z-[1] w-full">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.9670767211117!2d79.04793021064098!3d21.10803000814813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf92282048db%3A0x261b7b7572f2e33c!2sSamarth%20Physiotherapy%20%26%20Rehab%20Care%20Unit!5e0!3m2!1sen!2sin!4v1680953746321!5m2!1sen!2sin"
          width="1440"
          height="600"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
