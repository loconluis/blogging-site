import Avatar from "./Avatar";
import Social from "./Social";
import { parseISO, format } from "date-fns";
import { motion } from "framer-motion";

export default function Info({ frontMatter, views }) {
  return (
    <div className="mt-10">
      <h1 className="blog-title">{frontMatter.title}</h1>
      <div className="blog-info mt-5">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="text-center mt-5">
          Total Views: <span className="pink">{views}</span>
        </div>
      </motion.div>
    </div>
  );
}
