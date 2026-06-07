import { projects } from "@/content/projects";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="w-full max-w-content mx-auto px-8">
        <SectionHeader num="02" title="Projects" />
        <div className="grid grid-cols-2 gap-5 max-[680px]:grid-cols-1">
          {projects.map((p, i) =>
            p.comingSoon ? (
              <RevealOnScroll key={p.slug} delay={i * 0.07}>
                <article className="flex flex-col items-center justify-center gap-3 min-h-[230px] border border-dashed border-border-hover rounded-[14px] text-center transition-colors hover:border-[#333] hover:bg-surface/40">
                  <div className="w-11 h-11 rounded-[11px] border border-dashed border-[#333] flex items-center justify-center text-muted text-[22px] font-light">
                    +
                  </div>
                  <h3 className="text-muted-2 text-base font-semibold">More coming soon</h3>
                  <p className="font-mono text-[12px] text-muted">// in progress</p>
                </article>
              </RevealOnScroll>
            ) : (
              <RevealOnScroll key={p.slug} delay={i * 0.07}>
                <article className="flex flex-col min-h-[230px] bg-surface border border-border rounded-[14px] p-7 transition-all hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(110,231,183,0.1),0_12px_40px_-12px_rgba(110,231,183,0.18)] hover:-translate-y-[3px] hover:bg-surface-2">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-[38px] h-[38px] rounded-[9px] bg-accent-dim border border-accent/20 flex items-center justify-center text-accent">
                      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <span className="font-mono text-[12px] text-muted">{p.num}</span>
                  </div>
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] mb-2">{p.title}</h3>
                  <p className="text-[14px] text-muted-2 leading-[1.55] mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] text-muted-2 px-[9px] py-[3px] bg-bg border border-border rounded-[5px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2.5">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium py-[9px] px-3 border border-border rounded-lg text-muted-2 transition-all hover:text-text hover:border-border-hover hover:bg-bg">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium py-[9px] px-3 border border-border rounded-lg text-muted-2 transition-all hover:text-text hover:border-border-hover hover:bg-bg">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </article>
              </RevealOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
}
