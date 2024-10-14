import { motion } from "framer-motion";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import Layout from "@/Layout/Index";

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
        </div>
        {props.posts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`}>
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
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </Layout>
  );
};

export default BlogList;
