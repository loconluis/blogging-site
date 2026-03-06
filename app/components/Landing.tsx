"use client";

import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import Social from "./Social";

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
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-12 md:py-16 bg-[#faf8f5] dark:bg-[#0f0f0f] font-body relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#1d4ed8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center z-10 px-6">
        {/* Avatar with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#1d4ed8]/20 to-transparent rounded-full blur-2xl opacity-60" />
          <Avatar />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-xl text-[#4a4a4a] dark:text-[#888] italic mb-4"
        >
          Luis Locon
        </motion.h1>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <Social />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1a1a1a] dark:text-[#f0ede8] italic leading-[0.9]"
          >
            Software
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1d4ed8] dark:text-[#60a5fa] italic leading-[0.9] mt-2"
          >
            Engineer
          </motion.span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-center text-sm md:text-base text-[#6b6b6b] dark:text-[#666] max-w-md mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          TypeScript, React, Node.js, OSS
          <br />
          <span className="text-[#888] dark:text-[#555]">Web3 Enthusiast</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#888] dark:text-[#555]"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="flex gap-2 md:gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
          >
            <Link
              href={item.href}
              target={item.target || ""}
              className="relative px-5 py-2.5 rounded-full text-sm font-medium border border-[#e8e4df] dark:border-[#2a2a2a] text-[#4a4a4a] dark:text-[#888] hover:text-[#faf8f5] dark:hover:text-[#0f0f0f] hover:bg-[#1a1a1a] dark:hover:bg-[#f0ede8] hover:border-transparent dark:hover:border-transparent transition-all duration-300"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
};

export default LandingPage;
