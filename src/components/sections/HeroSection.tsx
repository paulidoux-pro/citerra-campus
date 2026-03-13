"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-900" />

      {/* Motifs décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full border border-white/5"
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Opérateur immobilier spécialisé
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
        >
          L&apos;immobilier au service des{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-300 to-gold-400">
            campus de demain
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Citerra Campus accompagne le développement des écosystèmes
          d&apos;enseignement supérieur et de formation professionnelle sur
          l&apos;ensemble du cycle, de la stratégie territoriale à la livraison.
          L&apos;attractivité des campus, l&apos;expérience étudiante et
          l&apos;approche par les usages sont au cœur de cet accompagnement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#expertise" size="lg" className="bg-white text-navy-800 hover:bg-white/90 hover:shadow-xl">
            Découvrir nos offres
          </Button>
          <Button
            href="#contact"
            variant="ghost"
            size="lg"
            className="text-white/80 hover:text-white hover:bg-white/10"
          >
            Nous contacter
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
