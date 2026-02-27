"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronLeft } from "react-icons/fi";
import type { Project, ProjectColor } from "@/data/projects";

const colorStyles: Record<
  ProjectColor,
  { badge: string; dot: string; link: string; flip: string }
> = {
  blue: {
    badge: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
    link: "text-accent hover:opacity-70",
    flip: "hover:border-accent/40",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
    dot: "bg-violet-500",
    link: "text-violet-600 dark:text-violet-400 hover:opacity-70",
    flip: "hover:border-violet-500/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
    link: "text-emerald-600 dark:text-emerald-400 hover:opacity-70",
    flip: "hover:border-emerald-500/40",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const c = colorStyles[project.color];

  return (
    <div
      style={{ perspective: "1200px" }}
      className="min-h-[300px] cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="relative w-full h-full min-h-[300px]"
      >

        {/* ── FRONT ── */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 flex flex-col bg-card border border-black/[0.08] dark:border-white/10 ${c.flip} rounded-xl p-5 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_28px_rgba(41,151,255,0.12)] hover:-translate-y-0.5`}
        >
          <div className="flex justify-end mb-3">
            <span className={`text-xs px-2 py-0.5 rounded border font-mono ${c.badge}`}>
              {project.date}
            </span>
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="text-text-primary font-bold text-base leading-snug">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs border border-black/[0.08] dark:border-white/10 bg-black/[0.04] dark:bg-white/5 text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-muted/50 text-[10px] text-right mt-3 tracking-wide">
            tap to flip
          </p>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className={`absolute inset-0 flex flex-col bg-card border border-black/[0.08] dark:border-white/10 ${c.flip} rounded-xl p-5 shadow-sm dark:shadow-none transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-text-primary font-bold text-sm">{project.title}</h3>
            <FiChevronLeft size={14} className="text-muted" />
          </div>

          <p className="text-muted text-xs leading-relaxed mb-4">
            {project.longDescription}
          </p>

          <ul className="space-y-1.5 flex-1 mb-4">
            {project.features.map((feat, i) => (
              <li key={i} className="flex gap-2 text-muted text-xs leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                {feat}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-1.5 text-xs font-medium transition-opacity ${c.link}`}
              >
                <FiGithub size={13} />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center gap-1.5 text-xs font-medium transition-opacity ${c.link}`}
              >
                <FiExternalLink size={13} />
                Live
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
