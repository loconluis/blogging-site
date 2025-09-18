import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

interface ILayoutProps {
  children: any;

  showFooterSocial?: boolean;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm z-50">
        <div className="container mx-auto px-8 py-4">
          <Header />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-24">
        <div className="container text-neutral-900 dark:text-neutral-50 mx-auto md:max-w-4xl xs:max-w-80 px-8">
          {children}
        </div>
      </div>

      {/* Fixed Footer Navigation */}
      <Navbar />
    </div>
  );
}
