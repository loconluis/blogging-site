import Avatar from "./Avatar";
import Social from "./Social";
import { parseISO, format } from "date-fns";

export default function Info({ frontMatter }) {
  return (
    <div className="blog-header">
      <h1 className="blog-title">{frontMatter.title}</h1>
      <div className="blog-info">
        <div className="blog-info-data">
          <Avatar size={"small"} />
          <p className="blog-info-data-author">{frontMatter.author}</p>
          <p className="blog-info-data-date">
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
          </p>
          <Social info />
        </div>
        <p className="blog-info-time">{frontMatter.readingTime.text}</p>
      </div>
    </div>
  );
}
