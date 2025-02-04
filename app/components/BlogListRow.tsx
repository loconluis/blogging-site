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
        className="flex flex-row border-b border-slate-500 py-4"
        whileHover={"hover"}
        whileTap={{ scale: 0.95 }}
        variants={{
          hover: {
            backgroundColor: "#de1d8d",
            scale: 1,
            color: "#fff",
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
      >
        <span className=" w-16 shrink-0 text-white">
          {format(parseISO(post.publishedAt), "yyyy")}
        </span>
        <span className="flex-grow break-before-all break-words text-white">
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
