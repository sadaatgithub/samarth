import Image from 'next/image'
import { useRouter } from 'next/router'


import { team } from '../../components/team/OurTeam'
 import PageBanner from '@/components/banners/PageBanner'
import Container from '@/components/container/Container'


const MyTeam = () => {
  
  const router = useRouter()
  const {pId} = router.query
  
  

  return (
    <>
      <PageBanner/>
    <Container>
      {team.filter(data => data.id === Number(pId)).map((data,index) => {
        return (
          <div className="flex flex-col md:flex-row gap-10 mt-8 mb-10" key={index}>

          <div className="md:w-1/2 h-[300px] md:h-[405px] flex flex-col justify-center items-center overflow-hidden">
        <Image src={data.image} alt={data.member} className="w-full object-cover rounded-md"/>
        
        </div>
        <div className="flex flex-col md:w-1/2">
          <h2 className="self-start font-extrabold text-rose-600 text-2xl">{data.member}</h2>
          <p className="self-start  text-gray-500">{data.designation}</p>
         <p className="mt-8 text-slate-600">{data.desc}</p>

          </div>
        </div>
        )
      })}
    </Container>
    </>)
}

export default MyTeam