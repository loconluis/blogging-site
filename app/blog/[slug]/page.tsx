import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogLayout from "@/Layout/Blog";
import MDXComponents from "@/components/MDXComponents";
import { getAllFilesFrontMatter, getFileBySlug, getFiles, getPostFrontMatter } from "@/lib/mdx";

export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await getFiles("/");
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

function asDateString(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostFrontMatter(params.slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const title = `${post.title} - Blog by Luis Locon`;

  return {
    title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      locale: "en_US",
      siteName: "Luis Locon",
      publishedTime: post.publishedAt || undefined,
      authors: [post.author || "Luis Locon"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@loconluis",
      creator: "@loconluis",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const matter = getPostFrontMatter(params.slug);
  if (!matter) notFound();

  const post = await getFileBySlug("/", params.slug);
  const all = await getAllFilesFrontMatter("/");
  const posts = all
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      publishedAt: asDateString(item.publishedAt),
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const frontMatter = {
    ...post.frontMatter,
    title: matter.title,
    publishedAt: matter.publishedAt,
    description: matter.description,
    author: matter.author,
    topic: matter.topic,
    slug: matter.slug,
  };

  return (
    <BlogLayout frontMatter={frontMatter} posts={posts}>
      <MDXRemote source={post.content} components={MDXComponents} />
    </BlogLayout>
  );
}
