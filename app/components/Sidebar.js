import Footer from "./Footer";
import NavBar from "./Navbar";
import Avatar from "./Avatar";
import Social from "./Social";
import { routes } from "./utils/routes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div
        className="sidebar-main"
        //style={{ border: "1px solid blue" }}
      >
        <a>
          <Avatar />
        </a>
        <h1 className="sidebar-main-title">Luis Locon</h1>
        <p className="sidebar-main-description">
          27 | Software Developer 👨🏾‍💻 , Self-taught 📚 , Community and tech
          enthusiast 🌎 💻.
        </p>
        <p className="sidebar-main-description">Javascript and OSS 🤩</p>
        <NavBar tabs={routes} />
        <Social />
        <Footer />
      </div>
    </div>
  );
}