export interface Role {
  company: string;
  companyShort?: string;
  badge: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  bullets: { label: string; text: string }[];
  featured?: boolean;
}

export const experience: Role[] = [
  {
    company: "A.V. Services Inc.",
    companyShort: "A.V. Services / JPMC",
    badge: "Current",
    title: "Fullstack Software Engineer II",
    dates: "Dec 2025 — Present",
    location: "Jersey City, NJ",
    description:
      "Primary engineer on a multimedia integration application at JPMorgan Chase, focused on codebase modernization and platform stability.",
    bullets: [
      {
        label: "Codebase Modernization",
        text: "Leading a systematic refactoring initiative across the full stack, improving code quality, maintainability, and long-term extensibility of a complex internal platform.",
      },
      {
        label: "AI-Assisted Development",
        text: "Leveraging GitHub Copilot and Claude Code to accelerate large-scale refactoring efforts, significantly increasing throughput and code quality across the codebase.",
      },
      {
        label: "Spec-Driven Development",
        text: "Championing the adoption of spec-driven development practices with the broader engineering team, establishing a disciplined approach to defining behavior before implementation.",
      },
      {
        label: "Full Rewrite Initiative",
        text: "Collaborating with the team to architect a full rewrite of the platform, applying spec-driven development methodologies to modernize the application's architecture and improve scalability.",
      },
    ],
    featured: true,
  },
  {
    company: "Consultant",
    badge: "Independent",
    title: "Software Developer",
    dates: "Jun 2023 — Dec 2025",
    location: "New York, NY",
    description:
      "Independent consulting focused on infrastructure, legacy system upgrades, and intelligent data ingestion pipelines.",
    bullets: [
      {
        label: "Windows on the Lake",
        text: "Refactored and enhanced a legacy email parsing system that routes client inquiries to a CRM, integrating the GLiNER Named Entity Recognition model for intelligent NLP-based tagging and categorization.",
      },
      {
        label: "HEVO",
        text: "Conducted a post-migration technical audit of AWS infrastructure, legacy Java codebases, and CI/CD pipelines to restore platform functionality after a contractor transition.",
      },
    ],
    featured: true,
  },
  {
    company: "CircleBlack Inc.",
    badge: "3 yrs",
    title: "Software Engineer",
    dates: "Mar 2020 — Jun 2023",
    location: "Jersey City, NJ",
    description:
      "Agile FinTech company offering an all-in-one wealth management platform for portfolio management, performance reporting, and rebalancing.",
    bullets: [
      {
        label: "Front-End Modernization",
        text: "Migrated multiple Angular front ends to React, preserving 100% functionality, reducing loading times by 50%, and creating a smoother user experience.",
      },
      {
        label: "Queueing System",
        text: "Built a Redis-based queuing system to handle high-volume financial report processing, reducing backend processing time by 50% and improving system reliability.",
      },
      {
        label: "Third-Party Integrations",
        text: "Integrated third-party systems via RESTful APIs, expanding platform functionality and product offerings by 50%.",
      },
      {
        label: "Automated Testing",
        text: "Developed comprehensive automated tests using Mocha, Chai, and Jasmine, achieving 100% code coverage and improving deployment confidence.",
      },
      {
        label: "Onboarding & Documentation",
        text: "Reduced new-hire ramp-up time by 25% through technical environment setup and detailed onboarding documentation.",
      },
    ],
    featured: true,
  },
  {
    company: "Windows on the Lake",
    badge: "Junior",
    title: "Junior Developer",
    dates: "Mar 2019 — Feb 2020",
    location: "New York, NY",
    description:
      "Premiere waterfront wedding venue and events facility.",
    bullets: [
      {
        label: "Email Parser",
        text: "Enhanced the automated email parser, improving data extraction accuracy by 33% and streamlining communication processes.",
      },
      {
        label: "CRM Optimization",
        text: "Optimized CRM data flow, resulting in a 20% increase in customer conversions.",
      },
      {
        label: "Backend Development",
        text: "Developed new backend API features using Node.js and Express, expanding functionality by 25%.",
      },
      {
        label: "Container Deployments",
        text: "Managed Docker container deployments, achieving 99.9% uptime and improving scalability for client applications.",
      },
    ],
    featured: true,
  },
  {
    company: "FDM Group",
    companyShort: "FDM / Fannie Mae",
    badge: "Early career",
    title: "Business Analyst Consultant",
    dates: "May 2016 — Jan 2018",
    location: "Washington, DC",
    description:
      "Embedded consultant at Fannie Mae, a government-sponsored enterprise issuing mortgage-backed securities.",
    bullets: [
      {
        label: "QA Automation",
        text: "Wrote Python, Bash, and SQL tooling for data analysis and QA validation, reducing manual testing time by 50%.",
      },
      {
        label: "Automation",
        text: "Automated production-related tasks, saving approximately 100 man-hours per month.",
      },
      {
        label: "Data Analytics",
        text: "Produced, analyzed, and visualized 100+ usage and performance metrics to inform stakeholder decisions.",
      },
      {
        label: "Loan Performance",
        text: "Delivered application enhancements that reduced report generation time by 50%.",
      },
    ],
    featured: true,
  },
  {
    company: "Amelotte International",
    badge: "Early career",
    title: "IT Support",
    dates: "Nov 2014 — Jul 2015",
    location: "New York, NY",
    description: "Textiles and clothing manufacturing group with global operations.",
    bullets: [
      {
        label: "Database Development",
        text: "Built a database solution for financial tracking, reducing invoice processing time by 25%.",
      },
      {
        label: "Mentorship",
        text: "Led training sessions on database schema design and data best practices.",
      },
    ],
  },
  {
    company: "Ascend Leadership",
    badge: "Early career",
    title: "IT Support",
    dates: "Jun 2013 — Apr 2014",
    location: "New York, NY",
    description:
      "Non-profit offering career and mentorship programs for Pan-Asian professionals.",
    bullets: [
      {
        label: "Web & Database",
        text: "Managed website and membership database, contributing to a 50% increase in event registrations.",
      },
      {
        label: "Data Analysis",
        text: "Analyzed metrics for 50+ volunteer branches and 5,000+ registered members.",
      },
      {
        label: "Acquisition Project",
        text: "Supported an organizational acquisition by merging 60,000+ contact records while ensuring data integrity.",
      },
    ],
  },
];
