"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)" }} className="py-9">
      <div className="w-full max-w-content mx-auto px-8 flex items-center justify-between gap-6 flex-wrap max-[680px]:flex-col max-[680px]:items-start">

        {/* Identity */}
        <div
          style={{
            fontFamily:    "var(--font-display)",
            fontSize:      "var(--fs-label)",
            letterSpacing: "var(--track-label)",
            textTransform: "uppercase",
            color:         "var(--text-muted)",
          }}
        >
          Mitchell Sam{" "}
          <span style={{ color: "var(--accent-text)", margin: "0 6px" }}>·</span>
          New York, NY
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <IconLink href="https://github.com/MitchellSam" aria-label="GitHub" external>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </IconLink>

          {/* LinkedIn */}
          <IconLink href="https://linkedin.com/in/mitchell-sam" aria-label="LinkedIn" external>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </IconLink>

          {/* Email */}
          <IconLink href="mailto:msam478@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="0" />
              <path d="m2 6 10 7 10-7" />
            </svg>
          </IconLink>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            className="ml-3 pl-4"
            style={{
              borderLeft:    "1px solid var(--border-hairline)",
              fontFamily:    "var(--font-display)",
              fontSize:      "var(--fs-label)",
              letterSpacing: "var(--track-label)",
              textTransform: "uppercase",
              color:         "var(--text-muted)",
              transition:    "color var(--dur-fast) var(--ease-sharp)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-text)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  children,
  external,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{
        width:          36,
        height:         36,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        border:         "1px solid var(--border-hairline)",
        borderRadius:   "var(--radius-0)",
        color:          "var(--text-muted)",
        transition:     "color var(--dur-fast) var(--ease-sharp), border-color var(--dur-fast) var(--ease-sharp)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent-text)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border-hairline)";
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
