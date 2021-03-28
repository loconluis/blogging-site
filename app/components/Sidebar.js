import Footer from "./Footer";
import NavBar from "./Navbar";
import Social from "./Social";

const navigationTabs = ["Articles", "About Me", "Contact Me"];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div
        className="sidebar-main"
        //style={{ border: "1px solid blue" }}
      >
        <a>Image</a>
        <h1 className="sidebar-main-title">Luis Locon</h1>
        <p className="sidebar-main-description">
          Passionate about technology, open source, and communities. Design
          enthusiast, exploring the creative side of everything throughout the
          world. Self-Taught, Engineer-Thinking, and Problem Solver.
        </p>
        <NavBar tabs={navigationTabs} />
        <Social />
        <Footer />
      </div>
    </div>
  );
}
