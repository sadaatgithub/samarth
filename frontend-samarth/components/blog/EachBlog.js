import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"
import Image from 'next/image'
import { motion as m } from "framer-motion"
import { fadeIn } from "../../lib/Animation"


function urlFor(source){
    return imageUrlBuilder(client).image(source)
  }



const EachBlog = ({post,w="max-w-lg",idx}) => {
  return (
    <m.div variants={fadeIn("up", "tween", idx*0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} 
    className={`w-full ${w} rounded-sm border border-transparent  overflow-hidden group hover:border-gray-200`}>
    <Link href={`/blog/${post.slug}`} className={``}>
    
    <div className="flex flex-col h-full">
      <div className="overflow-hidden">
    <Image alt="" width={320} height={240}
            src={urlFor(post.mainImage)
              .width(320)
              .url()}
              className="object-cover w-full h-[250px]  group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300"
          /></div>
          <div className="flex flex-col gap-2 px-2 mt-6">
            <p className="text-sm font-semibold text-rose-500 flex gap-1">{post.categories?  post.categories?.map(category => <span key={category} className="">{category} &nbsp;</span>) :"Uncategorised" }</p>
            <h5 className="text-2xl font-semibold text-slate-700 hover:text-teal-500 transition-all duration-300">{post.title}</h5>
            <p className="text-gray-500">{post.description}</p>
          </div>  
          <div className="flex gap-4  p-2 mt-auto pt-6">
           
            <p className="text-lg text-teal-500 tracking-wide">Read More</p>
          </div>

    </div>
    
   
              </Link>
              </m.div>
  )
}

export default EachBlog