import { projects } from "@/content/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/icons";
import SectionHeader from "./SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="w-full max-w-content mx-auto px-8">
        <SectionHeader num="02" title="Projects" />
        <div className="grid grid-cols-2 gap-4 max-[680px]:grid-cols-1">
          {projects.map((p, i) =>
            p.comingSoon ? (
              <RevealOnScroll key={p.slug} delay={i * 0.07}>
                <div
                  className="flex flex-col items-center justify-center gap-4 min-h-[220px]"
                  style={{
                    border:       "1px dashed var(--border-hairline)",
                    borderRadius: "var(--radius-0)",
                    opacity:      0.45,
                  }}
                >
                  <span
                    style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      "var(--fs-label)",
                      letterSpacing: "var(--track-mega)",
                      textTransform: "uppercase",
                      color:         "var(--text-faint)",
                      fontStyle:     "italic",
                    }}
                  >
                    Coming Soon
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-numeric)",
                      fontSize:   "var(--fs-numeral)",
                      fontWeight: "var(--w-thin)",
                      color:      "var(--border-hairline)",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </span>
                </div>
              </RevealOnScroll>
            ) : (
              <RevealOnScroll key={p.slug} delay={i * 0.07}>
                <Card
                  accent={p.type === "game" ? "gold" : "cyan"}
                  interactive
                  style={{ padding: 28, display: "flex", flexDirection: "column", minHeight: 220 }}
                >
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      style={{
                        width:        34,
                        height:       34,
                        background:   "color-mix(in srgb, var(--gold) 14%, transparent)",
                        border:       "1px solid var(--border-hairline)",
                        display:      "flex",
                        alignItems:   "center",
                        justifyContent: "center",
                        color:        "var(--accent-text)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily:    "var(--font-numeric)",
                        fontSize:      "var(--fs-label)",
                        fontWeight:    "var(--w-thin)",
                        color:         "var(--text-faint)",
                        letterSpacing: "var(--track-label)",
                      }}
                    >
                      {p.num}
                    </span>
                  </div>

                  {/* Title */}
                  <div
                    style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      "var(--fs-title)",
                      fontWeight:    "var(--w-semibold)",
                      color:         "var(--text-primary)",
                      letterSpacing: "var(--track-tight)",
                      marginBottom:  8,
                      lineHeight:    "var(--lh-snug)",
                    }}
                  >
                    {p.title}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily:   "var(--font-text)",
                      fontSize:     "var(--fs-sm)",
                      color:        "var(--text-body)",
                      lineHeight:   "var(--lh-body)",
                      marginBottom: 16,
                      flex:         1,
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  {p.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.stack.map((tag) => (
                        <Badge key={tag} tone="neutral">{tag}</Badge>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        <GitHubIcon width={12} height={12} />
                        GitHub
                      </a>
                    )}
                  </div>
                </Card>
              </RevealOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
}
