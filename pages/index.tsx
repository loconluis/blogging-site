import Head from "next/head";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Landing from "@/components/Landing";

export default function Index({ posts }) {
  const _posts = sortPost(posts);
  return (
    <>
      <Head>
        <title>Home - Luis Locon</title>
      </Head>
      <Landing />
    </>
  );
}

const sortPost = (posts) => {
  const _posts = posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
  return _posts;
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("/");
  return { props: { posts } };
}
