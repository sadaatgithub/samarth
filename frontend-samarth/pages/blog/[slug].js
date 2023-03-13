import client from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import RichTextComponent from "../../components/richtext/RichTextComponent";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaUserCircle, FaWhatsapp } from "react-icons/fa";
import SocialShare from "@/lib/SocialShare";
import BlogsAndArticles from "../blogs-and-articles";

const Post = ({ post }) => {
  const { mainImage, body, _createdAt } = post;

  return (
<>
<div className="md:h-[450px] overflow-hidden relative shadow-lg">
        {mainImage ? (
          <Image
            className="w-full object-cover"
            width={480}
            height={320}
            alt={post.title}
            src={urlFor(mainImage).width(480).height(320).url()}
            
          />
        ) : (
          ""
        )}
        <div
          className="text-lg md:text-2xl font-bold text-white z-10 absolute  bg-black/70  md:py-8 px-2
        inset-0 flex items-center justify-center break-words"
        >
        <div className="flex flex-col md:w-2/3 justify-center items-center">
          <h2 className="text-3xl lg:text-5xl text-center">{post.title}</h2>
          <p className="mt-12 text-base font-medium">
          {new Date(_createdAt).toDateString("en-US")}</p>

        </div>
        </div>
        
      </div>
    <div className="min-h-screen  mb-10 mt-16 max-w-[768px] mx-auto px-4">
      
      <div className="mt-10 flex items-center gap-4 text-gray-500">
        <FaUserCircle className="" />
        <span>By {post.author}</span>{" "}
        <span>
          Category -{" "}
          {post.categories?.map((category) => {
            return <span key={category}>{category} </span>;
          })}
        </span>
        <div className="flex ml-auto gap-4 [&>svg]:cursor-pointer ">
          {/* <FaInstagram className="text-rose-500"/>
          <FaFacebook className="text-blue-700"/>
          <FaWhatsapp className="text-emerald-500"/> */}
          <SocialShare/>
          </div>
      </div>

      {/* <p>{post.description}</p> */}
      <div className="mt-10 [&>p]:text-slate-500 [&>p]:mb-4">
        <PortableText value={body} components={RichTextComponent} />
      </div>

      <div className="mt-16 flex flex-col justify-center items-center gap-4 ">
        <p className="text-xl font-semibold">Share this post</p>
        <div className="flex pt-4 [&>svg]:cursor-pointer ">
        <SocialShare/>

          </div>
          <div className="flex gap-6 py-12 [&>span]:bg-gray-200 [&>span]:px-2">
          <span>Tag 1</span><span>Tag 2</span><span>Tag 3</span>
          </div>

      </div>
    </div>
    {/* <BlogsAndArticles/> */}
</>

  );
};

export default Post;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await client.fetch(
    '*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**")) && slug.current == $slug][0]{...,"author": author->name,"categories": categories[]->title,"slug":slug.current}',
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
