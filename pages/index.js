import MainPage from "../app/MainPage";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Index({ posts }) {
  return <MainPage posts={posts} />;
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("/");
  return { props: { posts } };
}
