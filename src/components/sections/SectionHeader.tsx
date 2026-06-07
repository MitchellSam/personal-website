import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Props {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <RevealOnScroll className="flex items-baseline gap-4 mb-16">
      <span className="font-mono text-[13px] text-accent font-medium">{num}</span>
      <h2
        className="font-semibold tracking-[-0.03em] text-text"
        style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
      >
        {title}
      </h2>
      <span className="flex-1 h-px bg-border self-center ml-2" />
    </RevealOnScroll>
  );
}
