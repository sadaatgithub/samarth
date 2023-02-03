import client from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "../../components/richtext/RichTextComponent"
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
// function urlFor (source) {
//     return imageUrlBuilder(client).image(source)
//   }

  // const ptComponents = {
  //   types: {
  //     image: ({ value }) => {
  //       if (!value?.asset?._ref) {
  //         return null
  //       }
  //       return (
  //         <Image
  //           alt={value.alt || ' '}
  //           loading="lazy"
  //           src={urlFor(value).width(320).height(240).fit('max').auto('format')}
  //         />
  //       )
  //     }
  //   },
  // }

  const Post = ({post}) => {

    const {mainImage,body,_createdAt} = post
    
      return (
        <div className="min-h-screen mx-20 mb-10 w-2/3 mt-12">
          <div className="h-[420px] overflow-hidden relative shadow-lg">
          {mainImage? <img className="w-full"
                src={urlFor(mainImage).width(480).height(320)
                  .url()}
              />:""}
          <div className="text-3xl font-bold text-white z-10 absolute bottom-0 bg-black/70 right-0 py-8
        left-0 flex items-center justify-center break-words"> <h1 className="">{post.title}</h1></div>
        <span className="z-10 absolute top-0 right-0 p-2 bg-rose-500 text-white">{new Date(_createdAt).toDateString('en-US')}</span>
    </div>
    <div className="mt-10 flex items-center gap-4 text-gray-500">
    <FaUserCircle className=""/><span>By Admin</span>
    </div>


          {/* <p>{post.description}</p> */}
          <div className="mt-10">
          <PortableText
            value={body}
            components={RichTextComponent}
          /></div>
        </div>
      )
    }
    
    export default Post;
    
    export const getStaticProps = async (context) => {
      const { slug } = context.params;
      const post = await client.fetch(
        '*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**")) && slug.current == $slug][0]{..., "slug":slug.current}',
        { slug }
      );
    
      return {
        props: { post },
      };
    };
    
    export const getStaticPaths = async () => {
      const paths = await client.fetch(
        '*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))]{"params":{"slug":slug.current}}'
      );
      return {
        paths,
        fallback: false,
      };
    };