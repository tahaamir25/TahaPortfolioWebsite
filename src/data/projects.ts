export type ProjectColor = "violet" | "blue" | "emerald";

export interface Project {
  title: string;
  date: string;           
  description: string;    
  longDescription: string; 
  features: string[];     
  techStack: string[];    
  githubUrl?: string;     
  liveUrl?: string;       
  color: ProjectColor;    
}

export const projects: Project[] = [
  {
    title: "NouriCare",
    date: "20XX",
    description: "NouriCare",
    longDescription:
      "NouriCare is a mobile application that helps users track their nutrition and fitness goals.",
    features: [
      "AI-powered meal logging via photo recognition",
      "Real-time sync across iOS and Android",
      "Personalised nutrition dashboard",
    ],
    techStack: ["React Native", "Firebase", "Python"],
    githubUrl: "https://github.com/tahaamir25/nouricare",
    color: "emerald",
  },
  {
    title: "Project Title1",
    date: "20XX",
    description: "One-line pitch for this project1.",
    longDescription: "Expanded description — problem, solution, impact.",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/tahaamir25/...",
    liveUrl: "https://...",
    color: "blue",
  },
  {
    title: "Project Title",
    date: "20XX",
    description: "One-line pitch for this project.",
    longDescription: "Expanded description — problem, solution, impact.",
    features: [
      "Feature 1",
      "Feature 2",
    ],
    techStack: ["Python", "FastAPI", "SQL"],
    color: "violet",
  },
];
