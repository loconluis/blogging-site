import Head from "next/head";
import BlogPage from "@/components/BlogList";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Blog({ posts }) {
  const _posts = sortPost(posts);
  return (
    <>
      <Head>
        <title>Blog - Posts - Blog by Luis Locon</title>
      </Head>
      <BlogPage posts={posts} />
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
