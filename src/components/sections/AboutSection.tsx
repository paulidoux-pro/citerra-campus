"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInUp from "@/components/animations/FadeInUp";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <SectionWrapper id="a-propos">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeading
            title="Un opérateur immobilier dédié aux campus"
            subtitle=""
            centered={false}
          />

          <FadeInUp delay={0.2}>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              <strong className="text-navy-800">Citerra Campus Immobilier</strong> est
              l&apos;opérateur immobilier spécialisé dans la commercialisation
              d&apos;actifs immobiliers liés aux écosystèmes d&apos;enseignement
              supérieur et de compétence.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-slate-600 leading-relaxed mb-6">
              Contrairement aux agences immobilières classiques centrées
              uniquement sur la transaction, nous agissons comme un{" "}
              <strong className="text-navy-800">médiateur stratégique</strong>,
              un{" "}
              <strong className="text-navy-800">
                facilitateur institutionnel
              </strong>{" "}
              et un{" "}
              <strong className="text-navy-800">
                expert de la logique campus-territoire
              </strong>
              .
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="flex flex-col gap-3 mt-8">
              {[
                "Expertise sectorielle enseignement supérieur",
                "Vision territoriale et stratégie de développement",
                "Crédibilité institutionnelle auprès des décideurs",
                "Engagement long terme et accompagnement qualitatif",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight
                    size={18}
                    className="text-navy-500 mt-0.5 shrink-0"
                  />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        <FadeInUp delay={0.3}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy-100 to-navy-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-navy-800/10 mb-6">
                    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                      <path d="M32 8L4 24L32 40L60 24L32 8Z" fill="#003B5C" opacity="0.3" />
                      <path d="M16 30V44L32 52L48 44V30" fill="#003B5C" opacity="0.2" />
                      <path d="M32 8L4 24L32 40L60 24L32 8Z" stroke="#003B5C" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-navy-800 font-bold text-xl">Le campus comme actif<br />stratégique territorial</p>
                  <p className="text-navy-600/70 mt-3 text-sm max-w-xs mx-auto">
                    Entre immobilier, stratégie territoriale et écosystème académique
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-navy-200/40 rounded-2xl -z-10" />
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
