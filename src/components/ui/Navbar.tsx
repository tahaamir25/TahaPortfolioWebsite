"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navIconMap: Record<string, IconType> = {
  about: FiUser,
  experience: FiBriefcase,
  projects: FiCode,
  contact: FiMail,
};

const iconSpring = { type: "spring", stiffness: 400, damping: 17 } as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-black/60 border-black/[0.08] dark:border-white/10"
          : "backdrop-blur-sm bg-white/40 dark:bg-black/30 border-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <a
          href="#"
          className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold tracking-tight hover:bg-accent/20 transition-colors duration-200"
          aria-label="Back to top"
        >
          TA
        </a>

        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isHovered = hoveredLink === href;
              const Icon = navIconMap[sectionId];

              return (
                <li key={href}>
                  <a
                    href={href}
                    onMouseEnter={() => setHoveredLink(href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-text-primary"
                    }`}
                  >
                    <motion.span
                      animate={
                        !prefersReducedMotion && isHovered
                          ? { scale: 1.15 }
                          : { scale: 1.0 }
                      }
                      transition={iconSpring}
                      className="flex items-center leading-none"
                    >
                      {Icon && <Icon size={17} />}
                    </motion.span>

                    <motion.span
                      animate={{
                        maxWidth: isHovered ? 72 : 0,
                        opacity: isHovered ? 1 : 0,
                        marginLeft: isHovered ? 6 : 0,
                      }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="overflow-hidden whitespace-nowrap text-sm font-medium"
                    >
                      {label}
                    </motion.span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-2" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="w-8 h-8 flex items-center justify-center text-muted hover:text-text-primary transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden flex flex-col backdrop-blur-md bg-white/90 dark:bg-black/80 border-t border-black/[0.08] dark:border-white/10 px-6 pb-4"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              const Icon = navIconMap[sectionId];

              return (
                <li
                  key={href}
                  className="py-3 border-b border-black/[0.05] dark:border-white/5 last:border-0"
                >
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-text-primary"
                    }`}
                  >
                    {Icon && <Icon size={16} />}
                    {label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
