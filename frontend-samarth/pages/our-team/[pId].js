import Image from 'next/image'
import { useRouter } from 'next/router'


import { team } from '../../components/team/OurTeam'



const MyTeam = () => {
  
  const router = useRouter()
  const {pId} = router.query
  
  

  return (
    <div className="min-h-screen px-20">
      {team.filter(data => data.id === Number(pId)).map((data,index) => {
        return (
          <div className="flex gap-10 mt-8" key={index}>

          <div className="w-1/2  flex flex-col justify-center items-center">
        <Image src={data.image} className="aspect-square object-cover w-5/6 rounded-md"/>
        
        </div>
        <div className="flex flex-col w-1/2  text-lg ">
          <h2 className="self-start font-extrabold text-rose-600 text-2xl">{data.member}</h2>
          <p className="self-start font-medium text-slate-500">{data.designation}</p>
         <p className="mt-8 text-slate-600">{data.desc}</p>

          </div>
        </div>
        )
      })}
    </div>
  )
}

export default MyTeam