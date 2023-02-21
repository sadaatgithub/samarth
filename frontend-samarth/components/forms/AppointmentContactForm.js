import { submitContactForm } from "@/lib/submitContactForm";
import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import FormsInput from "./FormsInput";

const initialFormValue = {
  name: "",
  email: "",
  subject: "Free Consultation",
  contact: "",
  message: "Interested",
};
const initialState = { isLoading: false, error: "", values: initialFormValue };

const AppointmentContactForm = () => {
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
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="hidden lg:flex w-full lg:w-1/3 border max-w-sm rounded-xl shadow-2xl z-10 relative self-center grow bg-white  flex-col items-center pt-6 p-8">
     {isSuccess? <div className="flex items-center justify-center text-gray-500 h-full w-full">
<p>Form submitted successfully, we will contact you soon</p>
     </div>:<div className="w-full flex flex-col items-center">
      <h2 className="text-2xl text-slate-600 w-full">
        Book a <span className="font-medium text-teal-500">FREE</span> {" "}
        Appointement
      </h2>
      <form
        className=" flex flex-col gap-4 w-full pt-8"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col w-full gap-1">
          <FormsInput
            value={values?.name}
            type={"text"}
            name="name"
            label="Full Name"
            setState={setState}
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <FormsInput
            value={values?.email}
            type={"email"}
            name="email"
            label="Email"
            setState={setState}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <FormsInput
            value={values?.contact}
            type={"number"}
            name="contact"
            label="Mobile No."
            setState={setState}
          />
        </div>

        <button
          type="submit"
          className="self-end px-3 py-2 cursor-pointer border  mt-4 w-full h-10 bg-teal-500 rounded-md text-white flex items-center justify-center"
        >
          {isLoading ? (
            <ImSpinner8 className="animate-spin self-center" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>}
     
    </div>
  );
};

export default AppointmentContactForm;
