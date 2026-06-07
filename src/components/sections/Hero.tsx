"use client";

import { useEffect, useState } from "react";

const taglines = [
  "I build things that scale.",
  "I ship products that stick.",
  "I turn legacy code into leverage.",
  "I sweat the details that compound.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 500);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="top"
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute rounded-full animate-drift1"
          style={{
            width: "min(60vw, 760px)",
            height: "min(60vw, 760px)",
            top: "2%",
            left: "-8%",
            background:
              "radial-gradient(circle at center, rgba(16,84,64,0.55), rgba(10,40,32,0.18) 45%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute rounded-full animate-drift2"
          style={{
            width: "min(52vw, 640px)",
            height: "min(52vw, 640px)",
            top: "18%",
            right: "-6%",
            background:
              "radial-gradient(circle at center, rgba(20,70,78,0.5), rgba(12,38,42,0.16) 45%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute rounded-full animate-drift3"
          style={{
            width: "min(30vw, 380px)",
            height: "min(30vw, 380px)",
            top: "40%",
            left: "34%",
            background:
              "radial-gradient(circle at center, rgba(110,231,183,0.16), transparent 65%)",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, #0a0a0a 92%), radial-gradient(circle at 50% 30%, transparent 40%, rgba(10,10,10,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-content mx-auto px-8 pt-24 pb-20">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 font-mono text-[12.5px] text-muted-2 tracking-[0.02em] px-[13px] py-[6px] border border-border rounded-full bg-surface/50 mb-8 whitespace-nowrap">
          <span className="relative w-[7px] h-[7px] rounded-full bg-accent">
            <span className="absolute inset-0 rounded-full bg-accent animate-pulse" />
          </span>
          New York, NY
        </span>

        {/* Heading */}
        <h1
          className="text-text font-semibold leading-[0.96] mb-2.5"
          style={{
            fontSize: "clamp(48px, 8.5vw, 104px)",
            letterSpacing: "-0.045em",
          }}
        >
          Mitchell Sam
          <span
            className="block text-muted font-medium"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Fullstack Software Engineer
          </span>
        </h1>

        {/* Rotating tagline */}
        <div className="flex items-center gap-3 my-7" style={{ height: 30 }}>
          <span className="font-mono text-accent" style={{ fontSize: "clamp(17px, 2.3vw, 22px)" }}>
            &gt;
          </span>
          <span
            className="text-text transition-all duration-500"
            style={{
              fontSize: "clamp(17px, 2.3vw, 22px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
            }}
          >
            {taglines[index]}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex gap-3.5 flex-wrap mt-10">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-[22px] py-[13px] rounded-[9px] bg-accent text-[#04140d] transition-all hover:shadow-[0_0_32px_rgba(110,231,183,0.3)] hover:-translate-y-0.5"
          >
            View Work
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-[14.5px] font-medium px-[22px] py-[13px] rounded-[9px] bg-transparent text-text border border-border transition-all hover:border-border-hover hover:bg-surface"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a
            href="https://github.com/MitchellSam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14.5px] font-medium px-[22px] py-[13px] rounded-[9px] bg-transparent text-text border border-border transition-all hover:border-border-hover hover:bg-surface"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2.5 opacity-70">
        <span className="font-mono text-[11px] text-muted tracking-[0.18em] uppercase">Scroll</span>
        <span
          className="w-px h-[34px] animate-scrolly"
          style={{ background: "linear-gradient(to bottom, #6b6b6b, transparent)" }}
        />
      </div>
    </header>
  );
}
