import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion as m } from "framer-motion";
import {  fadeIn } from "../../lib/Animation";


const EachService = ({service,idx}) => {
  return (
    <m.div variants={fadeIn(" ", "tween", idx*0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    
    className="flex flex-col bg-white max-w-sm border rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-gray-300 transition-all duration-300"
  >
    <Image
      alt=""
      src={service.image}
      width={320}
      height={240}
      className="w-full h-60 object-cover"
    />
    <div className="px-2 flex flex-col justify-between h-full">
      <div className="flex flex-col gap-y-4  mt-8">
        <h4 className="text-3xl text-gray-700">{service.name}</h4>
        <p className="text-slate-500">{service.content}</p>
      </div>
      <button className="self-end mr-4 mb-4 mt-6 text-teal-400  font-semibold ">
        <Link
          href={`/our-services/${service.name
            .split(" ")
            .join("-")
            .toLowerCase()}`}
          className="flex gap-2 items-center group"
        >
          Read More{" "}
          <FaChevronRight className="text-xs group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </button>
    </div>
  </m.div>
  );
};

export default EachService;
