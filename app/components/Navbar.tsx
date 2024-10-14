"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/" },
    {
      name: "Source",
      href: "https://github.com/loconluis/blogging-site",
      target: "_blank",
    },
  ];
  return (
    <div className=" mx-auto flex justify-center">
      <motion.nav
        className="flex space-x-4 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            className="md:px-10 sm:px-6"
            whileHover={"hover"}
            whileTap={{ scale: 0.95 }}
            variants={{
              hover: {
                backgroundColor: "#de1d8d",
                textColor: "white",
                scale: 1.06,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Link
              className={`relative text-lg font-medium  ${
                pathname === item.href
                  ? "underline decoration-pink-600 px-2 text-pink-600"
                  : "text-slate-50"
              } hover:text-slate-50`}
              href={item.href}
              target={item.target || ""}
            >
              {item.name}
              <motion.span
                className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
