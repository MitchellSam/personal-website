import { projects } from "@/content/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
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
                        style={{
                          flex:          1,
                          display:       "inline-flex",
                          alignItems:    "center",
                          justifyContent:"center",
                          gap:           6,
                          fontFamily:    "var(--font-display)",
                          fontSize:      "var(--fs-label)",
                          letterSpacing: "var(--track-label)",
                          textTransform: "uppercase",
                          color:         "var(--text-muted)",
                          padding:       "8px 12px",
                          border:        "1px solid var(--border-hairline)",
                          borderRadius:  "var(--radius-0)",
                          transition:    "color var(--dur-fast) var(--ease-sharp), border-color var(--dur-fast) var(--ease-sharp)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor = "var(--border-strong)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-muted)";
                          e.currentTarget.style.borderColor = "var(--border-hairline)";
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        style={{
                          flex:          1,
                          display:       "inline-flex",
                          alignItems:    "center",
                          justifyContent:"center",
                          gap:           6,
                          fontFamily:    "var(--font-display)",
                          fontSize:      "var(--fs-label)",
                          letterSpacing: "var(--track-label)",
                          textTransform: "uppercase",
                          color:         "var(--text-muted)",
                          padding:       "8px 12px",
                          border:        "1px solid var(--border-hairline)",
                          borderRadius:  "var(--radius-0)",
                          transition:    "color var(--dur-fast) var(--ease-sharp), border-color var(--dur-fast) var(--ease-sharp)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor = "var(--border-strong)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-muted)";
                          e.currentTarget.style.borderColor = "var(--border-hairline)";
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
                        </svg>
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
