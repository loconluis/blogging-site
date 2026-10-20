import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from "@/lib/mdx";
import Head from "next/head";
import BlogLayout from "@/Layout/Blog";
import MDXComponents from "@/components/MDXComponents";

export default function BlogPage({ mdxSource, frontMatter, posts }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Blog by Luis Locon</title>
      </Head>
      <BlogLayout
        navigation={{ link: "/", text: "Back to Entries" }}
        frontMatter={frontMatter}
        posts={posts}
      >
        <MDXRemote components={MDXComponents} {...mdxSource} />
      </BlogLayout>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("/");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("/", params.slug);
  const all = await getAllFilesFrontMatter("/");
  const posts = all
    .map((p) => ({ slug: p.slug, title: p.title, publishedAt: p.publishedAt }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return { props: { ...post, posts } };
}
