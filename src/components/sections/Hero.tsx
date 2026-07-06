"use client";

import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* Ambient glow orbs — gold + cyan tinted */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute animate-drift1"
          style={{
            width:      "min(60vw, 760px)",
            height:     "min(60vw, 760px)",
            top:        "2%",
            left:       "-8%",
            background: "radial-gradient(circle at center, rgba(138,111,37,0.4), rgba(90,70,20,0.14) 45%, transparent 70%)",
            filter:     "blur(22px)",
          }}
        />
        <div
          className="absolute animate-drift2"
          style={{
            width:      "min(52vw, 640px)",
            height:     "min(52vw, 640px)",
            top:        "18%",
            right:      "-6%",
            background: "radial-gradient(circle at center, rgba(29,107,130,0.38), rgba(15,56,72,0.13) 45%, transparent 70%)",
            filter:     "blur(22px)",
          }}
        />
        <div
          className="absolute animate-drift3"
          style={{
            width:      "min(30vw, 380px)",
            height:     "min(30vw, 380px)",
            top:        "40%",
            left:       "34%",
            background: "radial-gradient(circle at center, rgba(201,162,58,0.1), transparent 65%)",
          }}
        />
      </div>

      {/* Scrim — same dark bottom gradient as DS portfolio Hero */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "var(--scrim-full)" }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-content mx-auto px-8 pt-24 pb-20">

        {/* Eyebrow — DS label with gold rule */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "var(--fs-label)",
            letterSpacing: "var(--track-mega)",
            textTransform: "uppercase",
            color:         "var(--accent-text)",
          }}
        >
          <span style={{ width: 32, height: 2, background: "var(--accent)", flexShrink: 0 }} />
          New York, NY · Fullstack Software Engineer
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    "var(--w-bold)",
            fontSize:      "clamp(52px, 9vw, 108px)",
            lineHeight:    "var(--lh-tight)",
            letterSpacing: "var(--track-tight)",
            textTransform: "uppercase",
            color:         "var(--text-primary)",
            margin:        0,
          }}
        >
          Mitchell Sam
        </h1>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap mt-10">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => { const a = document.createElement("a"); a.href = "/resume.pdf"; a.download = ""; a.click(); }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.open("https://github.com/MitchellSam", "_blank", "noopener,noreferrer")}
          >
            <GitHubIcon width={14} height={14} />
            GitHub
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.open("https://linkedin.com/in/mitchell-sam", "_blank", "noopener,noreferrer")}
          >
            <LinkedInIcon width={14} height={14} />
            LinkedIn
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2.5 opacity-60">
        <span
          style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "var(--fs-micro)",
            color:         "var(--text-muted)",
            letterSpacing: "var(--track-wide)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <span
          className="animate-scrolly"
          style={{
            width:      1,
            height:     34,
            background: `linear-gradient(to bottom, var(--border-hairline), transparent)`,
          }}
        />
      </div>
    </header>
  );
}
