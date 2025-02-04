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
        className="flex flex-col h-auto overflow-auto scroll-p-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-row border-b border-slate-500 pb-3">
          <span className="font-bold w-16">Date</span>
          <span className="font-bold flex-grow">Title</span>
          <span className="font-bold">Views</span>
        </div>
        {props.posts.map((post, index) => {
          return <BlogRow key={index} post={post} />;
        })}
      </motion.div>
    </Layout>
  );
};

export default BlogList;
