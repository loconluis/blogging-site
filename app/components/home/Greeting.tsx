"use client";
import { useEffect, useRef } from "react";

/**
 * The greeting fills the first screen and drifts up slightly as the archive
 * arrives under it. It scrolls away like any other block — nothing is ever
 * covered — and with motion reduced it is a plain, static first screen.
 */
export default function Greeting({
  latest,
}: {
  latest?: { slug: string; title: string };
}) {
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const apply = () => {
      ticking = false;
      const h = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      el.style.transform = `translate3d(0, ${(-9 * p).toFixed(2)}%, 0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="greet" aria-labelledby="greet-h">
      <div className="greet-inner" ref={inner}>
        <div>
          <h1 id="greet-h">Hi, I&apos;m Luis Locon.</h1>

          <div className="actions">
            {latest && (
              <a
                className="btn"
                href={`/blog/${latest.slug}`}
                title={latest.title}
              >
                Read the newest ↗
              </a>
            )}
            <a className="link" href="#writing">
              All writing
            </a>
            <a className="link" href="/about">
              About me
            </a>
          </div>
        </div>

        <p>
          Software engineer in Guatemala City. I write down what I learn about
          building for the web: what I ship, what breaks, and what I read.
        </p>
      </div>
    </section>
  );
}