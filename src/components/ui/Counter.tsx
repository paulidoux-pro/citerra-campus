"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

export default function Counter({ value, suffix = "", label, icon }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (n: number) => {
    if (n >= 1000) {
      return n.toLocaleString("fr-FR");
    }
    return n.toString();
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className="text-center"
    >
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-white">
        {formatNumber(count)}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm md:text-base text-white/60 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
