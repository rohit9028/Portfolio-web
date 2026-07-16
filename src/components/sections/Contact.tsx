import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { slideInLeft } from "@/animations/variants";
import { PERSONAL } from "@/constants";

const contactInfo = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: Phone, label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: PERSONAL.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="contact.send()"
          title="Let's Build Something"
          highlight="Together"
          description="Have an internship opening, a project, or just want to say hi? My inbox is open."
        />

        <div className="mt-16 mx-auto max-w-2xl">
          <Reveal variants={slideInLeft}>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-card flex items-center gap-4 p-4 transition-colors hover:border-secondary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-text-dim">{item.label}</p>
                    <p className="text-sm text-text-muted">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="flex gap-3">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex flex-1 items-center justify-center gap-2 p-3.5 text-sm text-text-muted hover:text-secondary"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex flex-1 items-center justify-center gap-2 p-3.5 text-sm text-text-muted hover:text-secondary"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
              </div>

              <div className="glass-card overflow-hidden !rounded-2xl">
                <iframe
                  title="Location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=80.85%2C26.75%2C81.05%2C26.95&layer=mapnik"
                  className="h-48 w-full grayscale invert-[0.92] contrast-[0.9] filter"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
