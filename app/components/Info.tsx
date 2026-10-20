import { parseISO, format } from "date-fns";

export default function Info({ frontMatter, views }) {
  const bits: string[] = [];
  try {
    bits.push(format(parseISO(frontMatter.publishedAt), "d MMMM yyyy"));
  } catch {
    /* a malformed date should not break the page */
  }
  if (frontMatter.readingTime?.text) bits.push(frontMatter.readingTime.text);
  if (views) bits.push(`${views.toLocaleString()} views`);

  return (
    <>
      <h1 className="post-title">{frontMatter.title}</h1>
      <p className="byline">
        <span>{frontMatter.author}</span>
        <span>{bits.join(" · ")}</span>
      </p>
    </>
  );
}