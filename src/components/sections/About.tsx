import { motion } from "framer-motion";
import {
  Brain,
  Puzzle,
  Users,
  GitBranch,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { aboutHighlights } from "@/data/misc";
import { journeyTimeline } from "@/data/experience";
import { fadeUp, slideInLeft, slideInRight } from "@/animations/variants";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  puzzle: Puzzle,
  users: Users,
  "git-branch": GitBranch,
  lightbulb: Lightbulb,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="about-me.ts" title="Who I" highlight="Am" />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-10">
          {/* Image + intro */}
          <Reveal variants={slideInLeft} className="lg:col-span-2">
            <div className="gradient-border glass-card relative mx-auto w-fit !rounded-3xl p-2">
              <img
                src="image.jpeg"
                alt="Rohit Singh"
                className="h-72 w-64 rounded-2xl object-cover sm:h-80 sm:w-72"
              />
              <div className="glass-card absolute -bottom-5 -right-5 !rounded-xl px-4 py-2.5">
                <p className="font-display text-lg font-semibold text-secondary">
                  2+ yrs
                </p>
                <p className="font-mono text-[11px] text-text-dim">
                  building MERN apps
                </p>
              </div>
            </div>

            <p className="mt-10 text-text-muted">
              I'm a Computer Science Engineering student who fell in love with
              turning ideas into working products. My focus is the MERN stack —
              I enjoy the entire journey from designing a schema and wiring up
              an API, to shaping pixel-perfect, animated interfaces that people
              actually enjoy using.
            </p>
            <p className="mt-4 text-text-muted">
              When I'm not coding, I'm exploring new frameworks, contributing to
              open-source, or breaking down system-design problems just for fun.
            </p>
          </Reveal>

          {/* Highlight cards + timeline */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <Reveal
                    key={item.title}
                    variants={fadeUp}
                    index={i}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="glass-card h-full p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-highlight/20 text-secondary">
                        <Icon size={19} />
                      </div>
                      <h3 className="font-display mt-4 text-base font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-text-muted">
                        {item.desc}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

            {/* Journey timeline */}
            <Reveal variants={slideInRight} className="mt-10">
              <h3 className="section-eyebrow mb-6">
                <span className="text-primary">{"//"}</span> my-journey.log
              </h3>
              <div className="relative space-y-8 border-l border-white/10 pl-7">
                {journeyTimeline.map((item) => (
                  <div key={item.year} className="relative">
                    <span className="absolute -left-[34px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-primary to-highlight ring-4 ring-bg-deep" />
                    <p className="font-mono text-xs text-secondary">
                      {item.year}
                    </p>
                    <p className="font-display mt-1 font-semibold">
                      {item.title}
                    </p>
                    <ul className="mt-1.5 space-y-1 text-sm text-text-muted">
                      {item.points.map((p) => (
                        <li key={p}>— {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
