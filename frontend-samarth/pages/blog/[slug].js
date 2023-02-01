import client from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from "@portabletext/react";
import { Truculenta } from "@next/font/google";


function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          />
        )
      }
    }
  }

  const Post = ({post}) => {

    const {mainImage,body,_createdAt} = post
    
      return (
        <div className="h-screen mx-20">
          {new Date(_createdAt).toDateString('en-US')}
          {mainImage? <img
                src={urlFor(mainImage)
                  .width(450)
                  .url()}
              />:null}
    
          <h1 className="text-xl font-bold"> {post.title}</h1>
          <p>{post.description}</p>
          <PortableText
            value={body}
            components={ptComponents}
          />
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