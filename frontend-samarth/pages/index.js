import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import HeroSlider from '@/components/herosection/HeroSlider'
import Introduction from '@/components/herosection/Introduction'
import OurServices from '@/components/services/OurServices'
import Testimonials from '@/components/testimonial/Testimonials'
import BlogsArticles from '@/components/blog/BlogsArticles'
import OurTeam from '@/components/team/OurTeam'
// const inter = Inter({ subsets: ['latin'] })

import sanityClient from "../sanity/client"


export default function Home({post}) {
  return (
    <>
      <Head>
        <title>Samarth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSlider/>
      <Introduction/>
      <OurServices/>
      <OurTeam/>
      <Testimonials/>
      <BlogsArticles post={post}/>
    </>
  )
}
export async function getStaticProps() {
  const post = await sanityClient.fetch(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))]{_id,title,description,mainImage,_createdAt, "slug":slug.current}[0..4]`)
  return {
    props: {
      post
    }
  }
}