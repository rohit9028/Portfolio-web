import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Terminal } from "lucide-react";
import BackgroundAtmosphere from "@/components/effects/BackgroundAtmosphere";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <BackgroundAtmosphere />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card gradient-border max-w-md p-10"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-highlight">
          <Terminal size={22} className="text-white" />
        </div>
        <p className="font-mono mt-6 text-sm text-secondary">Error 404</p>
        <h1 className="font-display text-gradient mt-2 text-6xl font-bold">404</h1>
        <p className="font-mono mt-4 text-sm text-text-muted">
          console.error("Page not found");
        </p>
        <p className="mt-2 text-sm text-text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gradient mt-7 inline-flex">
          <Home size={16} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
