import { skills, certifications } from "@/content/skills";
import { CornerFrame } from "@/components/ui/CornerFrame";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="py-[120px]">
      <div className="w-full max-w-content mx-auto px-8">
        <SectionHeader num="03" title="Skills" />

        <div className="grid grid-cols-4 gap-4 max-[860px]:grid-cols-2 max-[440px]:grid-cols-1">
          {skills.map((group, i) => (
            <RevealOnScroll key={group.label} delay={i * 0.06}>
              <CornerFrame density="minimal" tone="gold" padding={20} style={{ height: "100%" }}>
                {/* Category label with gold left rule */}
                <div
                  className="flex items-center gap-2 mb-4 pb-3"
                  style={{ borderBottom: "1px solid var(--border-hairline)" }}
                >
                  <span style={{ width: 3, height: 14, background: "var(--gold)", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      "var(--fs-micro)",
                      fontWeight:    "var(--w-semibold)",
                      letterSpacing: "var(--track-wide)",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                    }}
                  >
                    {group.label}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item, j) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5"
                      style={{
                        fontFamily: "var(--font-text)",
                        fontSize:   "var(--fs-sm)",
                        color:      "var(--text-body)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:    "var(--font-numeric)",
                          fontSize:      "var(--fs-micro)",
                          fontWeight:    "var(--w-thin)",
                          color:         "var(--text-faint)",
                          letterSpacing: "var(--track-label)",
                          minWidth:      18,
                        }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CornerFrame>
            </RevealOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <RevealOnScroll className="mt-4">
          <CornerFrame density="minimal" tone="gold" padding={20}>
            <div
              className="flex items-center gap-2 mb-4 pb-3"
              style={{ borderBottom: "1px solid var(--border-hairline)" }}
            >
              <span style={{ width: 3, height: 14, background: "var(--gold)", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "var(--fs-micro)",
                  fontWeight:    "var(--w-semibold)",
                  letterSpacing: "var(--track-wide)",
                  textTransform: "uppercase",
                  color:         "var(--text-muted)",
                }}
              >
                Licenses &amp; Certifications
              </span>
            </div>
            <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-10">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-2.5"
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize:   "var(--fs-sm)",
                    color:      "var(--text-body)",
                  }}
                >
                  <span
                    style={{
                      width:     5,
                      height:    5,
                      background:"var(--border-strong)",
                      transform: "rotate(45deg)",
                      flexShrink: 0,
                    }}
                  />
                  {cert}
                </li>
              ))}
            </ul>
          </CornerFrame>
        </RevealOnScroll>
      </div>
    </section>
  );
}
