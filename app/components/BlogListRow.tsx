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
  index?: number;
};

const BlogListRow = ({ post, index = 0 }: Props) => {
  const [views, setViews] = useState(0);

  const _getViews = async () => {
    const res = await getViews(post.slug, 0);
    setViews(res.views);
  };

  useEffect(() => {
    _getViews();
  }, [post]);

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
        className="relative py-5 border-b border-[#e8e4df] dark:border-[#2a2a2a] transition-all duration-300 group-hover:border-transparent"
      >
        {/* Hover background */}
        <div className="absolute inset-0 -mx-6 md:-mx-8 bg-[#f5f2ed] dark:bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        {/* Content */}
        <div className="relative flex flex-row items-start gap-4 md:gap-6">
          {/* Date */}
          <div className="w-14 md:w-16 shrink-0 pt-1">
            <span className="text-xs font-medium text-[#888] dark:text-[#666] tabular-nums">
              {format(parseISO(post.publishedAt), "yyyy")}
            </span>
          </div>

          {/* Title and metadata */}
          <div className="flex-grow min-w-0">
            <h3 className="font-display text-lg md:text-xl text-[#1a1a1a] dark:text-[#f0ede8] group-hover:text-[#1d4ed8] dark:group-hover:text-[#60a5fa] transition-colors duration-300 leading-snug">
              {post.title}
            </h3>

            {/* Metadata row */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-[#888] dark:text-[#666]">
                {views > 0 ? `${views} views` : "New"}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#e8e4df] dark:bg-[#2a2a2a]" />
              <span className="text-xs text-[#888] dark:text-[#666]">
                {format(parseISO(post.publishedAt), "MMM d")}
              </span>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
            <svg
              className="w-5 h-5 text-[#1d4ed8] dark:text-[#60a5fa]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogListRow;
