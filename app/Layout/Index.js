import SideBarNavigation from "../components/Sidebar";
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Layout({ children }) {
  return (
    <div className="container">
      <SideBarNavigation />
      <div className="content">
        <ThemeSwitcher />
        <div className="content-main">{children}</div>
      </div>
    </div>
  );
}
