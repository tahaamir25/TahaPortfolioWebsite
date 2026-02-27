"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import type { ExperienceColor } from "@/data/experience";

const accentStyles: Record<
  ExperienceColor,
  { dot: string; border: string; company: string; tag: string }
> = {
  blue: {
    dot: "bg-accent border-accent/30",
    border: "border-l-accent/60",
    company: "text-accent",
    tag: "bg-accent/10 border-accent/20 text-accent",
  },
  violet: {
    dot: "bg-violet-500 border-violet-500/30",
    border: "border-l-violet-500/60",
    company: "text-violet-600 dark:text-violet-400",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-400",
  },
  emerald: {
    dot: "bg-emerald-500 border-emerald-500/30",
    border: "border-l-emerald-500/60",
    company: "text-emerald-600 dark:text-emerald-400",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400",
  },
  amber: {
    dot: "bg-amber-500 border-amber-500/30",
    border: "border-l-amber-500/60",
    company: "text-amber-600 dark:text-amber-400",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <SectionWrapper id="experience">
      <SectionHeading>Experience</SectionHeading>

      <div ref={ref} className="mt-10 relative">

        <div className="absolute left-[6px] top-3 bottom-3 w-px bg-black/[0.08] dark:bg-white/10" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const style = accentStyles[exp.color];
            return (
              <motion.div
                key={`${exp.company}-${i}`}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="flex gap-6 items-start"
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 mt-4 z-10 ${style.dot}`}
                />

                <div
                  className={`flex-1 bg-card border border-black/[0.08] dark:border-white/10 border-l-4 ${style.border} rounded-xl p-5 shadow-sm dark:shadow-none hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_0_28px_rgba(41,151,255,0.12)] transition-all duration-300 cursor-default`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <p className={`font-bold text-base leading-snug ${style.company}`}>
                        {exp.company}
                      </p>
                      <p className="text-text-primary font-semibold text-sm mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs text-muted font-mono flex-shrink-0 sm:text-right mt-0.5">
                      {exp.dates}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-muted text-xs mb-4">
                    <FiMapPin size={11} />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-muted text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${style.dot}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded text-xs border ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
