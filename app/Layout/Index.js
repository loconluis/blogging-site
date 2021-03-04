import SideBarNavigation from "../components/Sidebar";
export default function Layout({ children }) {
  return (
    <div>
      <SideBarNavigation />
      <div>{children}</div>
    </div>
  );
}
