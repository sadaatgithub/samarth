import client from "@/sanity/client";

import PageBanner from "@/components/banners/PageBanner";
import EachBlog from "@/components/blog/EachBlog";
import BlogGrid from "@/components/blog/BlogGrid";
import { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import Filter from "@/lib/Filter";
import { FaSearch } from "react-icons/fa";

// import useSWR


  
  const BlogsAndArticles = ({post}) => {

const [filteredData,setFilterData] = useState(post)
const [activeCategory, setActiveCategory] = useState("All")

const categories = post.map((post) => post.categories)




const setCategory = (category) =>{
  if(category === "All"){
    setFilterData(post)
    setActiveCategory("All")
  } else{
  setFilterData(post.filter(post => {
    return post.categories?.some((cat) => cat === category)
  }))
  setActiveCategory(category)

}


}




const blogSearchHandler = (e) =>{
  const {value} = e.target
 
    setFilterData(post.filter((post) => post.description.toLowerCase().includes(value.toLowerCase()) || post.title.toLowerCase().includes(value.toLowerCase()) ))

}




    return (
      <>
      <PageBanner/>
      <Container>
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-gray-800 font-semibold">Browse our latest Blogs and articles</h1>
        </div>
        <div className="mt-20">
          <div className="flex sm:flex-row flex-col md:gap-2 justify-between sticky top-[70px] z-[20] bg-white ">
           <Filter categories={categories} setCategory={setCategory} activeCategory={activeCategory}/>
            <div className="flex items-center text-gray-500 border overflow-hidden rounded-sm">
              <div className="h-full grid place-items-center w-24 bg-gray-200 p-3 border-r">
              <FaSearch className=""/>
              </div>
            
            <input type="text" name="" id="" placeholder="Search" className="border p-2 focus:outline-none border-none w-full" onChange={blogSearchHandler}/>

            </div>
          </div>
          <div className="mt-16 min-h-screen">
            {filteredData.length===0? <p className="text-center text-lg md:text-4xl w-full text-gray-500 mt-24 grow">No Blogs Found , Please try another keyword</p>:
          <BlogGrid cols="md:grid-cols-2 lg:grid-cols-3">
        
        {filteredData.map((post,idx) =>{
          return (
        
            <EachBlog post={post} key={post._id} idx={idx}/>
             
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
       "slug":slug.current,"author": author->name,"categories": categories[]->title}`)

    return {
      props: {
        post
      }
    }
  }