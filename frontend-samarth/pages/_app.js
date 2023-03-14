import "../styles/globals.css";
import {  Source_Sans_Pro,Raleway } from "@next/font/google";
import Layout from "../components/layout/Layout";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["cyrillic"],
  })

export default function App({ Component, pageProps }) {
  // console.log(pageProps.services)
  return (
    <>
      <style jsx global>
        {`
          :root {
            --source-sans-pro: ${sourceSansPro.style.fontFamily};
            --source-raleway:${raleway.style.fontFamily}
          }
        `}
      </style>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </>
  );
}
