import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { education } from "@/data/education";
import { fadeUp } from "@/animations/variants";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="education.log" title="Academic" highlight="Background" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.id} variants={fadeUp} index={i}>
              <div className="glass-card h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-highlight/20 text-secondary">
                    <GraduationCap size={20} />
                  </div>
                  <span className="badge">{item.period}</span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-text-dim">{item.institution}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  <Award size={14} /> {item.score}
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-white/8 pt-4 text-sm text-text-muted">
                  {item.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
