import { CSSProperties, HTMLAttributes } from "react";

type Density = "full" | "minimal";
type Tone = "cyan" | "gold" | "crimson";

interface CornerFrameProps extends HTMLAttributes<HTMLDivElement> {
  density?: Density;
  tone?: Tone;
  brackets?: boolean;
  glow?: boolean;
  tick?: boolean;
  padding?: number | string;
}

const TONE_MAP: Record<Tone, string> = {
  cyan:    "var(--border-focus)",
  gold:    "var(--accent)",
  crimson: "var(--crimson)",
};

type CornerPos = "tl" | "tr" | "bl" | "br";

function Corner({ pos, toneColor }: { pos: CornerPos; toneColor: string }) {
  const len = 16, t = 2;
  const base: CSSProperties = {
    position:    "absolute",
    width:       len,
    height:      len,
    pointerEvents: "none",
    borderColor: toneColor,
  };
  const map: Record<CornerPos, CSSProperties> = {
    tl: { top: -1, left:  -1, borderTop:    `${t}px solid`, borderLeft:   `${t}px solid` },
    tr: { top: -1, right: -1, borderTop:    `${t}px solid`, borderRight:  `${t}px solid` },
    bl: { bottom: -1, left:  -1, borderBottom: `${t}px solid`, borderLeft:   `${t}px solid` },
    br: { bottom: -1, right: -1, borderBottom: `${t}px solid`, borderRight:  `${t}px solid` },
  };
  return <span style={{ ...base, ...map[pos] }} />;
}

export function CornerFrame({
  children,
  density = "minimal",
  tone = "cyan",
  brackets,
  glow,
  tick,
  padding = 20,
  style,
  ...rest
}: CornerFrameProps) {
  const full         = density === "full";
  const showBrackets = brackets ?? full;
  const showGlow     = glow ?? full;
  const showTick     = tick ?? full;
  const toneColor    = TONE_MAP[tone] ?? tone;

  const base: CSSProperties = {
    position:        "relative",
    padding,
    background:      "color-mix(in srgb, var(--surface-card) 88%, transparent)",
    backgroundImage: "var(--wash-panel)",
    border:          "1px solid var(--border-hairline)",
    boxShadow:       showGlow ? `0 0 24px -10px ${toneColor}, var(--shadow-plate)` : "none",
    transition:      "box-shadow var(--dur-base) var(--ease-sharp)",
    ...style,
  };

  return (
    <div style={base} {...rest}>
      {showBrackets && (["tl", "tr", "bl", "br"] as CornerPos[]).map((p) => (
        <Corner key={p} pos={p} toneColor={toneColor} />
      ))}
      {showTick && (
        <span style={{
          position:  "absolute",
          top:       -1,
          left:      "50%",
          transform: "translateX(-50%)",
          width:     44,
          height:    2,
          background: toneColor,
          opacity:   0.8,
        }} />
      )}
      {children}
    </div>
  );
}
