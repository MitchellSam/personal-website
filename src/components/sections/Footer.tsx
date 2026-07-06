"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

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
            <GitHubIcon />
          </IconLink>

          {/* LinkedIn */}
          <IconLink href="https://linkedin.com/in/mitchell-sam" aria-label="LinkedIn" external>
            <LinkedInIcon />
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
