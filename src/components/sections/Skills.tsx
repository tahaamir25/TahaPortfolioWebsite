import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSwift,
  SiKotlin,
  SiCplusplus,
  SiRust,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazon,
  SiVercel,
  SiFigma,
  SiLinux,
} from "react-icons/si";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

const skillIconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: FaJava,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  "C++": SiCplusplus,
  Rust: SiRust,
  Go: SiGo,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Django: SiDjango,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  AWS: SiAmazon,
  Vercel: SiVercel,
  Figma: SiFigma,
  Linux: SiLinux,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading>Skills</SectionHeading>

      <div className="mt-10 space-y-10">
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-xs tracking-widest uppercase text-accent mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = skillIconMap[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-sm text-muted hover:border-accent hover:text-text-primary transition-all duration-200"
                  >
                    {Icon && <Icon size={14} />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
