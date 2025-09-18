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
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
      {/* Blog Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm z-50">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={navigation?.link || "/"}
              className="text-base font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              ← {navigation?.text || "Back to Entries"}
            </Link>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {views} views
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-24">
        <div className="container mx-auto max-w-3xl px-8">
          <Info frontMatter={frontMatter} views={views} />

          <motion.div
            className="flex flex-col gap-8 leading-relaxed my-8 text-neutral-900 dark:text-neutral-50 blog-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
