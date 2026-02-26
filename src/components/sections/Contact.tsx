import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SOCIAL_LINKS } from "@/lib/constants";

const links = [
  {
    label: "Email",
    href: SOCIAL_LINKS.email,
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading>Get In Touch</SectionHeading>

      <p className="mt-6 text-muted text-base md:text-lg leading-relaxed max-w-md">
        {/* TODO: Replace with your own message */}
        TODO: A short line inviting people to reach out — e.g. &ldquo;Open to
        new opportunities, collaborations, or just a good conversation.&rdquo;
      </p>

      <div className="flex items-center gap-6 mt-10">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 group"
          >
            <Icon
              size={22}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-sm hidden sm:inline">{label}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
