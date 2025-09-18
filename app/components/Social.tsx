import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface SocialProps {
  info?: boolean;
}

export default function Social({ info }: SocialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex gap-4"
    >
      <motion.a
        href="https://x.com/LoconLuis"
        target="_blank"
        aria-label="X Profile (formely Twitter) of Luis Locon"
        className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiTwitterXFill className="w-5 h-5" />
      </motion.a>

      <motion.a
        href="https://github.com/loconluis/"
        target="_blank"
        aria-label="Github Profile of Luis Locon"
        className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGithub className="w-5 h-5" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/loconluis/"
        target="_blank"
        aria-label="LinkedIn Profile of Luis Locon"
        className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaLinkedinIn className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
}
