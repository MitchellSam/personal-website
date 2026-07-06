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

// Text mirrors resume/resume.tex verbatim — the resume is the canonical
// wording. Update the resume first, then sync this file.
export const experience: Role[] = [
  {
    company: "A.V. Services Inc.",
    companyShort: "A.V. Services / JPMC",
    badge: "Current",
    title: "Fullstack Software Engineer II (Contracted to JPMorgan Chase)",
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
      "Offered consulting services focused on infrastructure, legacy system upgrades, and intelligent data ingestion pipelines.",
    bullets: [
      {
        label: "Windows on the Lake",
        text: "Refactored and enhanced a legacy email parsing system that routes client inquiries to a CRM. Enhancements include using the GLiNER Named Entity Recognition model for natural language processing for intelligent tagging and categorization of data.",
      },
      {
        label: "HEVO",
        text: "Conducted a post-migration technical audit of AWS infrastructure, legacy Java codebases, and CI/CD pipelines to help restore platform functionality and re-establish internal development workflows after transitioning from a third-party contractor.",
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
      "Agile FinTech company that offers an all-in-one wealth management platform that assists relationship-focused advisors with portfolio management, performance reporting, and rebalancing.",
    bullets: [
      {
        label: "Front-End Modernization",
        text: "Made significant contributions to the migration of multiple Angular front ends to React, preserving 100% functionality, reducing loading times by 50%, and creating a smoother user experience.",
      },
      {
        label: "Automated Testing",
        text: "Developed and implemented comprehensive automated tests using Mocha, Chai, and Jasmine, achieving 100% code coverage, and improving deployment confidence.",
      },
      {
        label: "Queueing System",
        text: "Built a Redis-based queuing system to handle high-volume financial report processing, reducing backend processing time by 50% and improving system reliability.",
      },
      {
        label: "Third-Party Integrations",
        text: "Successfully integrated third-party systems using RESTful APIs enabling seamless data exchange, and expanding the platform's functionality and product offerings by 50%.",
      },
      {
        label: "Onboarding & Documentation",
        text: "Played a pivotal role in onboarding new hires by setting up their technical environment and authoring detailed documentation, reducing ramp-up time by 25%.",
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
      "Worked for a Premiere Waterfront Wedding Venue, Catering Hall, and Events Facility to improve business operations and customer engagements.",
    bullets: [
      {
        label: "Email Parser Enhancement",
        text: "Enhanced the automated email parser for the client, improving data extraction accuracy by 33% and streamlining communication processes.",
      },
      {
        label: "CRM Optimization",
        text: "Optimized the client's CRM data flow, increasing data integrity and organization of the company's event management software, resulting in a 20% increase in customer conversions.",
      },
      {
        label: "Backend Development",
        text: "Developed new features for backend APIs using Node.js and Express, supporting business operations and expanding functionality by 25%.",
      },
      {
        label: "Container Deployments",
        text: "Managed container deployments with Docker, ensuring reliable and scalable application delivery, achieving 99.9% uptime and improving scalability for client applications.",
      },
    ],
    featured: true,
  },
  {
    company: "FDM Group",
    companyShort: "FDM / Fannie Mae",
    badge: "Early career",
    title: "Business Analyst Consultant at Fannie Mae",
    dates: "May 2016 — Jan 2018",
    location: "Washington, DC",
    description:
      "Fannie Mae is a government-sponsored enterprise that issues mortgage-backed securities to expand the secondary mortgage market and create opportunities to rent, buy, and refinance homes.",
    bullets: [
      {
        label: "Data Analytics & Visualization",
        text: "Produced, analyzed, and visualized data for over 100 usage and performance metrics, providing valuable insights that informed stakeholder decisions.",
      },
      {
        label: "Testing",
        text: "Supported internal tools used by risk and compliance teams. Wrote Python scripts, UNIX bash scripts, and SQL queries for data analysis and QA validation, performing hundreds of tests for research and data quality, reducing manual testing time by 50% and ensuring accurate and timely releases.",
      },
      {
        label: "Automation",
        text: "Automated production-related tasks, saving the company approximately 100 man-hours per month and improving operational efficiency.",
      },
      {
        label: "Loan Performance Improvements",
        text: "Delivered enhancements to the Loan Performance application, improving data quality and reducing report generation time by 50% while adding new features to improve user experience.",
      },
    ],
    featured: true,
  },
  {
    company: "Amelotte International Corporation",
    badge: "Early career",
    title: "IT Support",
    dates: "Nov 2014 — Jul 2015",
    location: "New York, NY",
    description:
      "Textiles and clothing manufacturing group with factories in Asia and regional offices in the United States.",
    bullets: [
      {
        label: "Database Development",
        text: "Developed and implemented a database solution for tracking financial data, reducing invoice processing time by 25% and minimizing errors.",
      },
      {
        label: "Mentorship",
        text: "Led training sessions on database schema design and data best practices, improving the technical proficiency of the management team and coworkers.",
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
      "Non-profit offering career lifecycle and cross-industry networking and mentorship opportunities, development, and leadership programs for Pan-Asian professionals.",
    bullets: [
      {
        label: "Website & Membership Database Management",
        text: "Managed and updated the organization's website and membership database, contributing to a 50% increase in event registrations through improved visibility.",
      },
      {
        label: "Data Analysis",
        text: "Analyzed metrics for over 50 volunteer branches and over 5,000 registered members, providing insights that drove marketing decisions and strategic initiatives.",
      },
      {
        label: "Acquisition Project",
        text: "Played a key role during the acquisition of another organization by successfully implementing a website redesign and merging the distribution lists of over 60,000 contacts, ensuring data integrity and a smooth transition.",
      },
    ],
  },
];
