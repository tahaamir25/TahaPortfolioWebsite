import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading>About Me</SectionHeading>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 mt-10 items-start">
        <div className="flex-1 space-y-4 text-muted text-base md:text-lg leading-relaxed">
          <p>
            First Paragraph.
          </p>
          <p>
            Second Paragraph.
          </p>
          <p>
            Third Paragraph.
          </p>
        </div>

        <div className="flex-shrink-0 self-center md:self-start">
          {/*
            <Image
              src="/photo.jpg"
              alt="Taha Amir
              width={200}
              height={200}
              className="rounded-full object-cover border border-white/10"
            />
            Nice photo of me in public folder along with resume!!
          */}
          <div className="w-44 h-44 rounded-full border border-dashed border-white/20 flex items-center justify-center bg-white/5">
            <span className="text-muted text-xs text-center px-4 leading-relaxed">
              Placeholder
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

