import client from "@/sanity/client";

import PageBanner from "@/components/banners/PageBanner";
import EachBlog from "@/components/blog/EachBlog";
import BlogGrid from "@/components/blog/BlogGrid";
import { useEffect, useState } from "react";

// import useSWR


  
  const BlogsAndArticles = ({post}) => {

const [filteredData,setFilterData] = useState(post)


const blogSearchHandler = (e) =>{
  const {value} = e.target
 
    setFilterData(post.filter((post) => post.description.toLowerCase().includes(value.toLowerCase()) || post.title.toLowerCase().includes(value.toLowerCase()) ))

}




    return (
      <>
      <PageBanner/>
      <div className="sm:mt-10 px-2 md:px-14 mb-20  flex min-h-screen sm:divide-x flex-col-reverse sm:flex-row gap-6">

      {filteredData.length===0? <p className="text-center text-4xl w-full text-gray-500 mt-24 grow">No Blogs Found , Please try another keyword</p>:
      <div className="w-full">
        <div className="col-span-full w-full flex mb-10">
        <p className="md:text-2xl font-bold text-slate-700 px-2 md:px-0">Recent Blogs</p>
      </div> 
      <BlogGrid cols="2" >
        
        {filteredData.map((post) =>{
          return (
        
            <EachBlog post={post} key={post._id}/>
             
          )
        })} 
            </BlogGrid></div>}
        
            <div className="pl-2 lg:mt-12">
              <div className="sticky top-[80px] right-0 flex flex-col gap-2">
              <p className="text-xl font-semibold text-slate-600">Search Blogs</p>
              <input type="text" name="" id="" className="border p-1 focus:outline-none rounded-sm " onChange={blogSearchHandler}/>
            </div></div>
            </div>

            </>)
  }
  
  export default BlogsAndArticles

  export async function getStaticProps() {

    const post = await client.fetch(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))]{_id,title,description,mainImage,_createdAt,
       "slug":slug.current}`)

    return {
      props: {
        post
      }
    }
  }