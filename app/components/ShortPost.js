import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function ShortPost({ post }) {
  return (
    <div className="sp-item">
      <div>
        <span className="sp-item-date">
          {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
      <h2 className="sp-item-title">
        <Link href={`/blog/${post.slug}`}>
          <p className="sp-item-title-anchor">{post.title}</p>
        </Link>
      </h2>
      <p className="sp-item-description">{post.description}</p>
      <Link href={`/blog/${post.slug}`}>
        <p className="sp-item-anchor">Read</p>
      </Link>
    </div>
  );
}
