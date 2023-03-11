import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import client from "@/sanity/client"
import Image from 'next/image'

function urlFor(source){
    return imageUrlBuilder(client).image(source)
  }

const EachBlog = ({post,w="max-w-lg"}) => {
  return (
    <Link href={`/blog/${post.slug}`} className={`w-full ${w} rounded-sm   overflow-hidden group hover:shadow-lg`}>
    
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
            <h5 className="text-2xl font-semibold text-slate-700 hover:text-teal-400 transition-all duration-300">{post.title}</h5>
            <p className="text-slate-400">{post.description}</p>
          </div>  
          <div className="flex gap-4  p-2 mt-auto pt-6">
            {/* <Link></Link> */}
            {/* <div className="w-14 h-14 bg-gray-100 rounded-full"></div>
            <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-gray-800">Full Name</p>
            <p className="text-xs text-gray-500">dd/mm/yyyy<span></span> | <span>5 min read</span></p>
            </div> */}
            <p className="text-lg text-teal-400 tracking-wide">Read More</p>
          </div>

    </div>
    
   
              </Link>
  )
}

export default EachBlog