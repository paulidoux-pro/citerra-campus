"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.a
        href="#a-propos"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Découvrir
        </span>
        <ChevronDown size={20} />
      </motion.a>
    </motion.div>
  );
}
