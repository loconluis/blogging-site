import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import Head from "next/head";
import BlogLayout from "../../app/Layout/Blog";
import MDXComponents from "../../app/components/MDXComponents";

export default function BlogPage({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      <Head>
        <title>{frontMatter.title} - Blog by Luis Locon</title>
      </Head>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
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