"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b transition-all duration-300",
        scrolled
          ? "bg-bg/72 backdrop-blur-[16px] saturate-[160%] border-border"
          : "border-transparent"
      )}
    >
      <div className="w-full max-w-content mx-auto px-8 flex items-center justify-between">
        <a href="#top" className="font-mono font-semibold text-[15px] tracking-[-0.02em] flex items-center gap-2 text-text">
          <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_10px_rgba(110,231,183,0.4)]" />
          Mitchell Sam
        </a>
        <div className="flex items-center gap-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted px-3 py-2 rounded-[7px] transition-colors hover:text-text hover:bg-surface hidden sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-2 flex items-center gap-1.5 font-mono text-[13px] font-medium text-accent px-[15px] py-2 border border-accent/30 rounded-lg transition-all hover:bg-accent-dim hover:border-accent hover:shadow-[0_0_24px_rgba(110,231,183,0.18)]"
          >
            Resume{" "}
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
