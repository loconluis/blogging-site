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
          width={size == "small" ? 50 : 175}
          height={size == "small" ? 50 : 175}
          className="sidebar-main-avatar"
          src="/images/me-3d.jpeg"
          loading="eager"
          priority
        />
      </div>
    </Link>
  );
}
