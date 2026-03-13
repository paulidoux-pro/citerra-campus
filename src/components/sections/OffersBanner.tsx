"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Star,
  MapPin,
  Scale,
  Home,
  Laptop,
  UtensilsCrossed,
  Dumbbell,
} from "lucide-react";

const offers = [
  { label: "Développement de campus", icon: Building2 },
  { label: "Attractivité et expérience étudiante", icon: Star },
  { label: "Stratégie territoriale", icon: MapPin },
  { label: "Montages juridiques et économiques", icon: Scale },
  { label: "Résidences étudiantes & co-living", icon: Home },
  { label: "Coworking & fablabs", icon: Laptop },
  { label: "Restauration & services", icon: UtensilsCrossed },
  { label: "Activités sportives", icon: Dumbbell },
];

export default function OffersBanner() {
  const items = [...offers, ...offers];

  return (
    <div className="relative overflow-hidden bg-navy-900/95 py-6 border-y border-navy-700/30">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-900/95 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-900/95 to-transparent z-10" />

      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {items.map((offer, i) => {
          const Icon = offer.icon;
          return (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm px-5 py-3 hover:bg-white/10 transition-colors duration-300"
            >
              <Icon size={18} className="text-gold-400 shrink-0" />
              <span className="text-sm font-medium text-white/90 whitespace-nowrap">
                {offer.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
