import Social from "@/components/Social";
import Link from "next/link";

interface ILayoutProps {
  navigation?: {
    text: string;
    link: string;
  };
  title: string;
  children: any;
  leftComponentInTitle?: any;
  showFooterSocial?: boolean;
}

export default function Layout({
  children,
  navigation,
  title,
  leftComponentInTitle,
  showFooterSocial,
}: ILayoutProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-slate-950 overflow-auto">
      <div className="container text-slate-50 m-auto max-w-xs md:max-w-2xl xs:max-w-80">
        <div className="mt-10">
          <Link href={navigation?.link || "/"}>{navigation?.text}</Link>
        </div>
        <div className="flex flex-row justify-between my-5 mt-10 md:mt-0">
          <h1 className="md:text-5xl text-left text-3xl">
            <span className="inline-block align-middle">{title}</span>
          </h1>
          <div>{leftComponentInTitle}</div>
        </div>
        {children}
      </div>
      {showFooterSocial && (
        <div id="social" className="my-10">
          <Social />
        </div>
      )}
    </div>
  );
}
