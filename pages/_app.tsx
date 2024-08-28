import { DefaultSeo } from "next-seo";
import { useState, useEffect } from "react";
import ThemeContext from "@/context/Theme";
import SEO from "../next-seo.config";
import "@/styles/style.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    function loadTheme() {
      const current = localStorage.getItem("currentThemeSelected") || "light";
      document.documentElement.setAttribute("data-theme", current);
      setTheme(current);
    }

    loadTheme();

    function cleanUp() {
      window.removeEventListener("DOMContentLoaded", () => {});
    }
    return cleanUp();
  }, []);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
