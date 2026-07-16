import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Layers,
  Smartphone,
  Plug,
  UserRound,
  Rocket,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { services } from "@/data/misc";
import { fadeUp } from "@/animations/variants";

const iconMap: Record<string, LucideIcon> = {
  "layout-template": LayoutTemplate,
  layers: Layers,
  smartphone: Smartphone,
  plug: Plug,
  "user-round": UserRound,
  rocket: Rocket,
  "layout-dashboard": LayoutDashboard,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="services.ts"
          title="How I Can"
          highlight="Help"
          description="Full-stack capability, from a single landing page to a complete product."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} variants={fadeUp} index={i}>
                <motion.div whileHover={{ y: -6 }} className="gradient-border glass-card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-highlight text-white">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{service.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
