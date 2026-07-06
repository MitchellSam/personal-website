"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work",     label: "Work"     },
  // { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills"   },
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
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b transition-all",
        scrolled
          ? "border-border backdrop-blur-[16px] saturate-[160%]"
          : "border-transparent"
      )}
      style={{ transitionDuration: "var(--dur-base)", background: scrolled ? "color-mix(in srgb, var(--surface-raised) 80%, transparent)" : "transparent" }}
    >
      <div className="w-full max-w-content mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    "var(--w-semibold)",
            fontSize:      14,
            letterSpacing: "var(--track-label)",
            textTransform: "uppercase",
            color:         "var(--text-primary)",
            display:       "flex",
            alignItems:    "center",
            gap:           10,
          }}
        >
          <span style={{
            width:     7,
            height:    7,
            background: "var(--gold)",
            boxShadow: "var(--glow-gold)",
            flexShrink: 0,
          }} />
          Mitchell Sam
        </a>

        {/* Nav links + resume */}
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:block px-3 py-2 transition-colors"
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      12,
                letterSpacing: "var(--track-label)",
                textTransform: "uppercase",
                color:         "var(--text-muted)",
                borderRadius:  "var(--radius-0)",
                transitionDuration: "var(--dur-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "color-mix(in srgb, var(--surface-card) 60%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Resume — DS secondary button style */}
          <a
            href="/resume.pdf"
            download
            className="ml-3 flex items-center gap-1.5"
            style={{
              fontFamily:    "var(--font-display)",
              fontSize:      12,
              fontWeight:    "var(--w-medium)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color:         "var(--text-primary)",
              padding:       "8px 16px",
              border:        "1px solid var(--border-hairline)",
              borderRadius:  "var(--radius-0)",
              transition:    "border-color var(--dur-fast) var(--ease-sharp), color var(--dur-fast) var(--ease-sharp)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent-text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hairline)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
}
