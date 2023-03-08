import client from "@/sanity/client";

import PageBanner from "@/components/banners/PageBanner";
import EachBlog from "@/components/blog/EachBlog";
import BlogGrid from "@/components/blog/BlogGrid";
import { useEffect, useState } from "react";
import Container from "@/components/container/Container";

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
      <Container>
        <div className="flex justify-center">
          <h1 className="text-5xl text-gray-600 font-semibold">Browse our latest Blogs and articles</h1>
        </div>
        <div className="mt-20">
          <div className="flex lg:flex-row flex-col md:gap-2 justify-between sticky top-[70px] bg-white/90 z-[120]  backdrop-blur-sm border-b">
           <div className="[&>button]:px-4 [&>button]:py-2 flex md:gap-2 justify-center"> <button className="bg-gray-200">View All</button>
            <button>Category 1</button>
            <button>Cstegory 2</button>
            <button>Category 3</button>
            </div>
            <div className="flex justify-center items-center gap-2 bg-gray-200 px-2 rounded-md">
            <p className="font-semibold text-slate-600 p-2">Search</p>
            <input type="text" name="" id="" className="border p-1 focus:outline-none rounded-sm " onChange={blogSearchHandler}/>

            </div>
          </div>
          <div className="mt-16 min-h-screen">
            {filteredData.length===0? <p className="text-center text-lg md:text-4xl w-full text-gray-500 mt-24 grow">No Blogs Found , Please try another keyword</p>:
          <BlogGrid cols="grid-cols-3">
        
        {filteredData.map((post) =>{
          return (
        
            <EachBlog post={post} key={post._id}/>
             
          )
        })} 
            </BlogGrid>}
          </div>
        </div>
      </Container>
     

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