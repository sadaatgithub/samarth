import Navbar from "../header/Navbar"
import Footer from "../../components/footer/Footer"

export default function Layout({ children }) {
  return (
    <>
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}