"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

// const taglines = [
//   "I build things that scale.",
//   "I ship products that stick.",
//   "I turn legacy code into leverage.",
//   "I sweat the details that compound.",
// ];

export default function Hero() {
  // const [index, setIndex]     = useState(0);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setVisible(false);
  //     setTimeout(() => {
  //       setIndex((i) => (i + 1) % taglines.length);
  //       setVisible(true);
  //     }, 400);
  //   }, 2800);
  //   return () => clearInterval(interval);
  // }, []);

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

        {/* Rotating tagline */}
        {/* <div className="flex items-center gap-3 my-7" style={{ height: 30 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize:   "clamp(14px, 1.8vw, 19px)",
              color:      "var(--accent-text)",
              fontWeight: "var(--w-light)",
            }}
          >
            &gt;
          </span>
          <span
            style={{
              fontFamily:  "var(--font-text)",
              fontSize:    "clamp(15px, 1.8vw, 19px)",
              color:       "var(--text-body)",
              lineHeight:  "var(--lh-body)",
              opacity:     visible ? 1 : 0,
              transform:   visible ? "translateY(0)" : "translateY(8px)",
              transition:  `opacity ${400}ms var(--ease-sharp), transform ${400}ms var(--ease-sharp)`,
            }}
          >
            {taglines[index]}
          </span>
        </div> */}

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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            GitHub
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.open("https://linkedin.com/in/mitchell-sam", "_blank", "noopener,noreferrer")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
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
