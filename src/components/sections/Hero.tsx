"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <div className="flex flex-col items-center gap-6 max-w-2xl w-full">

        <motion.div {...fadeUp(0)} className="flex flex-col items-center gap-3">
          <p className="text-accent text-xs tracking-[0.3em] uppercase">
            Hey, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
            Taha Amir
          </h1>
        </motion.div>

        <motion.p
          {...fadeUp(0.15)}
          className="text-muted text-sm md:text-base max-w-md leading-relaxed"
        >
          Bio
        </motion.p>

        {/* My Terminal */}
        <motion.div
          {...fadeUp(0.3)}
          className="w-full max-w-lg bg-[#111] border border-white/10 rounded-xl overflow-hidden text-left"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#161616]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-muted font-mono tracking-wide">
              bash — taha@portfolio
            </span>
          </div>

          <div className="px-5 py-4 font-mono text-sm space-y-1.5">
            <p>
              <span className="text-accent">taha@portfolio</span>
              <span className="text-muted"> ~ % </span>
              <span className="text-text-primary">whoami</span>
            </p>
            <p className="text-muted pl-2">Taha Amir — Software Engineer</p>

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
                  "Cool Guy",
                  2200,
                  "Possible Bio; Hahaha",
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

=        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-accent text-white text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-white/20 text-sm font-medium text-muted hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
