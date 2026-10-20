import Link from "next/link";
import { parseISO, format } from "date-fns";

export interface ArchivePost {
  slug: string;
  title: string;
  publishedAt: string;
  topic?: string;
  readingTime?: number;
}

function meta(post: ArchivePost) {
  const bits: string[] = [];
  if (post.topic) bits.push(post.topic);
  try {
    bits.push(format(parseISO(post.publishedAt), "d MMM"));
  } catch {
    /* keep the row readable if a date is malformed */
  }
  if (post.readingTime) bits.push(`${Math.max(1, Math.round(post.readingTime))} min`);
  return bits.join(" · ");
}

/** The whole notebook, grouped by year, one line per piece. */
export default function Archive({ posts }: { posts: ArchivePost[] }) {
  const years: { year: string; posts: ArchivePost[] }[] = [];
  for (const post of posts) {
    const year = post.publishedAt.slice(0, 4);
    const last = years[years.length - 1];
    if (last && last.year === year) last.posts.push(post);
    else years.push({ year, posts: [post] });
  }

  return (
    <section className="archive" id="writing" aria-labelledby="writing-h">
      <h2 id="writing-h" className="section-head">
        Writing
      </h2>
      {years.map((group) => (
        <div className="year-group" key={group.year}>
          <div className="year reveal">{group.year}</div>
          <div>
            {group.posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="post-row reveal"
                data-d={String(i % 5)}
              >
                <span className="t">{post.title}</span>
                <span className="m">{meta(post)}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}