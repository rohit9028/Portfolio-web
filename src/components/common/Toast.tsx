import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  show: boolean;
}

export default function Toast({ message, type, show }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={
            "glass-card fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 !rounded-full px-5 py-3 text-sm shadow-2xl " +
            (type === "success" ? "!border-secondary/40" : "!border-red-500/40")
          }
        >
          {type === "success" ? (
            <CheckCircle2 size={17} className="text-secondary" />
          ) : (
            <XCircle size={17} className="text-red-400" />
          )}
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
