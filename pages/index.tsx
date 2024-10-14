import Head from "next/head";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import dynamic from "next/dynamic";

const DynamicBlogPage = dynamic(() => import("@/components/BlogList"), {
  loading: () => (
    <div className="h-screen w-full bg-slate-950 flex justify-center items-center">
      <p className="text-white">Loading posts...</p>,
    </div>
  ),
});

export default function Index({ posts }) {
  const _posts = sortPost(posts);
  return (
    <>
      <Head>
        <title>Home - Luis Locon</title>
      </Head>
      <DynamicBlogPage posts={posts} />
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
