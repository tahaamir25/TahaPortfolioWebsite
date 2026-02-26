"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  FiBookOpen,
  FiCode,
  FiCompass,
  FiCpu,
  FiLayers,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";
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

const categoryBadgeStyle: Record<string, string> = {
  "Languages":
    "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:border-amber-500/70 hover:bg-amber-500/20",
  "Frameworks & Libraries":
    "border-accent/40 bg-accent/10 text-accent hover:border-accent/70 hover:bg-accent/20",
  "Tools & Platforms":
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:border-emerald-500/70 hover:bg-emerald-500/20",
};

const defaultBadgeStyle =
  "border-black/[0.08] dark:border-white/10 bg-black/[0.04] dark:bg-white/5 text-muted hover:border-accent hover:text-text-primary";

const education = [
  {
    initial: "U",
    institution: "UH",
    degree: "B.S. / M.S.",
    field: "Computer Science",
    dates: "20XX – 20XX",
    tags: ["tag1", "tag2"],
  },
];

const certifications: {
  name: string;
  issuer: string;
  year: string;
  status: "Active" | "In Progress";
  tags: string[];
}[] = [
  {
    name: "Certification Name",
    issuer: "ISTQB",
    year: "2025",
    status: "Active",
    tags: ["tag"],
  },
];


type CardColor = "violet" | "blue" | "emerald";

const interestColors: Record<
  CardColor,
  { icon: string; subtitle: string; tag: string }
> = {
  violet: {
    icon: "bg-violet-500/10 border-violet-500/20",
    subtitle: "text-violet-600 dark:text-violet-400",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-400",
  },
  blue: {
    icon: "bg-accent/10 border-accent/20",
    subtitle: "text-accent",
    tag: "bg-accent/10 border-accent/20 text-accent",
  },
  emerald: {
    icon: "bg-emerald-500/10 border-emerald-500/20",
    subtitle: "text-emerald-600 dark:text-emerald-400",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
  },
};

const careerInterests: {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  keyFocus: string[];
  color: CardColor;
}[] = [
  {
    icon: FiCpu,
    title: "AI Engineer",
    subtitle: "Machine Learning & LLMs",
    description:
      "TODO: A short line about what draws you to AI — models, applications, or the engineering side.",
    keyFocus: ["TODO: LLMs", "TODO: RAG", "TODO: APIs"],
    color: "violet",
  },
  {
    icon: FiLayers,
    title: "Software Development",
    subtitle: "Full-Stack Engineering",
    description:
      "TODO: What excites you about building products — architecture, UX, systems, or all of it.",
    keyFocus: ["TODO: React", "TODO: Next.js", "TODO: Systems"],
    color: "blue",
  },
  {
    icon: FiBarChart2,
    title: "Data Analytics",
    subtitle: "Analytics & Insights",
    description:
      "TODO: What you enjoy about data — patterns, pipelines, visualization, or decision-making.",
    keyFocus: ["TODO: Python", "TODO: SQL", "TODO: Dashboards"],
    color: "emerald",
  },
];

const cardGlow =
  "bg-card border border-black/[0.08] dark:border-white/10 rounded-xl " +
  "hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(41,151,255,0.12)] " +
  "transition-all duration-300 cursor-default";

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function SubHeading({ icon: Icon, children }: { icon: IconType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon size={14} className="text-accent" />
      <span className="text-xs tracking-widest uppercase text-accent">{children}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: "Active" | "In Progress" }) {
  const styles =
    status === "Active"
      ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
      : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border font-medium flex-shrink-0 ${styles}`}>
      {status}
    </span>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <SectionWrapper id="about">
      <SectionHeading>About Me</SectionHeading>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mt-10 items-start">
        <div className="flex-1 space-y-4 text-muted text-base md:text-lg leading-relaxed">
          <p>First Paragraph.</p>
          <p>Second Paragraph.</p>
          <p>Third Paragraph.</p>
        </div>

        <div className="flex-shrink-0 self-center md:self-start">
          {/*
            <Image
              src="/photo.jpg"
              alt="Taha Amir
              width={200}
              height={200}
              className="rounded-full object-cover border border-white/10"
            />
            Nice photo of me in public folder along with resume!!
          */}
          <div className="w-44 h-44 rounded-full border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center bg-black/[0.03] dark:bg-white/5">
            <span className="text-muted text-xs text-center px-4 leading-relaxed">Placeholder</span>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mt-16 space-y-12"
      >

        <motion.div variants={blockVariants}>
          <SubHeading icon={FiBookOpen}>Education & Certifications</SubHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.institution} className={`${cardGlow} p-5`}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-base flex-shrink-0">
                    {edu.initial}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-text-primary font-semibold text-sm leading-snug">{edu.institution}</p>
                    <p className="text-accent text-xs font-medium">{edu.degree}</p>
                    <p className="text-muted text-xs">{edu.field}</p>
                    <p className="text-muted text-xs pt-0.5">{edu.dates}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {edu.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {certifications.map((cert) => (
              <div key={cert.name} className={`${cardGlow} p-5`}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <FiAward size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-text-primary font-semibold text-sm leading-snug">{cert.name}</p>
                      <StatusBadge status={cert.status} />
                    </div>
                    <p className="text-accent text-xs font-medium">{cert.issuer}</p>
                    <p className="text-muted text-xs">{cert.year}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={blockVariants}>
          <SubHeading icon={FiCompass}>Career Interests</SubHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {careerInterests.map(({ icon: Icon, title, subtitle, description, keyFocus, color }) => {
              const c = interestColors[color];
              return (
                <div key={title} className={`${cardGlow} p-5 flex flex-col gap-3`}>
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    <Icon size={15} className={c.subtitle} />
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">{title}</p>
                    <p className={`text-xs mt-0.5 ${c.subtitle}`}>{subtitle}</p>
                  </div>
                  <p className="text-muted text-xs leading-relaxed flex-1">{description}</p>
                  <div>
                    <p className="text-xs text-muted/60 uppercase tracking-widest mb-1.5">Key Focus</p>
                    <div className="flex flex-wrap gap-1.5">
                      {keyFocus.map((item) => (
                        <span key={item} className={`px-2 py-0.5 rounded text-xs border ${c.tag}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={blockVariants}>
          <SubHeading icon={FiCode}>Technical Skills</SubHeading>

          <div className="space-y-5">
            {skillGroups.map(({ category, skills }) => {
              const badgeStyle = categoryBadgeStyle[category] ?? defaultBadgeStyle;
              return (
                <div key={category}>
                  <p className="text-muted text-xs tracking-widest uppercase mb-2.5">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill];
                      return (
                        <span
                          key={skill}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs transition-all duration-200 ${badgeStyle}`}
                        >
                          {SkillIcon && <SkillIcon size={11} />}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </motion.div>
    </SectionWrapper>
  );
}
