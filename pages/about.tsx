import Head from "next/head";
import AboutPage from "@/components/About";
export default function about() {
  return (
    <>
      <Head>
        <title>About me - Blog by Luis Locon </title>
      </Head>
      <AboutPage />
    </>
  );
}
