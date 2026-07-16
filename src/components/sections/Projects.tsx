import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import TiltCard from "@/components/common/TiltCard";
import { projects } from "@/data/projects";
import { fadeUp } from "@/animations/variants";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="projects.map()"
          title="Things I've"
          highlight="Built"
          description="A selection of full-stack projects that reflect how I think about product, code and design."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} variants={fadeUp} index={i}>
              <TiltCard className="gradient-border glass-card group relative h-full overflow-hidden !rounded-2xl">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full scale-100 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/20 to-transparent" />
                  {project.featured && (
                    <span className="badge absolute right-4 top-4 !border-highlight/40 !bg-highlight/15 !text-highlight">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      className="btn-outline flex-1 !py-2.5 text-sm"
                    >
                      <FaGithub size={15} /> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        className="btn-gradient flex-1 !py-2.5 text-sm"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
