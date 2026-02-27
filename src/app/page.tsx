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
        Decorative background orbs — fixed behind all content.
        Soft radial gradients in violet, blue, and emerald give the page
        a Stripe/kazmainshah-style colourful depth without being noisy.
      */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full bg-violet-400/20 dark:bg-violet-500/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] rounded-full bg-accent/15 dark:bg-accent/8 blur-[120px]" />
        <div className="absolute -bottom-40 left-20 w-[550px] h-[550px] rounded-full bg-emerald-400/15 dark:bg-emerald-500/8 blur-[120px]" />
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
