"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <div className="flex flex-col items-center gap-7 max-w-2xl w-full">

        <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-3">
          <p className="text-accent text-xs tracking-[0.3em] uppercase">
            Hey, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-br from-[#1d1d1f] from-60% to-[#007AFF] dark:from-white dark:from-60% dark:to-[#007AFF] bg-clip-text text-transparent">
            Taha Amir
          </h1>
        </motion.div>

        {/* macOS-style terminal for my about me*/}
        <motion.div
          {...fadeUp(0.2)}
          className="w-full max-w-lg bg-card border border-black/[0.06] dark:border-white/[0.07] rounded-2xl overflow-hidden text-left shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.55)]"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.07] bg-[#e8e8e8] dark:bg-[#161616]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-muted font-mono tracking-wide">
              bash — taha@portfolio
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-6 py-5 font-mono text-sm space-y-2">
            <p>
              <span className="text-accent">taha@portfolio</span>
              <span className="text-muted"> ~ % </span>
              <span className="text-text-primary">whoami</span>
            </p>
            <p className="text-muted pl-2">Taha Amir — Software Engineer</p>

            <p className="pt-1">
              <span className="text-accent">taha@portfolio</span>
              <span className="text-muted"> ~ % </span>
              <span className="text-text-primary">cat about.txt</span>
            </p>
            <p className="text-muted pl-2 leading-relaxed">
              CS graduate &amp; software engineer passionate about AI,
              full-stack engineering, and building products that matter.
            </p>

            <p className="pt-1">
              <span className="text-accent">taha@portfolio</span>
              <span className="text-muted"> ~ % </span>
              <span className="text-text-primary">cat roles.txt</span>
            </p>
            <p className="text-muted pl-2">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2200,
                  "AI Engineer",
                  2200,
                  "Full-Stack Developer",
                  2200,
                ]}
                repeat={Infinity}
                cursor={false}
                speed={60}
              />
            </p>

            <p className="pt-1">
              <span className="text-accent">taha@portfolio</span>
              <span className="text-muted"> ~ % </span>
              <span className="animate-blink text-text-primary">▋</span>
            </p>
          </div>
        </motion.div>

        {/* CTAs for download resume and get in touch */} 
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-[#0066CC] transition-colors duration-200"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-black/[0.10] dark:border-white/[0.12] text-sm font-medium text-muted hover:border-accent/50 dark:hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
