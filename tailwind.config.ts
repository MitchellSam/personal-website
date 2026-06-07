import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#141414",
        border: "#1f1f1f",
        "border-hover": "#2a2a2a",
        text: "#f0f0f0",
        muted: "#6b6b6b",
        "muted-2": "#8a8a8a",
        accent: "#6ee7b7",
        "accent-dim": "rgba(110, 231, 183, 0.14)",
        "accent-glow": "rgba(110, 231, 183, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
      keyframes: {
        drift1: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(6%, 5%) scale(1.12)" },
        },
        drift2: {
          "0%": { transform: "translate(0,0) scale(1.05)" },
          "100%": { transform: "translate(-5%, -4%) scale(1)" },
        },
        drift3: {
          "0%": { transform: "translate(0,0) scale(0.9)", opacity: "0.7" },
          "100%": { transform: "translate(-8%, 6%) scale(1.15)", opacity: "1" },
        },
        pulse: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(3.2)", opacity: "0" },
        },
        scrolly: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.6)", transformOrigin: "top" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
      },
      animation: {
        drift1: "drift1 18s ease-in-out infinite alternate",
        drift2: "drift2 22s ease-in-out infinite alternate",
        drift3: "drift3 16s ease-in-out infinite alternate",
        pulse: "pulse 2.4s ease-out infinite",
        scrolly: "scrolly 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
