import { motion } from "framer-motion";
import Link from "next/link";
import Social from "@/components/Social";
import { parseISO, format } from "date-fns";
import Layout from "@/Layout/Index";

interface IBlogList {
  posts: any[];
}

const BlogList = (props: IBlogList) => {
  return (
    <Layout
      title="Entries List"
      navigation={{
        link: "/",
        text: "Back Home",
      }}
      leftComponentInTitle={<Social />}
    >
      <motion.div
        className="flex flex-col gap-10 lineHeight:1.5 overflow-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-left">Year</th>
              <th className="text-left pl-5">Title</th>
            </tr>
          </thead>
          <tbody>
            {props.posts.map((post, index) => (
              <tr key={index}>
                <td className="w-5">
                  <span className="py-15">
                    {format(parseISO(post.publishedAt), "yyyy")}
                  </span>
                </td>
                <td>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.span
                      whileHover={"hover"}
                      variants={{
                        hover: {
                          backgroundColor: "#de1d8d",
                          scale: 1.06,
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="py-15 ml-5 mb-10 text-lg/2 md:text-xl text-center break-normal	text-slate-50 hover:underline"
                    >
                      {post.title}
                    </motion.span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Layout>
  );
};

export default BlogList;
