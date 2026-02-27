import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="text-center">
      <div className="flex flex-col items-center">
        <SectionHeading>Get In Touch</SectionHeading>
        <p className="mt-4 text-muted text-sm md:text-base max-w-md leading-relaxed">
          Open to new opportunities, collaborations, or just a good conversation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">

        <div className="p-[1px] rounded-xl bg-gradient-to-br from-accent/45 to-accent/10 shadow-sm dark:shadow-none hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_0_28px_rgba(41,151,255,0.18)] transition-all duration-300">
          <div className="bg-card rounded-[11px] p-6 flex flex-col gap-4 text-left h-full">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
              <FiSend size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-text-primary font-bold text-base">Contact</p>
              <p className="text-muted text-xs mt-1 leading-relaxed">
                Have a question or want to work together? Drop me an email.
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white text-xs font-medium hover:opacity-80 transition-opacity duration-200 w-fit"
            >
              <FiMail size={13} />
              Send Email
            </a>
          </div>
        </div>

        <div className="p-[1px] rounded-xl bg-gradient-to-br from-violet-500/45 to-violet-500/10 shadow-sm dark:shadow-none hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_0_28px_rgba(124,58,237,0.18)] transition-all duration-300">
          <div className="bg-card rounded-[11px] p-6 flex flex-col gap-4 text-left h-full">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <FiLinkedin size={16} className="text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <p className="text-text-primary font-bold text-base">Let&apos;s Connect</p>
              <p className="text-muted text-xs mt-1 leading-relaxed">
                Find me on LinkedIn and GitHub — always happy to connect.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-violet-500/30 text-violet-600 dark:text-violet-400 text-xs font-medium hover:bg-violet-500/10 transition-colors duration-200"
              >
                <FiLinkedin size={13} />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/[0.08] dark:border-white/10 text-muted text-xs font-medium hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <FiGithub size={13} />
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
