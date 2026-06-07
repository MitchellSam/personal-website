export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Redux", "Angular", "Bootstrap", "Webpack", "Vite"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MS SQL Server", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS (Lambda, S3, CloudFront, Route53)", "Docker", "Git", "CI/CD", "Jenkins"],
  },
  {
    label: "Testing",
    items: ["Jest", "Playwright", "Mocha", "Chai", "Jasmine", "Postman"],
  },
  {
    label: "AI Tools",
    items: ["GitHub Copilot", "Claude Code"],
  },
];

export const certifications = [
  "Foundation Certificate in Business Analysis (2015)",
  "ITIL Foundation Certificate in IT Service Management",
  "AWS Certified Developer – Associate (in progress)",
];
