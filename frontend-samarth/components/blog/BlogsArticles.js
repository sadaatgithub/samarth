
import Image from "next/image"
import Link from "next/link"
import Food from "../../public/food.jpg"
import Theraband from "../../public/theraband.jpg"
import Bone from "../../public/bones.jpg"
import { MdArrowRightAlt } from "react-icons/md"
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"

function urlFor(source){
  return imageUrlBuilder(client).image(source)
}
export const blogs = [
  {
    id:1,
    title:"Why Your Bones Become More and More Brittle as You Age",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, laboriosam?",
    image:Bone,
    date:"12, JAN, 2023"
  },
  {
    id:2,
    title:"Do This Activity and Exercise To Avoid A BAd Posture",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, in.",
    image:Theraband,
    date:"05, Jan, 2021"
  },
  {
    id:3,
    title:"Pro Tips:Maintain Your Bones Strength With This Food and Drink",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sunt.",
    image:Food,
    date:"22, Apr, 2022"
  },
  {
    id:4,
    title:"This New Item Will Help You to Adjust Your Body",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, reiciendis.",
    image:Theraband,
    date:"15, Aug, 2021"
  }
]



const BlogsArticles = ({post}) => {
  return (
    <div className="min-h-screen mt-12 flex flex-col items-center gap-4 py-10 px-2 lg:px-20">
        <div className="mt-20  self-start flex gap-3">
           <h2 className="text-2xl lg:text-4xl text-slate-700 font-semibold drop-shadow-md">Blogs and Articles</h2>
           <div className="w-12 h-[3px] bg-rose-500 mt-auto mb-1 rounded-lg"></div>
            </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 md:mt-12">
            {post.map(post =>(
              <div key={post._id} className="md:cols-span-2 flex w-full md:flex-row flex-col gap-2 place-items-center group">
                <div className="md:w-1/2 h-44 rounded-md overflow-hidden relative">
                <img
            src={urlFor(post.mainImage)
              .width(320)
              .url()}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
                {/* <Image src={post.image} alt="" className="object-cover h-full group-hover:scale-110 transition-transform duration-500"/> */}
                <div className="absolute right-0 top-0  z-10 text-white bg-teal-500 p-2 rounded-sm uppercase text-xs">
                {new Date(post._createdAt).toDateString()}
                </div>
                </div>
                <div className="md:w-1/2">
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-base font-bold text-slate-600">{post.title}</h3>
                  <p className="text-gray-400">{post.description}</p>
                  <Link href={`/blog/${post.slug}`}className="text-rose-500 flex gap-2 items-center">Read More <MdArrowRightAlt/> </Link>
                </div>
                </div>
                
                
              </div>
            ))}
        </div>

    </div>
  )
}

export default BlogsArticles