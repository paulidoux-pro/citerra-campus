"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInUp from "@/components/animations/FadeInUp";
import { Users, BookOpen, Building2, Sparkles, Globe, Shield } from "lucide-react";

const principles = [
  {
    icon: <Users size={22} />,
    title: "Multi-acteurs",
    description:
      "Plusieurs établissements, organismes de formation, voire d'entreprises, partagent un même lieu.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Multi-activités",
    description:
      "Enseignement, recherche & innovation, fablabs, coworking, événementiels, restauration, services, sports, résidences étudiantes, coliving, … peuvent cohabiter.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Mutualisation",
    description:
      "Certains espaces sont partagés afin d'en optimiser l'usage et d'améliorer le modèle économique des établissements.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Flexibilité",
    description:
      "Adaptation dans le temps des usages et des effectifs grâce à des espaces réversibles.",
  },
  {
    icon: <Globe size={22} />,
    title: "Ouverture urbaine",
    description:
      "Le campus comme équipement du territoire, ouvert à la cité et au monde économique.",
  },
  {
    icon: <Shield size={22} />,
    title: "Sérendipité",
    description:
      "Le lieu est conçu pour provoquer les échanges et les rencontres non programmées, véritable levier d'innovation et de création de valeur.",
  },
];

export default function CoSchoolingSection() {
  return (
    <SectionWrapper id="co-studying">
      <SectionHeading
        title="Le campus co-studying"
        subtitle="Un modèle de campus multi-acteurs et multi-activités, fondé sur la mutualisation des espaces, des usages et des temporalités"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
        <FadeInUp>
          <div className="relative rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy-700/30 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Le campus vivant, évolutif et intensivement utilisé
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Ce modèle se distingue d&apos;un campus académique classique par
                la coexistence de plusieurs opérateurs, l&apos;hybridation des
                fonctions et une ouverture forte à la cité et au monde
                économique.
              </p>
              <p className="text-white/70 leading-relaxed">
                Il répond à la fois à des enjeux pédagogiques, économiques,
                urbains et d&apos;exploitation immobilière, avec un ratio cible
                de{" "}
                <span className="text-gold-400 font-semibold">
                  4 à 5 m² par étudiant
                </span>{" "}
                pour un équilibre économique soutenable.
              </p>
            </div>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <FadeInUp key={p.title} delay={0.1 + i * 0.08}>
              <div className="group rounded-xl bg-white border border-slate-100 p-5 hover:shadow-lg hover:border-navy-100 transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-50 text-navy-600 group-hover:bg-navy-100 transition-colors mb-3">
                  {p.icon}
                </div>
                <h4 className="text-sm font-bold text-navy-900 mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
