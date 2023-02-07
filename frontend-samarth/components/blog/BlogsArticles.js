
import Image from "next/image"
import Link from "next/link"

import { MdArrowRightAlt } from "react-icons/md"
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"
import DivHeading from "../headings/DivHeading"

function urlFor(source){
  return imageUrlBuilder(client).image(source)
}




const BlogsArticles = ({post}) => {
  return (
    <div
     className="min-h-screen  md:mt-32 mb-10 flex flex-col items-center gap-4 py-10 px-2 lg:px-10 xl:px-20 ">
      <DivHeading title="Blogs & Articles"/>
        

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8 md:mt-12 relative">
            {post.map(post =>(
              <div key={post._id} className="max-w-md md:max-w-xl  flex w-full md:flex-row flex-col gap-2  group">
                <div className="w-full md:w-1/2 h-52 md:h-44 md:rounded-md overflow-hidden relative">
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
                <div className="md:w-1/2">
                <div className="flex flex-col md:gap-1 sm:gap-4 gap-2 md:p-2 h-full">
                  <h3 className="font-bold text-slate-600">{post.title}</h3>
                  <p className="text-gray-400">{post.description.slice(0,100)} ...</p>
                  <Link href={`/blog/${post.slug}`}className="text-rose-500 flex gap-2 items-center font-semibold mt-auto">Read More <MdArrowRightAlt/> </Link>
                </div>
                </div>
                
                
              </div>
            ))}
            <button className="absolute -bottom-14 right-0 text-lg  bg-transparent border border-rose-600 p-2 
            rounded-sm text-white bg-rose-600 transition-all duration-200 ease-linear hover:bg-rose-700"><Link href="/blogs-and-articles">View More</Link></button>
        </div>

    </div>
  )
}

export default BlogsArticles