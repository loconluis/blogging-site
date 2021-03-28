import SideBarNavigation from "../components/Sidebar";
export default function Layout({ children }) {
  return (
    <div className="container">
      <SideBarNavigation />
      <div className="content">
        <div className="content-main">{children}</div>
      </div>
    </div>
  );
}
