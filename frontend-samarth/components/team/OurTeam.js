import Link from "next/link"
import Image from "next/image"
import Team1 from "@/public/team1.jpg"
import Team2 from "@/public/team2.jpg"
import Team3 from "@/public/team3.jpg"
import {BsTwitter,BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import DivHeading from "../headings/DivHeading"
import Container from "../container/Container"


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
// 
const OurTeam = () => {
  return (
    <Container bg="bg-[url('../public/banner2.jpg')] bg-no-repeat bg-cover relative after:content-[''] after:absolute after:bg-white/90 bg-fixed after:inset-0">
    <div className="h-fit flex flex-col items-center  relative z-[1]
    ">
     <DivHeading title="Our Team"/>
     <p className="mt-6 md:text-lg text-gray-500 md:w-3/4 text-center z-[1]">No matter your needs, our team is here to help you on your path to recovery and better physical health.</p>

      <div className="flex justify-evenly w-full mt-10 md:mt-20 md:flex-row flex-col gap-12 items-center z-[1]">
        {team.map((member) => (
          <div 
          
         
          className="flex flex-col gap-4 md:gap-12  w-full max-w-sm " key={member.id}>
          <Link 
            href={`/our-team/${member.id}`} className="flex flex-col justify-center rounded-md items-center relative overflow-hidden"
          >
            <Image
              src={member.image}
              width={320}
              height={240}
              alt=""
              className="w-[395px] h-[395px]  object-cover  rounded-md hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col items-center gap-1 absolute bg-white bottom-5 p-2 px-3 w-60 min-w-4/6 sm:w-5/6 shadow-xl rounded-sm border-b-8 border-teal-300">
              <p className="font-bold">{member.member}</p>
              <p className="text-gray-700">{member.designation}</p>
            </div>
            
          </Link>
          <div className="flex gap-4 justify-center text-2xl text-gray-400 [&>svg]:cursor-pointer  [&>svg]:transition-all [&>svg]:duration-150">
          <BsTwitter className="hover:text-sky-400"/>
          <BsFacebook className="hover:text-blue-600"/>
          <AiFillInstagram className="hover:text-rose-600"/>
          </div>
      </div>
        ))}

      
      </div>
    </div>
    </Container>
  )
}

export default OurTeam