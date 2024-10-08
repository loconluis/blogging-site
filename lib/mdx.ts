import fs from "fs";
import matter from "gray-matter";
// import mdxPrism from 'mdx-prism'
import path from "path";
import readingTime from "reading-time";
// import renderToString from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

import MDXComponents from "../app/components/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "entries", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "entries", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "entries", `${type}.mdx`), "utf-8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "entries", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "entries", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content)?.minutes,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
