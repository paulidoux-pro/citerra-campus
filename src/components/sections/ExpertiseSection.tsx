"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon3D from "@/components/ui/Icon3D";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import { SERVICES } from "@/lib/constants";

export default function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise" className="bg-slate-50">
      <SectionHeading
        title="Nos expertises"
        subtitle="Un positionnement unique au croisement de l'immobilier, de la stratégie territoriale et de l'enseignement supérieur"
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItemVariants}
            className="group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-100"
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-navy-50 group-hover:bg-navy-100 transition-colors duration-300">
              <Icon3D type={service.icon} size="md" />
            </div>

            <h3 className="text-lg font-bold text-navy-900 mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>

            <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-navy-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
