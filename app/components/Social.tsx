import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface SocialProps {
  info?: boolean;
}

export default function Social({ info }: SocialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex gap-2"
    >
      <motion.a
        href="https://x.com/LoconLuis"
        target="_blank"
        aria-label="X Profile (formely Twitter) of Luis Locon"
        className="w-9 h-9 rounded-full border border-[#e8e4df] dark:border-[#2a2a2a] flex items-center justify-center text-[#4a4a4a] dark:text-[#a0a0a0] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] transition-all duration-300 hover:bg-[#1d4ed8]/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiTwitterXFill className="w-4 h-4" />
      </motion.a>

      <motion.a
        href="https://github.com/loconluis/"
        target="_blank"
        aria-label="Github Profile of Luis Locon"
        className="w-9 h-9 rounded-full border border-[#e8e4df] dark:border-[#2a2a2a] flex items-center justify-center text-[#4a4a4a] dark:text-[#a0a0a0] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] transition-all duration-300 hover:bg-[#1d4ed8]/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub className="w-4 h-4" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/loconluis/"
        target="_blank"
        aria-label="LinkedIn Profile of Luis Locon"
        className="w-9 h-9 rounded-full border border-[#e8e4df] dark:border-[#2a2a2a] flex items-center justify-center text-[#4a4a4a] dark:text-[#a0a0a0] hover:border-[#1d4ed8] hover:text-[#1d4ed8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa] transition-all duration-300 hover:bg-[#1d4ed8]/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedinIn className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
}
