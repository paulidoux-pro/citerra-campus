"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import { PARTNERS } from "@/lib/constants";
import { Building, Award, ExternalLink } from "lucide-react";

const partnerLogos: Record<string, { src: string; width: number; height: number } | null> = {
  "ESRre SAS": null,
  "AIM Immobilier": { src: "/images/partners/logo-aim.png", width: 160, height: 60 },
  "Winn'UP": { src: "/images/partners/logo-winnup.png", width: 140, height: 60 },
  Campuscore: null,
};

const partnerLinks: Record<string, string | null> = {
  "ESRre SAS": null,
  "AIM Immobilier": "https://www.aimimmo.fr",
  "Winn'UP": "https://www.winnup.fr",
  Campuscore: null,
};

const partnerIcons: Record<string, React.ReactNode> = {
  "ESRre SAS": <Building size={28} />,
  Campuscore: <Award size={28} />,
};

const partnerColors: Record<string, string> = {
  "ESRre SAS": "from-navy-800 to-navy-900",
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
          {PARTNERS.map((partner) => {
            const logo = partnerLogos[partner.name];
            const link = partnerLinks[partner.name];

            const cardContent = (
              <div className="rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-xl hover:border-navy-100 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Logo or icon */}
                <div className="h-14 flex items-center mb-5">
                  {logo ? (
                    <div className="relative h-10 w-full">
                      <Image
                        src={logo.src}
                        alt={`Logo ${partner.name}`}
                        fill
                        sizes="160px"
                        style={{ objectFit: "contain", objectPosition: "left center" }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${partnerColors[partner.name]} text-white`}
                    >
                      {partnerIcons[partner.name]}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-1 flex items-center gap-2">
                  {partner.name}
                  {link && (
                    <ExternalLink size={14} className="text-navy-400 shrink-0" />
                  )}
                </h3>

                <span className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-3">
                  {partner.role}
                </span>

                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {partner.description}
                </p>
              </div>
            );

            return (
              <motion.div
                key={partner.name}
                variants={staggerItemVariants}
                className="group relative"
              >
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full cursor-pointer"
                    aria-label={`Visiter le site de ${partner.name}`}
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
