import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

interface ILayoutProps {
  children: any;

  showFooterSocial?: boolean;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div
      id="main-blog-container"
      className="h-screen w-full flex flex-col items-center bg-slate-950 overflow-auto p-8"
    >
      <Header />
      <div className="container text-slate-50 mx-auto md:max-w-4xl xs:max-w-80 mx-auto-xs flex-grow overflow-auto">
        {children}
      </div>
      <Navbar />
    </div>
  );
}
