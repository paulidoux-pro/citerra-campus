"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import { PARTNERS } from "@/lib/constants";
import { Building, Users, Lightbulb, Award } from "lucide-react";

const partnerIcons: Record<string, React.ReactNode> = {
  "ESRre SAS": <Building size={24} />,
  "AIM Immobilier": <Building size={24} />,
  "Winn'UP": <Lightbulb size={24} />,
  Campuscore: <Award size={24} />,
};

const partnerColors: Record<string, string> = {
  "ESRre SAS": "from-navy-800 to-navy-900",
  "AIM Immobilier": "from-navy-600 to-navy-700",
  "Winn'UP": "from-navy-500 to-navy-700",
  Campuscore: "from-gold-500 to-gold-400",
};

export default function EcosystemSection() {
  return (
    <SectionWrapper id="ecosysteme">
      <SectionHeading
        title="Notre écosystème"
        subtitle="Un réseau de compétences complémentaires au service des campus et des territoires"
      />

      <div className="relative">
        {/* Central connector line - visible on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent -translate-y-1/2" />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.name}
              variants={staggerItemVariants}
              className="group relative"
            >
              <div className="rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-xl hover:border-navy-100 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${partnerColors[partner.name]} text-white mb-5`}
                >
                  {partnerIcons[partner.name] || <Users size={24} />}
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  {partner.name}
                </h3>

                <span className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-3">
                  {partner.role}
                </span>

                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
