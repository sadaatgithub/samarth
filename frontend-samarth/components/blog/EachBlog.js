import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"
import { MdArrowRightAlt } from "react-icons/md"


function urlFor(source){
    return imageUrlBuilder(client).image(source)
  }

const EachBlog = ({post}) => {
  return (
    <Link href={`/blog/${post.slug}`} className="w-full  rounded-md shadow-sm border border-transparent hover:shadow-md overflow-hidden">
    <div className="max-w-md md:max-w-xl   flex w-full md:flex-row flex-col gap-2  group bg-white">
                <div className="w-full md:w-5/12 h-52 md:h-44 md:rounded-l-md overflow-hidden relative">
                <img alt=""
            src={urlFor(post.mainImage)
              .width(320)
              .url()}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
                {/* <Image src={post.image} alt="" className="object-cover h-full group-hover:scale-110 transition-transform duration-500"/> */}
                <div className="absolute right-0 top-0  z-10 text-white bg-gradient-to-r from-teal-500  to-teal-500/90 p-2 rounded-sm uppercase text-xs">
                {new Date(post._createdAt).toDateString()}
                </div>
                </div>
                <div className="md:w-7/12">
                <div className="flex flex-col md:gap-1 sm:gap-4 gap-2 md:p-2 h-full">
                  <h3 className="font-bold text-slate-600">{post.title}</h3>
                  <p className="text-gray-400">{post.description.slice(0,100)} ...</p>
                  <p className="text-rose-500 flex gap-2 items-center font-semibold mt-auto">Read More <MdArrowRightAlt/> </p>
                </div>
                </div>
                
                
              </div>
              </Link>
  )
}

export default EachBlog