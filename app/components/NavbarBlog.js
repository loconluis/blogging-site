import Link from "next/link";

export default function NavbarBlog() {
  return (
    <div className="blog-navbar">
      <Link href="/">
        <button className="blog-navbar-button">Return to blog</button>
      </Link>
    </div>
  );
}
