import Avatar from "./Avatar";
import Social from "./Social";
import { ThemeToggle } from "@/components/components/theme-toggle";

export default function Header() {
  return (
    <div className="container text-neutral-900 dark:text-neutral-50 mx-auto md:max-w-4xl xs:max-w-80 mx-auto-xs  w-full bg-white dark:bg-neutral-950 ">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-2 my-5">
        <div className="flex flex-row align-middle items-center gap-2 ">
          <Avatar size="small" />
          <h1 className="text-neutral-900 dark:text-neutral-50 font-medium text-3xl">Luis Locon</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Social />
        </div>
      </div>
    </div>
  );
}
