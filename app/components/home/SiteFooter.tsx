import Link from "next/link";
import { socials } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="foot">
      <span>Luis Locon · Guatemala City</span>
      <nav aria-label="Elsewhere">
        {socials.map((s) => (
          <a
            key={s.label}
            className="link"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.label}
          </a>
        ))}
        <Link className="link" href="/about">
          About
        </Link>
      </nav>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}