import Navbar from "../header/Navbar"
import Footer from "../../components/footer/Footer"

export default function Layout({ children }) {
  
  return (
    <>
    <div className="max-w-[1440px] mx-auto">
      <Navbar/>
      <main className="bg-none ">{children}</main>
      <Footer/>
      </div>
    </>
  )
}