import { getAllFilesFrontMatter } from "@/lib/mdx";
import { useRevealOnScroll } from "@/components/home/useRevealOnScroll";
import SiteNav from "@/components/SiteNav";
import Greeting from "@/components/home/Greeting";
import Archive from "@/components/home/Archive";
import AboutStrip from "@/components/home/AboutStrip";
import SiteFooter from "@/components/home/SiteFooter";

export default function Index({ posts }) {
  useRevealOnScroll([posts]);

  return (
    <>
      {/* Title, description and the OG card come from DefaultSeo (next-seo.config.ts). */}
      <SiteNav />
      <Greeting
        latest={posts[0] ? { slug: posts[0].slug, title: posts[0].title } : undefined}
      />
      <main>
        <Archive posts={posts} />
        <AboutStrip />
      </main>
      <SiteFooter />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("/");
  const sorted = posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return { props: { posts: sorted } };
}