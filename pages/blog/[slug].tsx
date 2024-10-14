import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "@/lib/mdx";
import Head from "next/head";
import BlogLayout from "@/Layout/Blog";
import MDXComponents from "@/components/MDXComponents";

export default function BlogPage({ mdxSource, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} - Blog by Luis Locon</title>
      </Head>
      <BlogLayout
        navigation={{ link: "/", text: "Back to Entries" }}
        frontMatter={frontMatter}
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
  return { props: post };
}
