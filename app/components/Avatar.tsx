import Link from "next/link";
import Image from "next/image";

interface AvatarProps {
  size?: "small";
}

export default function Avatar({ size }: AvatarProps) {
  return (
    <Link href="/">
      <div id="avatar">
        <Image
          alt="avatar"
          width={size == "small" ? 50 : 75}
          height={size == "small" ? 50 : 75}
          className="sidebar-main-avatar"
          src="/images/me.png"
          layout="intrinsic"
          loading="eager"
        />
      </div>
    </Link>
  );
}
