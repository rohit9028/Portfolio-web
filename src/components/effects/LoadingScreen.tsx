import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-bg-deep"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-text-muted"
          >
            <span className="text-primary">const</span> developer ={" "}
            <span className="text-secondary">"Rohit Singh"</span>;
          </motion.div>
          <div className="relative h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
          <span className="font-mono text-xs tracking-widest text-text-dim">LOADING PORTFOLIO…</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
