"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={!prefersReducedMotion ? { scale: 1.12 } : undefined}
      whileTap={!prefersReducedMotion ? { scale: 0.88 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </motion.button>
  );
}
