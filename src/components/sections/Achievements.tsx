import { useState } from "react";
import { motion } from "framer-motion";
import { FolderCheck, Cpu, Award, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "@/components/common/Reveal";
import { achievementStats } from "@/data/misc";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeUp } from "@/animations/variants";

const iconMap: Record<string, IconType> = {
  "folder-check": FolderCheck,
  cpu: Cpu,
  github: FaGithub,
  award: Award,
  clock: Clock,
};

function StatCard({ stat, index }: { stat: (typeof achievementStats)[number]; index: number }) {
  const [inView, setInView] = useState(false);
  const value = useCountUp(stat.value, inView);
  const Icon = iconMap[stat.icon];

  return (
    <Reveal variants={fadeUp} index={index}>
      <motion.div
        onViewportEnter={() => setInView(true)}
        whileHover={{ y: -6 }}
        className="glass-card p-6 text-center"
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
          <Icon size={19} />
        </div>
        <p className="font-display mt-4 text-3xl font-bold sm:text-4xl">
          {value}
          <span className="text-gradient">{stat.suffix}</span>
        </p>
        <p className="mt-1.5 text-sm text-text-muted">{stat.label}</p>
      </motion.div>
    </Reveal>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {achievementStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
