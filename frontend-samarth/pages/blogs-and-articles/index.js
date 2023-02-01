import client from "@/sanity/client";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { MdArrowRightAlt } from "react-icons/md";


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

  
  const index = ({post}) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-8 px-2 lg:px-20 bg-gray-50 w-full mb-12 py-16">
        {post.map((post) =>{
          return (
        
            
              <div key={post._id} className="md:col-span-1 flex md:flex-row flex-col gap-2  group bg-white">
                <div className="md:w-1/2 h-48 rounded-l-md overflow-hidden relative">
                <img
                    src={urlFor(post.mainImage)
                      .width(320)
                      .url()}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                {/* <Image  
                src={urlFor(post.mainImage)
                        .width(150)
                        .url()} alt="" className="object-cover h-full group-hover:scale-110 transition-transform duration-500"/> */}
                <div className="absolute right-0 top-0  z-10 text-white bg-teal-500 p-2 rounded-sm uppercase text-xs">
                {new Date(post._createdAt).toDateString()}
                </div>
                </div>
                <div className="md:w-1/2">
                <div className="flex flex-col gap-2 p-4">
                  <h3 className="text-base font-bold text-slate-600">{post.title}</h3>
                  <p className="text-gray-400">{post.description.slice(1,120)}</p>
                  <Link href={`/blog/${post.slug}`}className="text-rose-500 flex gap-2 items-center">Read More <MdArrowRightAlt/> </Link>
                </div>
                </div>
                
                
              </div>
         
          // <div class="max-w-sm">
          //  <img
          //           src={urlFor(post.mainImage)
          //             .width(150)
          //             .url()}
          //             className="object-cover"
          //         />
          // <h1 className="text-lg text-slate-900 font-bold mt-4">{post.title}</h1>
          // <p>{post.description}</p>
          // <Link href={`/blog/${post.slug}`}>Read more</Link>
          // </div>
          )
        })}
            </div>
    )
  }
  
  export default index

  export async function getStaticProps() {

    const post = await client.fetch(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))]{title,description,mainImage,_createdAt, "slug":slug.current}`)
    console.log(post)
    return {
      props: {
        post
      }
    }
  }