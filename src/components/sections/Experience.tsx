import { motion } from "framer-motion";
import { GraduationCap, Code2, Target, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { experiences } from "@/data/experience";
import { slideInLeft, slideInRight } from "@/animations/variants";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "code-2": Code2,
  target: Target,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="experience.log"
          title="My"
          highlight="Growth Path"
          description="Learning, building and preparing to bring real value to an engineering team."
        />

        <div className="relative mt-16">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-highlight md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = iconMap[exp.icon];
              const isEven = i % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row md:items-center">
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-highlight ring-4 ring-bg-deep md:left-1/2 md:-translate-x-1/2">
                    <Icon size={17} className="text-white" />
                  </div>

                  <div
                    className={
                      "ml-16 w-full md:ml-0 md:w-1/2 " +
                      (isEven ? "md:pr-14 md:text-right" : "md:order-2 md:pl-14")
                    }
                  >
                    <Reveal variants={isEven ? slideInLeft : slideInRight}>
                      <div className="glass-card p-6">
                        <span className="font-mono text-xs text-secondary">{exp.period}</span>
                        <h3 className="font-display mt-1 text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm text-text-dim">{exp.org}</p>
                        <p className="mt-3 text-sm text-text-muted">{exp.description}</p>
                        <ul
                          className={
                            "mt-3 space-y-1.5 text-sm text-text-muted " +
                            (isEven ? "md:text-right" : "")
                          }
                        >
                          {exp.points.map((p) => (
                            <li key={p}>— {p}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
