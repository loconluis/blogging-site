import fs from "fs";
import matter from "gray-matter";
// import mdxPrism from 'mdx-prism'
import path from "path";
import readingTime from "reading-time";

const root = process.cwd();

export interface PostFrontMatter {
  slug: string;
  title: string;
  publishedAt: string;
  description?: string;
  author?: string;
  topic?: string;
  readingTime?: number;
}

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "entries", type));
}

/** Frontmatter only. Share cards and post metadata do not need a compiled MDX body. */
export function getPostFrontMatter(slug: string): PostFrontMatter | null {
  if (!/^[A-Za-z0-9_-]+$/.test(slug)) return null;
  const file = path.join(root, "entries", `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const source = fs.readFileSync(file, "utf8");
  const { data } = matter(source);
  const publishedAt = data.publishedAt;
  const author = typeof data.author === "string" ? data.author.trim() : "";

  return {
    slug,
    title: typeof data.title === "string" && data.title.trim() ? data.title : slug,
    publishedAt:
      publishedAt instanceof Date
        ? publishedAt.toISOString().slice(0, 10)
        : String(publishedAt ?? ""),
    description: typeof data.description === "string" ? data.description : undefined,
    author: author || "Luis Locon",
    topic: typeof data.topic === "string" ? data.topic : undefined,
  };
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "entries", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "entries", `${type}.mdx`), "utf-8");

  const { data, content } = matter(source);

  return {
    content,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string): Promise<PostFrontMatter[]> {
  const files = fs.readdirSync(path.join(root, "entries", type));

  return files.reduce<PostFrontMatter[]>((allPosts, postSlug) => {
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
      } as PostFrontMatter,
      ...allPosts,
    ];
  }, []);
}
