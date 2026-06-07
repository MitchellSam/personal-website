export type ProjectType = "project" | "game" | "demo" | "oss";

export interface Project {
  slug: string;
  type: ProjectType;
  num: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "coming-soon-1",
    type: "project",
    num: "001",
    title: "Coming soon",
    description: "",
    stack: [],
    comingSoon: true,
  },
  {
    slug: "coming-soon-2",
    type: "project",
    num: "002",
    title: "Coming soon",
    description: "",
    stack: [],
    comingSoon: true,
  },
  {
    slug: "coming-soon-3",
    type: "project",
    num: "003",
    title: "Coming soon",
    description: "",
    stack: [],
    comingSoon: true,
  },
];
