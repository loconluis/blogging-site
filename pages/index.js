import Head from "next/head";
import MainPage from "../app/MainPage";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Index({ posts }) {
  const _posts = sortPost(posts);
  return (
    <>
      <Head>
        <title>Blog by Luis Locon</title>
      </Head>
      <MainPage posts={_posts} />
    </>
  );
}

const sortPost = (posts) => {
  const _posts = posts.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  return _posts;
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("/");
  return { props: { posts } };
}
