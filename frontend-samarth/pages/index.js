import Head from 'next/head'

import Introduction from '@/components/herosection/Introduction'
import OurServices from '@/components/services/OurServices'
import Testimonials from '@/components/testimonial/Testimonials'
import BlogsArticles from '@/components/blog/BlogsArticles'
import OurTeam from '@/components/team/OurTeam'

import sanityClient from "../sanity/client"
import HeroSlider from '@/components/herosection/HeroSlider'
import AppointmentBanner from '@/components/banners/AppointmentBanner'


export default function Home({post}) {
  return (
    <>
    
      <Head>
        <title>Samartha Physiotherapy & Rehab Clinic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/physiologo2.png" />
      </Head>

      <HeroSlider/>
      <Introduction/>
      <OurServices/>
      <OurTeam/>
      <Testimonials/>
      <AppointmentBanner/>
      <BlogsArticles post={post}/>
    </>
  )
}
export async function getStaticProps() {
  const post = await sanityClient.fetch(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))] 
  | order(_createdAt desc) {_id,title,description,mainImage,_createdAt,"categories": categories[]->title, "slug":slug.current}[0...6]`)

  // console.log(services)
  return {
    props: {
      post
    }
  }
}