import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import Layout from "@/Layout/Index";
import VerticalTimeline from "./VerticalTimeline";

const About = () => {
  return (
    <Layout>
      <motion.div
        className="flex flex-col gap-8 leading-relaxed max-w-3xl mx-auto items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#1d4ed8] dark:text-[#60a5fa]">
            About Me
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-[#1a1a1a] dark:text-[#f0ede8] mt-3 italic">
            Hello, I'm Luis
          </h1>
        </motion.div>

        {/* Bio paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-base md:text-lg"
        >
          <p className="text-[#4a4a4a] dark:text-[#a0a0a0] leading-[1.8]">
            I'm a software engineer based in <span className="text-[#1d4ed8] dark:text-[#60a5fa]">Guatemala</span>,
            with a passion for frontend development and everything related to
            creating amazing interfaces. I started my career as a full stack
            developer six years ago, where I developed a deep love for JavaScript
            and the web.
          </p>

          <p className="text-[#4a4a4a] dark:text-[#a0a0a0] leading-[1.8]">
            Since then, I've realized that what I enjoy the most is
            designing user experiences that are <em className="font-display text-[#1a1a1a] dark:text-[#f0ede8]">attractive, efficient</em>, and most
            importantly, <em className="font-display text-[#1a1a1a] dark:text-[#f0ede8]">easy to use</em>.
          </p>

          <p className="text-[#4a4a4a] dark:text-[#a0a0a0] leading-[1.8]">
            I love tackling complex challenges and solving problems in creative
            ways. I'm always open to sharing knowledge, teaching, and building
            communities wherever I go.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <Link
            href="/work-experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] dark:bg-[#f0ede8] text-[#faf8f5] dark:text-[#0f0f0f] rounded-full text-sm font-medium hover:bg-[#1d4ed8] dark:hover:bg-[#1d4ed8] dark:hover:text-white transition-all duration-300 group"
          >
            View my experience
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;
