import Layout from "@/Layout/Index";
import ShortPost from "@/components/ShortPost";

export default function MainPage({ posts }) {
  return (
    <Layout>
      {posts.map((post, index) => (
        <ShortPost key={index} post={post} />
      ))}
    </Layout>
  );
}
