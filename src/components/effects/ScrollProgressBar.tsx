import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-highlight"
        style={{ transformOrigin: "0% 50%" }}
        animate={{ scaleX: progress }}
        transition={{ ease: "linear", duration: 0.1 }}
      />
    </div>
  );
}
