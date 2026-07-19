import { motion } from "framer-motion";
import { useState } from "react";
import { Layout, Server, Database, Code, Wrench, Cpu, Cloud, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { skillCategories } from "@/data/skills";
import { fadeUp } from "@/animations/variants";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  code: Code,
  wrench: Wrench,
  cpu: Cpu,
  cloud: Cloud,
};

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="skills.json"
          title="What I"
          highlight="Work With"
          description="A toolkit shaped by building real, full-stack products end to end."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <Reveal key={category.title} variants={fadeUp} index={i}>
                <motion.div
                  onMouseEnter={() => setActive(category.title)}
                  onMouseLeave={() => setActive(null)}
                  whileHover={{ y: -6 }}
                  className="glass-card h-full p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-secondary">
                      <Icon size={19} />
                    </div>
                    <h3 className="font-display font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm text-text-muted">{skill.name}</span>
                          <span className="font-mono text-xs text-text-dim">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-highlight"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            style={
                              active === category.title
                                ? { filter: "brightness(1.25) saturate(1.2)" }
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
