import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/Badge";
import { CornerFrame } from "@/components/ui/CornerFrame";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Experience() {
  return (
    <section id="work" className="py-[120px]">
      <div className="w-full max-w-content mx-auto px-8">
        <SectionHeader num="01" title="Work Experience" />
        <div className="flex flex-col gap-4">
          {experience.map((role, i) => (
            <RevealOnScroll key={role.company + role.dates} delay={i * 0.05}>
              <CornerFrame density="minimal" tone="gold" padding={28}>
                <div className="grid grid-cols-[200px_1fr] gap-10 max-[860px]:grid-cols-1 max-[860px]:gap-5">

                  {/* Meta column */}
                  <div className="flex flex-col gap-3">
                    <div
                      style={{
                        fontFamily:    "var(--font-display)",
                        fontSize:      "var(--fs-label)",
                        fontWeight:    "var(--w-semibold)",
                        letterSpacing: "var(--track-label)",
                        textTransform: "uppercase",
                        color:         "var(--accent-text)",
                        lineHeight:    "var(--lh-snug)",
                      }}
                    >
                      {role.companyShort ?? role.company}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-numeric)",
                        fontSize:   "var(--fs-sm)",
                        fontWeight: "var(--w-thin)",
                        color:      "var(--text-muted)",
                        letterSpacing: "var(--track-tight)",
                      }}
                    >
                      {role.dates}
                    </div>
                    <Badge tone={role.badge === "Current" ? "gold" : "neutral"}>
                      {role.badge}
                    </Badge>
                  </div>

                  {/* Body column */}
                  <div>
                    <div
                      style={{
                        fontFamily:    "var(--font-display)",
                        fontSize:      "var(--fs-title)",
                        fontWeight:    "var(--w-semibold)",
                        color:         "var(--text-primary)",
                        letterSpacing: "var(--track-tight)",
                        marginBottom:  6,
                        lineHeight:    "var(--lh-snug)",
                      }}
                    >
                      {role.title}
                    </div>
                    <p
                      style={{
                        fontFamily:   "var(--font-text)",
                        fontSize:     "var(--fs-sm)",
                        color:        "var(--text-muted)",
                        lineHeight:   "var(--lh-body)",
                        marginBottom: 16,
                      }}
                    >
                      {role.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {role.bullets.map((b) => (
                        <li
                          key={b.label}
                          className="relative pl-5"
                          style={{
                            fontFamily: "var(--font-text)",
                            fontSize:   "var(--fs-sm)",
                            color:      "var(--text-body)",
                            lineHeight: "var(--lh-body)",
                          }}
                        >
                          {/* Gold diamond marker */}
                          <span
                            className="absolute left-0 top-[7px]"
                            style={{
                              display:   "inline-block",
                              width:     6,
                              height:    6,
                              background:"var(--gold)",
                              transform: "rotate(45deg)",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily:    "var(--font-display)",
                              fontWeight:    "var(--w-semibold)",
                              fontSize:      "var(--fs-label)",
                              letterSpacing: "var(--track-label)",
                              textTransform: "uppercase",
                              color:         "var(--accent-text)",
                            }}
                          >
                            {b.label}:{" "}
                          </span>
                          {b.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CornerFrame>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
