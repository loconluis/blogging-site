import useViews from "../hooks/useViews";
import Avatar from "./Avatar";
import Social from "./Social";
import { parseISO, format } from "date-fns";

export default function Info({ frontMatter, views }) {
  const newViews = useViews(frontMatter.slug);

  console.log("> newViews", newViews);
  return (
    <div className="mt-10">
      <h1 className="blog-title">{frontMatter.title}</h1>
      <div className="blog-info">
        <div className="blog-info-data mt-5">
          <Avatar size={"small"} />
          <p className="blog-info-data-author">{frontMatter.author}</p>
          <p className="blog-info-data-date">
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
          </p>
          {/* <Social info /> */}
          <p className="pl-2 blog-info-time">{frontMatter.readingTime.text}</p>
          <p className="pl-2 blog-info-time text-center">Views: {views}</p>
        </div>
      </div>
    </div>
  );
}
