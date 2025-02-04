import { useEffect, useState } from "react";
import Info from "@/components/Info";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import Link from "next/link";
import { getViews } from "@/lib/getViews";

interface ILayoutProps {
  navigation?: {
    text: string;
    link: string;
  };
  children: any;
  showFooterSocial?: boolean;
  frontMatter: any;
}

export default function Blog({
  children,
  navigation,
  frontMatter,
}: ILayoutProps) {
  const [views, setViews] = useState(0);

  const _getViews = async () => {
    const res = await getViews(frontMatter.slug);
    setViews(res.views);
  };

  useEffect(() => {
    _getViews();
  }, []);

  return (
    <div
      id="main-blog-container"
      className="h-screen w-full flex flex-col items-center bg-slate-950 overflow-auto"
    >
      <div className="container text-slate-50 max-w-xs m-auto md:max-w-2xl">
        <div className="mt-10">
          <Link href={navigation?.link || "/"}>{navigation?.text}</Link>
        </div>
        <Info frontMatter={frontMatter} views={views} />
        <motion.div
          className="flex flex-col gap-10 lineHeight:1.5 my-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
      <ScrollToTop />
    </div>
  );
}
