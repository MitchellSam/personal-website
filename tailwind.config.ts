import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /* DS slate substrate */
        bg:           "#0a0e15",  /* --slate-900 / --bg-base */
        surface:      "#11161f",  /* --slate-800 / --surface-raised */
        "surface-2":  "#1a212d",  /* --slate-700 / --surface-card */
        border:       "#3b4654",  /* --slate-500 / --border-hairline */
        "border-hover":"#5b6675", /* --slate-400 / --border-strong */
        /* DS text */
        text:         "#e8ecf1",  /* --slate-100 / --text-primary */
        "muted-2":    "#c2c9d2",  /* --slate-200 / --text-body */
        muted:        "#8b95a3",  /* --slate-300 / --text-muted */
        faint:        "#5b6675",  /* --slate-400 / --text-faint */
        /* DS accent: Tower gold */
        accent:       "#c9a23a",  /* --gold */
        "accent-bright":"#f0c850",/* --gold-bright */
        "accent-dim": "rgba(201, 162, 58, 0.16)",
        "accent-glow":"rgba(240, 200, 80, 0.25)",
        /* DS cyan */
        cyan:         "#5fd0e6",  /* --cyan-bright */
      },
      fontFamily: {
        sans:    ["var(--font-text)",    "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1080px",
      },
      keyframes: {
        drift1: {
          "0%":   { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(6%, 5%) scale(1.12)" },
        },
        drift2: {
          "0%":   { transform: "translate(0,0) scale(1.05)" },
          "100%": { transform: "translate(-5%, -4%) scale(1)" },
        },
        drift3: {
          "0%":   { transform: "translate(0,0) scale(0.9)", opacity: "0.7" },
          "100%": { transform: "translate(-8%, 6%) scale(1.15)", opacity: "1" },
        },
        pulse: {
          "0%":   { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(3.2)", opacity: "0" },
        },
        scrolly: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.6)", transformOrigin: "top" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
      },
      animation: {
        drift1:  "drift1 18s ease-in-out infinite alternate",
        drift2:  "drift2 22s ease-in-out infinite alternate",
        drift3:  "drift3 16s ease-in-out infinite alternate",
        pulse:   "pulse 2.4s ease-out infinite",
        scrolly: "scrolly 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
