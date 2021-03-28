import Layout from "./Layout/Index";
import ShortPost from "./components/ShortPost";
const mockPosts = [
  {
    title: "Docker 101",
    date: new Date().toDateString(),
    description: "This a description for this posts",
  },
  {
    title: "Javascript Books I Read",
    date: new Date().toDateString(),
    description: "This a description for this posts",
  },
  {
    title: "Books I read in 2019",
    date: new Date().toDateString(),
    description: "This a description for this posts",
  },
  {
    title: "Why Tech changes my life?",
    date: new Date().toDateString(),
    description: "This a description for this posts",
  },
  {
    title: "Programming for begginers",
    date: new Date().toDateString(),
    description: "This a description for this posts",
  },
];

export default function MainPage() {
  return (
    <Layout>
      {mockPosts.map((post, index) => (
        <ShortPost key={index} post={post} />
      ))}
    </Layout>
  );
}
