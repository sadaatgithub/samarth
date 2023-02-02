import Testimonials from "@/components/testimonial/Testimonials"
import OurTeam from "@/components/team/OurTeam"
import About from "@/components/about/About"
import PageBanner from "@/components/banners/PageBanner"
import { useRouter } from "next/router"

const index = () => {


  return (
    <div>
      <PageBanner/>
      <About/>
        <OurTeam/>
        <Testimonials/>
    </div>
  )
}

export default index