import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type size = "small" | "medium" | "large" | "xlarge";
interface AvatarProps {
  size?: size;
  img?: string;
}

export default function Avatar({ size, img }: AvatarProps) {
  let sizeImg = 175;
  if (size === "small") {
    sizeImg = 50;
  } else if (size === "medium") {
    sizeImg = 75;
  } else if (size === "large") {
    sizeImg = 150;
  }

  return (
    <Link href="/">
      <motion.div
        id="avatar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          alt="avatar"
          width={sizeImg}
          height={sizeImg}
          className="sidebar-main-avatar"
          src={img || "/images/Designer-6.png"}
          loading="eager"
          priority
        />
      </motion.div>
    </Link>
  );
}
