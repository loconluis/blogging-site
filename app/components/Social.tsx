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
      className={info ? "sidebar-main-social__info" : "sidebar-main-social"}
    >
      <ul className="sidebar-main-social-list">
        <motion.li
          className="sidebar-main-social-list-item text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/loconluis/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </motion.li>
        <motion.li
          className="sidebar-main-social-list-item text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="https://github.com/loconluis/"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </motion.li>
        <motion.li
          className="sidebar-main-social-list-item text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="https://x.com/LoconLuis" target="_blank">
            <RiTwitterXFill />
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
}
