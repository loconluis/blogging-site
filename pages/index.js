import Head from "next/head";
import MainPage from "../app/MainPage";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog by Luis Locon</title>
      </Head>
      <MainPage posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("/");
  return { props: { posts } };
}
