"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="flex flex-col items-center text-center mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#1d1d1f] from-60% to-[#2997ff] dark:from-white dark:from-60% dark:to-accent bg-clip-text text-transparent"
      >
        {children}
      </motion.h2>
      {/*Width shows up on entry*/}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 48, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="h-0.5 bg-gradient-to-r from-accent to-violet-500 mt-3 rounded-full"
      />
    </div>
  );
}
