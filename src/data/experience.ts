export type ExperienceColor = "violet" | "blue" | "emerald" | "amber";

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];  
  tags: string[];     
  color: ExperienceColor;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Company Name",
    role: "Job Title",
    dates: "Month 20XX – Month 20XX",
    location: "City, Province · Full-time",
    bullets: [
      "Key achievement or responsibility with measurable impact.",
      "Another contribution highlighting technical skills used.",
      "Third bullet — quantify outcomes where possible (e.g. reduced X by Y%).",
    ],
    tags: ["React", "Python", "AWS"],
    color: "blue",
  },
  {
    company: "Company Name",
    role: "Job Title",
    dates: "Month 20XX – Month 20XX",
    location: "City, Province · Internship",
    bullets: [
      "Key contribution during this role.",
      "What you built, improved, or learned.",
    ],
    tags: ["Next.js", "TypeScript"],
    color: "violet",
  },
  {
    company: "Company Name",
    role: "Job Title",
    dates: "Month 20XX – Month 20XX",
    location: "Remote · Contract",
    bullets: [
      "Describe the project or engagement.",
      "Highlight technologies and outcomes.",
    ],
    tags: ["Python", "SQL"],
    color: "emerald",
  },
];
