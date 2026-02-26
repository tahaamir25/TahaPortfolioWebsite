"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-5 max-w-3xl"
      >
        <p className="text-accent text-xs tracking-[0.3em] uppercase">
          Hey, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight">
          Taha Amir
        </h1>

        <div className="text-lg md:text-2xl text-muted min-h-[2rem] flex items-center">
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
            cursor={true}
            speed={60}
          />
        </div>

        <p className="text-muted text-sm md:text-base max-w-md leading-relaxed mt-1">
          Bio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/resume.pdf" //Put Resume In Public Folder
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
        </div>
      </motion.div>
    </section>
  );
}
