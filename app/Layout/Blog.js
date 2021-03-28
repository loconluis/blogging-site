import Info from "../components/Info";
import NavbarBlog from "../components/NavbarBlog";

export default function Blog({ frontMatter, children }) {
  return (
    <div className="blog">
      <NavbarBlog />
      <Info frontMatter={frontMatter} />
      <div className="blog-container">{children}</div>
    </div>
  );
}
