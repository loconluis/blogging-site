import Info from "../components/Info";
import NavbarBlog from "../components/NavbarBlog";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Blog({ frontMatter, children }) {
  return (
    <div className="blog">
      <NavbarBlog />
      <Info frontMatter={frontMatter} />
      <div className="blog-container">
        <ThemeSwitcher />
        {children}
      </div>
    </div>
  );
}
