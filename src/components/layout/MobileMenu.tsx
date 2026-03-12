"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import Image from "next/image";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-navy-900"
        >
          <div className="flex h-full flex-col px-6 py-4">
            <div className="flex items-center justify-between">
              <Image
                src="/Logo.png"
                alt="Citerra Campus Immobilier"
                width={180}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
              <button
                onClick={onClose}
                className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-semibold text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-8"
            >
              <a
                href="/#contact"
                onClick={onClose}
                className="block w-full rounded-full bg-white py-4 text-center text-lg font-semibold text-navy-800 hover:bg-white/90 transition-colors"
              >
                Nous contacter
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
