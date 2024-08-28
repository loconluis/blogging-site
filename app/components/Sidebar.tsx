import Footer from "./Footer";
import NavBar from "./Navbar";
import Avatar from "./Avatar";
import Social from "./Social";
import { routes } from "./utils/routes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <Avatar />
        <h1 className="sidebar-main-title">Luis Locon</h1>
        <p className="sidebar-main-description">
          Software Engineer 👨🏾‍💻 , Self-taught 📚 , Community and tech enthusiast
          🌎 💻.
        </p>
        <p className="sidebar-main-description">
          React, Typescript, GraphQL and OSS 🤩
        </p>
        <NavBar tabs={routes} />
        <Social />
        <Footer />
      </div>
    </div>
  );
}
