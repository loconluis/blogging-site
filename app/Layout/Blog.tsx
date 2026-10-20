"use client";

import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Info from "@/components/Info";
import MoreFromArchive from "@/components/MoreFromArchive";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import { getViews } from "@/lib/getViews";
import { useRevealOnScroll } from "@/components/home/useRevealOnScroll";

interface ILayoutProps {
  navigation?: { text: string; link: string };
  children: any;
  showFooterSocial?: boolean;
  frontMatter: any;
  posts?: { slug: string; title: string; publishedAt: string }[];
}

export default function Blog({ children, frontMatter, posts = [] }: ILayoutProps) {
  const [views, setViews] = useState(0);
  useRevealOnScroll();

  useEffect(() => {
    let alive = true;
    getViews(frontMatter.slug)
      .then((r) => alive && setViews(Number(r?.views) || 0))
      .catch(() => alive && setViews(0));
    return () => {
      alive = false;
    };
  }, [frontMatter.slug]);

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100svh" }}>
      <SiteNav />
      <main className="page">
        <div className="col">
          <Info frontMatter={frontMatter} views={views} />
          <div className="prose">{children}</div>
          <MoreFromArchive posts={posts} current={frontMatter.slug} />
        </div>
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}