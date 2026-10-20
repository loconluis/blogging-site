import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";

interface ILayoutProps {
  children: any;
  showFooterSocial?: boolean;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100svh" }}>
      <SiteNav />
      <main className="page">
        <div className="col">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}