import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"
import { MdArrowRightAlt } from "react-icons/md"
import Image from 'next/image'

function urlFor(source){
    return imageUrlBuilder(client).image(source)
  }

const EachBlog = ({post,w="max-w-lg"}) => {
  return (
    <Link href={`/blog/${post.slug}`} className={`w-full ${w} rounded-md shadow-sm  hover:shadow-md overflow-hidden`}>
    <div className="flex w-full md:flex-row flex-col gap-2  group bg-gray-50">
                <div className="w-full md:w-5/12 h-52 md:h-44 md:rounded-l-md overflow-hidden relative">
                <Image alt="" width={320} height={240}
            src={urlFor(post.mainImage)
              .width(320)
              .url()}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
                <div className="absolute right-0 top-0  z-10 text-white bg-gradient-to-r from-teal-500  to-teal-700/90 p-2 rounded-sm uppercase text-xs">
                {new Date(post._createdAt).toDateString()}
                </div>
                </div>
                <div className="md:w-7/12">
                <div className="flex flex-col md:gap-2 sm:gap-4 gap-2 md:p-2 h-full">
                  <h3 className="font-semibold text-slate-700 group-hover:text-teal-400 transition-all duration-100">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.description.slice(0,100)} ...</p>
                  <p className="text-rose-500 flex gap-2 items-center font-semibold mt-auto">Read More <MdArrowRightAlt/> </p>
                </div>
                </div>
                
                
              </div>
              </Link>
  )
}

export default EachBlog