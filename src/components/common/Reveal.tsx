import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/animations/variants";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  index?: number;
  className?: string;
  as?: "div" | "span";
}

export default function Reveal({ children, variants = fadeUp, index = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
