import client from "@/sanity/client";

import PageBanner from "@/components/banners/PageBanner";
import EachBlog from "@/components/blog/EachBlog";
import BlogGrid from "@/components/blog/BlogGrid";




  
  const index = ({post}) => {
    return (
      <>
      <PageBanner/>
      <div className="px-2 md:px-10 mb-20 lg:px-20 flex flex-col items-center">
        <BlogGrid>
        {post.map((post) =>{
          return (
        
            <EachBlog post={post} key={post._id}/>
             
          )
        })}
            </BlogGrid>
            </div>
            </>)
  }
  
  export default index

  export async function getStaticProps() {

    const post = await client.fetch(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))]{_id,title,description,mainImage,_createdAt,
       "slug":slug.current}`)

    return {
      props: {
        post
      }
    }
  }