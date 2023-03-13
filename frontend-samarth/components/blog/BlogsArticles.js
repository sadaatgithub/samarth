
import Link from "next/link"
import DivHeading from "../headings/DivHeading"
import EachBlog from "./EachBlog"
import BlogGrid from "./BlogGrid"
import Container from "../container/Container"



const BlogsArticles = ({post}) => {
  return (
    <Container bg="">
    <div
     className="min-h-screen flex flex-col items-center gap-4 bg-[url('../public/knee.svg')] bg-no-repeat  bg-[90%] bg-fixed">
      <DivHeading title="Blogs & Articles"/>
        
<div className="py-20 w-full flex justify-center">
        <BlogGrid cols="md:grid-cols-2 lg:grid-cols-3"> 
            {post.map((post,idx) =>(
      
          <EachBlog post={post} idx={idx} key={post._id} w="max-w-lg"/>
            ))}
            <button className="absolute -bottom-20 right-0 text-lg  bg-transparent border border-rose-600 p-2 
            rounded-sm text-white bg-rose-600 transition-all duration-200 ease-linear hover:bg-rose-700">
              <Link href="/blogs-and-articles">View More</Link></button>
        </BlogGrid>
        </div>

    </div>
    </Container>
  )
}

export default BlogsArticles


