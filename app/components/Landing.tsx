"use client";

import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import RotatingCube from "@/components/3D/RotatingCube";
import Social from "./Social";
import { Suspense } from "react";

const LandingPage = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    {
      name: "Source",
      href: "https://github.com/loconluis/blogging-site",
      target: "_blank",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between py-8 bg-slate-950 font-body">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <RotatingCube /> */}
      </Suspense>
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <Avatar />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-slate-50 pt-5"
        >
          Luis Locon
        </motion.h1>
        <Social />
        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-center my-8 text-slate-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Software
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Engineer
          </motion.span>
        </motion.h2>
        <motion.h3
          className="text-lg font-light text-center text-slate-50/35"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Typescript, React, Node, OSS, Web3 Enthusiast
          </motion.span>{" "}
        </motion.h3>
      </div>
      <motion.nav
        className="flex space-x-4 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="md:px-10 sm:px-6"
            whileHover={"hover"}
            whileTap={{ scale: 0.95 }}
            variants={{
              hover: {
                backgroundColor: "#de1d8d",
                scale: 1.06,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Link
              href={item.href}
              className="relative text-lg font-medium text-primary text-slate-50"
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

export default LandingPage;
