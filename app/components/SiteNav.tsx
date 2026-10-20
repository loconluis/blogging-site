"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Writing", href: "/" },
  { name: "About", href: "/about" },
  { name: "GitHub", href: "https://github.com/loconluis", target: "_blank" },
];

/** One bar, same four links, on every page. */
export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="bar">
      <Link href="/" className="name">
        Luis Locon
      </Link>
      <nav aria-label="Primary">
        {links.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.target || undefined}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}