export interface SkillGroup {
  category: string;
  skills: string[];
}


export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "Test; Add More"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Test; Add More"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Test; Add More"],
  },
];
