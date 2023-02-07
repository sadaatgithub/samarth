import Link from "next/link"
import Image from "next/image"
import Team1 from "@/public/team1.jpg"
import Team2 from "@/public/team2.jpg"
import Team3 from "@/public/team3.jpg"
import {BsTwitter,BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import DivHeading from "../headings/DivHeading"


export const team = [
    {
      id: 1,
      member: "Dr Doe Jones",
      designation: "BPTH, MPTH",
      desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit impedit consequatur sequi voluptatibus 
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
      desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit impedit consequatur sequi voluptatibus 
      adipisci id eveniet, delectus, deleniti doloremque earum repudiandae quas, recusandae atque qui ea? Consequuntur 
      dolore culpa accusamus harum fugiat provident aspernatur cumque magni suscipit corporis, 
      nostrum molestiae impedit facilis commodi eaque nisi sint, minima dicta quod. Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Cupiditate est possimus consequuntur tenetur inventore? Necessitatibus, consectetur 
      alias optio deserunt minus, itaque explicabo illo voluptatum rem, maiores beatae sint iusto dolor delectus totam 
      reprehenderit? Enim repellendus corporis a, id tempore cumque rem consequuntur soluta itaque animi pariatur sint 
      numquam mollitia explicabo accusantium earum odit ea. Sed aspernatur dolorem nam error reiciendis!`,
      image:Team2,
    },
    {
      id: 3,
      member: "Dr Albert Einstein",
      designation: "BPTH, MPTH",
      desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit impedit consequatur sequi voluptatibus 
      adipisci id eveniet, delectus, deleniti doloremque earum repudiandae quas, recusandae atque qui ea? Consequuntur 
      dolore culpa accusamus harum fugiat provident aspernatur cumque magni suscipit corporis, 
      nostrum molestiae impedit facilis commodi eaque nisi sint, minima dicta quod. Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Cupiditate est possimus consequuntur tenetur inventore? Necessitatibus, consectetur 
      alias optio deserunt minus, itaque explicabo illo voluptatum rem, maiores beatae sint iusto dolor delectus totam 
      reprehenderit? Enim repellendus corporis a, id tempore cumque rem consequuntur soluta itaque animi pariatur sint 
      numquam mollitia explicabo accusantium earum odit ea. Sed aspernatur dolorem nam error reiciendis!`,
      image: Team3,
    },
  ];

const OurTeam = () => {
  return (
    <div className="h-fit lg:px-20 px-2 flex flex-col items-center mt-4 md:mt-20">
     <DivHeading title="Our Team"/>

      <div className="flex justify-evenly w-full mt-10 md:mt-20 sm:flex-row flex-col gap-8">
        {team.map((member) => (
          <div 
         
          className="flex flex-col gap-4 md:gap-8" key={member.id}>
          <Link 
            href={`/our-team/${member.id}`} className="flex flex-col justify-center rounded-md items-center relative overflow-hidden"
          >
            <Image
              src={member.image}
              alt=""
              className="w-64 h-72  object-cover rounded-md hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col items-center gap-1 absolute bg-white bottom-5 p-2 px-3 w-60 min-w-4/6 sm:w-5/6 shadow-sm rounded-sm border-b-4 border-teal-300">
              <p className="font-bold">{member.member}</p>
              <p className="text-gray-700">{member.designation}</p>
            </div>
            
          </Link>
          <div className="flex gap-4 justify-center text-2xl text-slate-400 [&>svg]:cursor-pointer [&>svg:hover]:text-rose-500 [&>svg]:transition-all [&>svg]:duration-150">
          <BsTwitter/>
          <BsFacebook/>
          <AiFillInstagram/>
          </div>
      </div>
        ))}

      
      </div>
    </div>
  )
}

export default OurTeam