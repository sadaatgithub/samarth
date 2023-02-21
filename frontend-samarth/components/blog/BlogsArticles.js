
import Link from "next/link"
import DivHeading from "../headings/DivHeading"
import EachBlog from "./EachBlog"
import BlogGrid from "./BlogGrid"




const BlogsArticles = ({post}) => {
  return (
    <div
     className="min-h-screen  md:mt-20 mb-20 flex flex-col items-center gap-4 py-10 px-2 lg:px-10 xl:px-20 ">
      <DivHeading title="Blogs & Articles"/>
        

        <BlogGrid>
            {post.map(post =>(
      
          <EachBlog post={post} key={post._id} w="max-w-lg"/>
            ))}
            <button className="absolute -bottom-14 right-0 text-lg  bg-transparent border border-rose-600 p-2 
            rounded-sm text-white bg-rose-600 transition-all duration-200 ease-linear hover:bg-rose-700"><Link href="/blogs-and-articles">View More</Link></button>
        </BlogGrid>

    </div>
  )
}

export default BlogsArticles