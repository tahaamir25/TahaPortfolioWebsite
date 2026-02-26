export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {children}
      </h2>
      <div className="w-10 h-0.5 bg-accent mt-3" />
    </div>
  );
}
