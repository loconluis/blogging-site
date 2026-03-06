import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

interface ILayoutProps {
  children: any;

  showFooterSocial?: boolean;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#faf8f5] dark:bg-[#0f0f0f] grain-overlay">
      {/* Fixed Header - ~73px on mobile, ~81px on desktop */}
      <div className="fixed top-0 left-0 right-0 bg-[#faf8f5]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#e8e4df] dark:border-[#1f1f1f] z-50 h-[73px] md:h-[81px]">
        <div className="container mx-auto px-6 md:px-8 h-full flex items-center">
          <Header />
        </div>
      </div>

      {/* Main Content - accounts for fixed header (73-81px) + footer (~60px) */}
      <div className="pt-[89px] md:pt-[97px] pb-[76px] md:pb-[80px] min-h-screen">
        <div className="container text-[#1a1a1a] dark:text-[#f0ede8] mx-auto md:max-w-3xl xs:max-w-80 px-6 md:px-8 py-6">
          {children}
        </div>
      </div>

      {/* Fixed Footer Navigation - ~60px on mobile, ~64px on desktop */}
      <Navbar />
    </div>
  );
}
