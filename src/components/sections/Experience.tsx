import { experience } from "@/content/experience";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Experience() {
  return (
    <section id="work" className="py-[120px]">
      <div className="w-full max-w-content mx-auto px-8">
        <SectionHeader num="01" title="Work Experience" />
        <div className="flex flex-col">
          {experience.map((role, i) => (
            <RevealOnScroll key={role.company + role.dates} delay={i * 0.05}>
              <article className="grid grid-cols-[220px_1fr] gap-10 py-9 border-t border-border last:border-b max-[860px]:grid-cols-1 max-[860px]:gap-4">
                {/* Meta */}
                <div>
                  <div className="font-mono text-[15px] font-semibold text-text tracking-[-0.01em] mb-1.5 leading-[1.35]">
                    {role.companyShort ?? role.company}
                  </div>
                  <div className="font-mono text-[12.5px] text-muted">{role.dates}</div>
                  <span className="inline-block mt-3 font-mono text-[11px] text-accent px-[9px] py-[3px] border border-accent/20 rounded-[5px]">
                    {role.badge}
                  </span>
                </div>

                {/* Body */}
                <div>
                  <div className="text-[19px] font-semibold text-text tracking-[-0.015em] mb-1.5">
                    {role.title}
                  </div>
                  <p className="text-[14.5px] text-muted-2 mb-4">{role.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {role.bullets.map((b) => (
                      <li
                        key={b.label}
                        className="relative pl-[22px] text-[14.5px] text-[#c4c4c4] leading-[1.55] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border-hover before:border before:border-[#333]"
                      >
                        <b className="text-accent font-semibold font-mono text-[13.5px]">
                          {b.label}:{" "}
                        </b>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
