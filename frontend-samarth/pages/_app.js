import "../styles/globals.css";
import { Source_Sans_3, Source_Sans_Pro } from "@next/font/google";

import Layout from "../components/layout/Layout";

const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --source-sans-pro: ${sourceSansPro.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
