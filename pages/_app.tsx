import { DefaultSeo } from "next-seo";
import { useState, useEffect } from "react";
import SEO from "../next-seo.config";
import "@/styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
