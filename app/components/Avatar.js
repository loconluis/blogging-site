import Link from "next/link";
import Image from 'next/image'

export default function Avatar({ size }) {
  return (
    <Link href="/">
      <a id="avatar">
        <Image
          width={size == "small" ? 50 : 75}
          height={size == "small" ? 50 : 75}
          className="sidebar-main-avatar"
          src="/images/me.png"
          layout="intrinsic"
          loading="eager"
        />
      </a>
    </Link>
  );
}
