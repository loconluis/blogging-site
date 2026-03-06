import { motion } from "framer-motion";
import Layout from "@/Layout/Index";
import BlogRow from "@/components/BlogListRow";

interface IBlogList {
  posts: any[];
}

const BlogList = (props: IBlogList) => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#1d4ed8] dark:text-[#60a5fa]">
            Writing
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#1a1a1a] dark:text-[#f0ede8] mt-2 italic">
            Thoughts & Ideas
          </h2>
        </motion.div>

        {/* Blog List */}
        <div className="space-y-0">
          {props.posts.map((post, index) => {
            return (
              <BlogRow key={index} post={post} index={index} />
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-[#e8e4df] dark:border-[#2a2a2a]"
        >
          <p className="text-sm text-[#6b6b6b] dark:text-[#888] italic font-display">
            More coming soon...
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default BlogList;
