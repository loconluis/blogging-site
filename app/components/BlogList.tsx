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
        className="flex flex-col justify-center min-h-[calc(100vh-200px)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-row border-b border-neutral-200 dark:border-neutral-800 pb-3">
          <span className="font-medium w-16 text-neutral-900 dark:text-neutral-50">Date</span>
          <span className="font-medium flex-grow text-neutral-900 dark:text-neutral-50">Title</span>
          <span className="font-medium text-neutral-900 dark:text-neutral-50">Views</span>
        </div>
        {props.posts.map((post, index) => {
          return <BlogRow key={index} post={post} />;
        })}
      </motion.div>
    </Layout>
  );
};

export default BlogList;
