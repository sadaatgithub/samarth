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
    <div className="flex w-full md:flex-row flex-col gap-8 xl:h-[255px] group bg-gray-50 items-stretch">
                <div className="md:w-[250px] aspect-video  md:rounded-l-md overflow-hidden relative ">
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
                <div className="md:w-7/12 flex flex-col gap-6 py-2 grow">
                <div className="flex flex-col gap-2  px-1 h-full">
                  <p className="text-sm font-semibold text-gray-600">Category</p>
                  <h5 className="text-xl font-medium text-slate-700 group-hover:text-teal-400 transition-all duration-100">{post.title}</h5>
                  <p className="text-gray-400">{post.description.slice(0,80)} ...</p>
                  {/* <p className="text-rose-500 flex gap-2 items-center font-semibold mt-auto">Read More <MdArrowRightAlt/> </p> */}
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-gray-800">Full Name</p>

                    <p className="text-xs text-gray-500">dd/mm/yyyy<span></span> | <span>5 min read</span></p>
                  </div>
                </div>
                </div>
                
                
              </div>
              </Link>
  )
}

export default EachBlog