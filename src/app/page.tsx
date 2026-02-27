import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/*
        Ambient background lighting.
        Base classes = light mode (dim).
        dark: classes = dark mode default (visible depth).
        Orbs are fixed so they don't scroll with content.
      */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-left — violet */}
        <div className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-violet-500/[0.06] dark:bg-violet-500/[0.18] blur-[150px]" />
        {/* Upper-right — cyan glow (secondary accent) */}
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#33C1FF]/[0.04] dark:bg-[#33C1FF]/[0.12] blur-[130px]" />
        {/* Mid-page — accent blue, centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.03] dark:bg-accent/[0.07] blur-[160px]" />
        {/* Bottom-left — softer violet */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-violet-500/[0.04] dark:bg-violet-500/[0.10] blur-[130px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
