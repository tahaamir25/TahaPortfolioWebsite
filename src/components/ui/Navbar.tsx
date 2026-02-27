"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import { NAV_LINKS, PROFILE_PHOTO } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

function NavAvatar() {
  const [photoFailed, setPhotoFailed] = useState(false);

  if (!PROFILE_PHOTO || photoFailed) {
    return (
      <span className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-accent text-sm font-bold tracking-tight flex-shrink-0">
        TA
      </span>
    );
  }

  return (
    <Image
      src={PROFILE_PHOTO}
      alt="Taha Amir"
      width={40}
      height={40}
      className="w-10 h-10 rounded-full border-2 border-accent/20 object-cover flex-shrink-0"
      onError={() => setPhotoFailed(true)}
    />
  );
}

const navIconMap: Record<string, IconType> = {
  about: FiUser,
  experience: FiBriefcase,
  projects: FiCode,
  contact: FiMail,
};

const iconSpring = { type: "spring", stiffness: 400, damping: 17 } as const;

const pillBase =
  "flex items-center gap-1.5 px-3 h-[52px] rounded-full backdrop-blur-xl border transition-all duration-300";

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
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const pillStyle = scrolled
    ? "bg-white/90 dark:bg-[#1a1a1c]/90 border-black/[0.10] dark:border-white/[0.12] shadow-[0_4px_28px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_28px_rgba(0,0,0,0.65)]"
    : "bg-white/70 dark:bg-[#1a1a1c]/60 border-black/[0.07] dark:border-white/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.45)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 pointer-events-none">
      <div className={`pointer-events-auto ${pillBase} ${pillStyle}`}>
        <a
          href="#"
          className="flex items-center hover:opacity-75 transition-opacity duration-200"
          aria-label="Back to top"
        >
          <NavAvatar />
        </a>

        <div className="w-px h-5 bg-black/[0.08] dark:bg-white/[0.08] mx-1 flex-shrink-0" />
        <ul className="hidden md:flex items-center gap-0.5">
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
                  className={`flex items-center px-3 py-2 rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-accent bg-accent/[0.08]"
                      : "text-muted hover:text-text-primary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  }`}
                >
                  <motion.span
                    animate={
                      !prefersReducedMotion && isHovered
                        ? { scale: 1.18 }
                        : { scale: 1.0 }
                    }
                    transition={iconSpring}
                    className="flex items-center leading-none"
                  >
                    {Icon && <Icon size={18} />}
                  </motion.span>

                  <motion.span
                    animate={{
                      maxWidth: isHovered ? 80 : 0,
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

        <div className="hidden md:block w-px h-5 bg-black/[0.08] dark:bg-white/[0.08] mx-1 flex-shrink-0" />

        <ThemeToggle />
        <motion.button
          className="md:hidden w-8 h-8 flex items-center justify-center text-muted hover:text-text-primary transition-colors duration-200 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileTap={!prefersReducedMotion ? { scale: 0.88 } : undefined}
          transition={iconSpring}
        >
          {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-auto mt-2 w-52 rounded-2xl bg-white/95 dark:bg-[#1a1a1c]/95 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 flex flex-col gap-0.5"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              const Icon = navIconMap[sectionId];

              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors duration-150 ${
                      isActive
                        ? "text-accent bg-accent/[0.08]"
                        : "text-muted hover:text-text-primary hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    {Icon && <Icon size={15} />}
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
