import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiClinic } from "react-icons/bi";
import { TbPhysotherapist } from "react-icons/tb";

const HeroBanner = () => {
  return (
    <div
      className="flex lg:flex-row flex-col px-2 py-10  [&>div]:gap-y-4 [&>div>svg]:text-5xl [&>div]:max-w-xl  items-center
md:[&>div>svg]:text-6xl [&>div]:items-center rounded-lg   gap-8 md:gap-12 [&>div]:text-center [&>div>svg]:text-teal-500
[&>div>h3]:text-2xl [&>div>h3]:font-bold [&>div>h3]:text-slate-600 [&>div>p]:text-gray-500 [&>div>p]:text-base md:px-20 text-justify lg:[&>div]:w-1/3"
    >
      <div className="flex flex-col  lg:self-stretch ">
        <MdOutlineHealthAndSafety className="" />
        <h3>Health Guarantee</h3>
        <p className="">
          At Samarth, we are dedicated to improving the health and well-being of
          our patients. If you are not satisfied with your progress after the
          completion of a full course of treatment, we will offer additional
          sessions at no charge.
        </p>
      </div>
      <div className="flex flex-col ">
        <BiClinic />
        <h3>Trusted Clinic</h3>
        <p className="">
          At Samarth, we have built a reputation as the most trusted provider of
          physiotherapy services in the community. Our team of highly skilled
          and experienced therapists is dedicated to providing personalized and
          effective care to each and every patient.
        </p>
      </div>
      <div className="flex flex-col ">
        <TbPhysotherapist />
        <h3>Expert Therapist</h3>
        <p className="">
          Our team of expert therapists at Samarth is dedicated to providing the
          highest quality physiotherapy services to our patients. With a focus
          on personalized treatment plans and hands-on care, our therapists are
          committed to helping patients achieve their best possible outcomes.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
