import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Props {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <RevealOnScroll className="flex items-baseline gap-4 mb-16">
      <span style={{
        fontFamily:    "var(--font-numeric)",
        fontSize:      "var(--fs-label)",
        fontWeight:    "var(--w-thin)",
        color:         "var(--accent-text)",
        letterSpacing: "var(--track-label)",
      }}>
        {num}
      </span>
      <h2
        style={{
          fontFamily:    "var(--font-display)",
          fontWeight:    "var(--w-bold)",
          fontSize:      "clamp(22px, 3vw, 32px)",
          letterSpacing: "var(--track-wide)",
          textTransform: "uppercase",
          color:         "var(--text-primary)",
          margin:        0,
          lineHeight:    "var(--lh-snug)",
        }}
      >
        {title}
      </h2>
      <span className="flex-1 self-center ml-2" style={{ height: 1, background: "var(--border-hairline)" }} />
    </RevealOnScroll>
  );
}
