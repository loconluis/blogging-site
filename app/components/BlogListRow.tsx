import { motion } from "framer-motion";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { useEffect, useState } from "react";
import { getViews } from "@/lib/getViews";

type Props = {
  post: {
    slug: string;
    publishedAt: string;
    title: string;
  };
};

const BlogListRow = ({ post }: Props) => {
  const [views, setViews] = useState(0);

  const _getViews = async () => {
    const res = await getViews(post.slug, 0);
    setViews(res.views);
  };

  useEffect(() => {
    _getViews();
  }, [post]);

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.div
        className="flex flex-row border-b border-neutral-200 dark:border-neutral-800 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
        whileHover={"hover"}
        whileTap={{ scale: 0.95 }}
        variants={{
          hover: {
            backgroundColor: "neutral",
            scale: 1,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
        }}
      >
        <span className=" w-16 shrink-0 text-neutral-600 dark:text-neutral-400">
          {format(parseISO(post.publishedAt), "yyyy")}
        </span>
        <span className="flex-grow break-before-all break-words text-neutral-900 dark:text-neutral-50">
          {post.title}
        </span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {views}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default BlogListRow;
