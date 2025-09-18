"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/" },
    { name: "Work Experience", href: "/work-experience" },
    {
      name: "Source",
      href: "https://github.com/loconluis/blogging-site",
      target: "_blank",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 shadow-sm">
      <div className="mx-auto px-4">
        {/* Mobile: Grid layout for better spacing */}
        <motion.nav
          className="grid grid-cols-4 gap-1 py-3 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {navItems.slice(0, 4).map((item) => (
            <motion.div
              key={item.name}
              whileHover={"hover"}
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: {
                  backgroundColor: "neutral",
                  scale: 1.02,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Link
                className={`relative flex flex-col items-center justify-center px-2 py-2 rounded-lg text-xs font-medium ${pathname === item.href
                  ? "text-neutral-900 dark:text-neutral-50 bg-neutral-100 dark:bg-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400"
                  } hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors`}
                href={item.href}
                target={item.target || ""}
              >
                <span className="truncate w-full text-center">
                  {item.name.length > 8 ? item.name.substring(0, 8) + "..." : item.name}
                </span>
                <motion.span
                  className="absolute left-2 right-2 bottom-1 h-0.5 bg-neutral-900 dark:bg-neutral-50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop: Original layout */}
        <motion.nav
          className="hidden sm:flex justify-center py-4 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="px-4 py-2 rounded-lg"
              whileHover={"hover"}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={`relative text-base font-medium  ${pathname === item.href
                  ? "underline decoration-blue-600 px-2 text-neutral-900 dark:text-neutral-50"
                  : "text-neutral-600 dark:text-neutral-400"
                  } hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-colors`}
                href={item.href}
                target={item.target || ""}
              >
                {item.name}
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-neutral-900 dark:bg-neutral-50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;