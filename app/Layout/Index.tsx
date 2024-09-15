import SideBarNavigation from "@/components/Sidebar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Hero from "@/components/Hero";

export default function Layout({ children }) {
  return (
    <div className="container">
      {/* <SideBarNavigation /> */}
      <Hero />
      <div className="content">
        <ThemeSwitcher />
        <div className="content-main">{children}</div>
      </div>
    </div>
  );
}
