import Link from "next/link";

export default function Avatar({ size }) {
  return (
    <Link href="/">
      <a>
        <img
          width={size == "small" ? 50 : 75}
          height={size == "small" ? 50 : 75}
          className="sidebar-main-avatar"
          src="/images/me.png"
        />
      </a>
    </Link>
  );
}
