import { DefaultSeo } from "next-seo";
import { useState, useEffect } from "react";
import SEO from "../next-seo.config";
import "@/styles/style.css";
import "@/styles/dark-style.css";
import { ThemeProvider } from "@/components/components/theme-provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
