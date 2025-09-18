import Avatar from "./Avatar";
import Social from "./Social";
import { parseISO, format } from "date-fns";
import { motion } from "framer-motion";

export default function Info({ frontMatter, views }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight">
        {frontMatter.title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <Avatar size={"small"} />
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
              {frontMatter.author}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Social info />
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {frontMatter.readingTime.text}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-center mt-6"
      >
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Total Views: <span className="font-medium text-neutral-900 dark:text-neutral-50">{views}</span>
        </p>
      </motion.div>
    </div>
  );
}
