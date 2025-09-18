import Head from "next/head";
import Layout from "@/app/Layout/Index";
import PortfolioPage from "@/components/Portfolio";

export default function portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Luis Locon</title>
        <meta name="description" content="Developer portfolio showcasing projects and work" />
      </Head>
      <Layout>
        <PortfolioPage />
      </Layout>
    </>
  );
}