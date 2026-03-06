"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/" },
    { name: "Work", href: "/work-experience" },
    {
      name: "Source",
      href: "https://github.com/loconluis/blogging-site",
      target: "_blank",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#faf8f5]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-t border-[#e8e4df] dark:border-[#1f1f1f]">
      <div className="mx-auto px-4">
        {/* Mobile: Grid layout for better spacing */}
        <motion.nav
          className="grid grid-cols-4 gap-1 py-3 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Link
                className={`relative flex flex-col items-center justify-center px-2 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-[#1d4ed8] dark:text-[#60a5fa] bg-[#1d4ed8]/5 dark:bg-[#1d4ed8]/10"
                    : "text-[#6b6b6b] dark:text-[#888]"
                } hover:text-[#1d4ed8] dark:hover:text-[#60a5fa]`}
                href={item.href}
                target={item.target || ""}
              >
                <span className="truncate w-full text-center">
                  {item.name.length > 8 ? item.name.substring(0, 8) + "..." : item.name}
                </span>
                {pathname === item.href && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1 h-1 rounded-full bg-[#1d4ed8] dark:bg-[#60a5fa]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop: Refined layout */}
        <motion.nav
          className="hidden sm:flex justify-center py-4 gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <Link
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-[#faf8f5] dark:text-[#0f0f0f] bg-[#1a1a1a] dark:bg-[#f0ede8]"
                    : "text-[#6b6b6b] dark:text-[#888] hover:text-[#1a1a1a] dark:hover:text-[#f0ede8] hover:bg-[#1a1a1a]/5 dark:hover:bg-[#f0ede8]/5"
                }`}
                href={item.href}
                target={item.target || ""}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;