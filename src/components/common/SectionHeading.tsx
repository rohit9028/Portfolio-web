import Reveal from "@/components/common/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <span className="section-eyebrow">
        <span className="text-primary">{"//"}</span> {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={
            "mt-4 max-w-2xl text-text-muted " + (align === "center" ? "mx-auto" : "")
          }
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
