import { CSSProperties, HTMLAttributes } from "react";

type Tone = "neutral" | "gold" | "cyan" | "crimson";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  solid?: boolean;
}

const TONES: Record<Tone, { fg: string; bd: string; bg: string }> = {
  neutral: {
    fg: "var(--text-primary)",
    bd: "var(--border-strong)",
    bg: "color-mix(in srgb, var(--surface-panel) 60%, transparent)",
  },
  gold: {
    fg: "var(--gold-bright)",
    bd: "var(--gold)",
    bg: "color-mix(in srgb, var(--gold) 16%, transparent)",
  },
  cyan: {
    fg: "var(--cyan-bright)",
    bd: "var(--cyan)",
    bg: "color-mix(in srgb, var(--cyan) 16%, transparent)",
  },
  crimson: {
    fg: "var(--crimson-bright)",
    bd: "var(--crimson)",
    bg: "color-mix(in srgb, var(--crimson) 18%, transparent)",
  },
};

export function Badge({ children, tone = "neutral", solid = false, style, ...rest }: BadgeProps) {
  const t = TONES[tone];
  const base: CSSProperties = {
    display:       "inline-flex",
    alignItems:    "center",
    gap:           6,
    padding:       "4px 10px",
    fontFamily:    "var(--font-display)",
    fontSize:      11,
    fontWeight:    "var(--w-semibold)" as CSSProperties["fontWeight"],
    letterSpacing: "var(--track-label)",
    textTransform: "uppercase",
    borderRadius:  "var(--radius-0)",
    lineHeight:    1,
    border:        `1px solid ${t.bd}`,
    color:         solid ? "var(--slate-1000)" : t.fg,
    background:    solid ? t.bd : t.bg,
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {children}
    </span>
  );
}
