import { skills, certifications } from "@/content/skills";
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
              <div className="bg-surface border border-border rounded-[12px] p-[22px] transition-colors hover:border-border-hover">
                <div className="font-mono text-[11.5px] text-muted uppercase tracking-[0.08em] mb-[18px] pb-3.5 border-b border-border flex items-center gap-2">
                  <span className="w-[5px] h-[5px] rounded-full bg-accent opacity-80" />
                  {group.label}
                </div>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-[#cfcfcf] font-[450]">
                      <span className="font-mono text-[11px] text-muted w-[18px]">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <RevealOnScroll className="mt-12">
          <div className="bg-surface border border-border rounded-[12px] p-[22px]">
            <div className="font-mono text-[11.5px] text-muted uppercase tracking-[0.08em] mb-[18px] pb-3.5 border-b border-border flex items-center gap-2">
              <span className="w-[5px] h-[5px] rounded-full bg-accent opacity-80" />
              Licenses &amp; Certifications
            </div>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2.5 text-[14.5px] text-[#cfcfcf]">
                  <span className="w-[5px] h-[5px] rounded-full bg-border-hover border border-[#333] shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
