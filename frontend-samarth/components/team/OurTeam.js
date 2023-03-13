import Link from "next/link";
import Image from "next/image";
import Team1 from "@/public/team1.jpg";
import Team2 from "@/public/team2.jpg";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import DivHeading from "../headings/DivHeading";
import Container from "../container/Container";
import { motion as m } from "framer-motion";

import { fadeIn } from "@/lib/Animation";
import Subheading from "../headings/Subheading";

export const team = [
  {
    id: 1,
    member: "Dr Doe Jones",
    designation: "BPTH, MPTH",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit impedit consequatur sequi voluptatibus 
      adipisci id eveniet, delectus, deleniti doloremque earum repudiandae quas, recusandae atque qui ea? Consequuntur 
      dolore culpa accusamus harum fugiat provident aspernatur cumque magni suscipit corporis, 
      nostrum molestiae impedit facilis commodi eaque nisi sint, minima dicta quod. Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Cupiditate est possimus consequuntur tenetur inventore? Necessitatibus, consectetur 
      alias optio deserunt minus, itaque explicabo illo voluptatum rem, maiores beatae sint iusto dolor delectus totam 
      reprehenderit? Enim repellendus corporis a, id tempore cumque rem consequuntur soluta itaque animi pariatur sint 
      numquam mollitia explicabo accusantium earum odit ea. Sed aspernatur dolorem nam error reiciendis!`,
    image: Team1,
  },
  {
    id: 2,
    member: "Dr Steve Smith",
    designation: "BPTH, MPTH",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit impedit consequatur sequi voluptatibus 
      adipisci id eveniet, delectus, deleniti doloremque earum repudiandae quas, recusandae atque qui ea? Consequuntur 
      dolore culpa accusamus harum fugiat provident aspernatur cumque magni suscipit corporis, 
      nostrum molestiae impedit facilis commodi eaque nisi sint, minima dicta quod. Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Cupiditate est possimus consequuntur tenetur inventore? Necessitatibus, consectetur 
      alias optio deserunt minus, itaque explicabo illo voluptatum rem, maiores beatae sint iusto dolor delectus totam 
      reprehenderit? Enim repellendus corporis a, id tempore cumque rem consequuntur soluta itaque animi pariatur sint 
      numquam mollitia explicabo accusantium earum odit ea. Sed aspernatur dolorem nam error reiciendis!`,
    image: Team2,
  },
];
//
const OurTeam = () => {
  return (
    <Container bg="bg-[url('../public/banner2.jpg')] bg-no-repeat bg-cover relative after:content-[''] after:absolute after:bg-white/90 bg-fixed after:inset-0">
      <div
        className="h-fit flex flex-col items-center  relative z-[1]
    "
      >
        <DivHeading title="Our Team" />
        <Subheading title="No matter your needs, our team is here to help you on your path to recovery and better physical health." />

        <div className="flex justify-evenly w-full mt-10 md:mt-20 md:flex-row flex-col gap-16 items-center z-[1]">
          {team.map((member, idx) => (
            <Link href={`our-team/${member.id}`} key={member.id}>
              <m.div
                variants={fadeIn("up", "tween", idx * 0.2, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col  gap-4 md:gap-6  w-full "
              >
                <div className="h-[300px] lg:h-[405px] w-full  overflow-hidden object-cover">
                  <Image
                    src={member.image}
                    width={640}
                    height={480}
                    alt="our team"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className=" flex flex-col gap-4">
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold text-rose-500">
                      {member.member}
                    </p>
                    <p className="text-lg text-gray-500">
                      {member.designation}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-gray-500">{member.desc.slice(0, 180)}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-2xl text-gray-400 [&>svg]:cursor-pointer  [&>svg]:transition-all [&>svg]:duration-150">
                  <BsTwitter className="hover:text-sky-400" />
                  <BsFacebook className="hover:text-blue-600" />
                  <AiFillInstagram className="hover:text-rose-600" />
                </div>
              </m.div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
