
import Link from "next/link"
import DivHeading from "../headings/DivHeading"
import EachBlog from "./EachBlog"
import BlogGrid from "./BlogGrid"
import Container from "../container/Container"




const BlogsArticles = ({post}) => {
  return (
    <Container>
    <div
     className="min-h-screen flex flex-col items-center gap-4">
      <DivHeading title="Blogs & Articles"/>
        
<div className="py-20 w-full flex justify-center">
        <BlogGrid>
            {post.map(post =>(
      
          <EachBlog post={post} key={post._id} w="max-w-3xl"/>
            ))}
            <button className="absolute -bottom-20 right-1/2 text-lg  bg-transparent border border-rose-600 p-2 
            rounded-sm text-white bg-rose-600 transition-all duration-200 ease-linear hover:bg-rose-700">
              <Link href="/blogs-and-articles">View More</Link></button>
        </BlogGrid>
        </div>

    </div>
    </Container>
  )
}

export default BlogsArticles