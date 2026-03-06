import Avatar from "./Avatar";
import Social from "./Social";
import { ThemeToggle } from "@/components/components/theme-toggle";

export default function Header() {
  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-3">
        <div className="flex flex-row align-middle items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-[#1d4ed8]/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Avatar size="small" />
          </div>
          <h1 className="font-display text-[#1a1a1a] dark:text-[#f0ede8] font-medium text-2xl md:text-3xl tracking-tight">
            Luis Locon
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Social />
        </div>
      </div>
    </div>
  );
}
