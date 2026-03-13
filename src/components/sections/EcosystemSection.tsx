"use client";

import Image from "next/image";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInUp from "@/components/animations/FadeInUp";
import { ExternalLink } from "lucide-react";

export default function EcosystemSection() {
  return (
    <SectionWrapper id="ecosysteme" className="bg-slate-50">
      <SectionHeading
        title="Nos métiers"
        subtitle=""
      />

      <FadeInUp>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-600 leading-relaxed">
            Un réseau d&apos;expertises complémentaires au service des campus et des
            territoires. <strong className="text-navy-800">Citerra Campus Immobilier</strong> est
            la marque pour le marché des professionnels de l&apos;agence immobilière{" "}
            <strong className="text-navy-800">ESRre</strong>. Celle-ci porte également la marque{" "}
            <strong className="text-navy-800">AIM Immobilier</strong> pour le marché des particuliers.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ESRre appartient à un groupement d&apos;entreprises dans lequel fait
            également partie la société de conseils{" "}
            <strong className="text-navy-800">Winn&apos;UP</strong>, cabinet conseils spécialisé
            en stratégie d&apos;enseignement supérieur et d&apos;accompagnement des
            territoires. Ce groupement porte aussi un dispositif de labellisation
            des campus porté par la société à mission{" "}
            <strong className="text-navy-800">Campuscore Institute</strong>{" "}
            <span className="text-slate-500">(en cours de création)</span>.
          </p>
        </div>
      </FadeInUp>

      {/* Layout hiérarchique */}
      <div className="max-w-6xl mx-auto">
        {/* Niveau 1 : Les 3 entités principales */}
        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* ESRre */}
            <div className="rounded-2xl border-2 border-navy-200 p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col" style={{ backgroundColor: "#F7F6F7" }}>
              <div className="h-20 flex items-center mb-4">
                <div className="relative h-14 w-full">
                  <Image
                    src="/images/partners/logo-esrre.png"
                    alt="Logo ESRre"
                    fill
                    sizes="200px"
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">ESRre</h3>
              <span className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-3">
                Agence immobilière
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                Agence immobilière portant les marques Citerra Campus Immobilier
                (professionnels) et AIM Immobilier (particuliers).
              </p>
            </div>

            {/* Winn'UP */}
            <a
              href="https://www.winnup.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="rounded-2xl bg-white border-2 border-navy-200 p-6 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-24 flex items-center mb-4">
                  <div className="relative h-20 w-full">
                    <Image
                      src="/images/partners/logo-winnup.png"
                      alt="Logo Winn'UP"
                      fill
                      sizes="200px"
                      style={{ objectFit: "contain", objectPosition: "left center" }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-1 flex items-center gap-2">
                  Winn&apos;UP
                  <ExternalLink size={14} className="text-navy-400 shrink-0" />
                </h3>
                <span className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-3">
                  Cabinet de conseil
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cabinet de conseils spécialisé en stratégie d&apos;enseignement
                  supérieur et d&apos;accompagnement des territoires.
                </p>
              </div>
            </a>

            {/* Campuscore Institute */}
            <div className="rounded-2xl bg-white border-2 border-navy-200 p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-24 flex items-center mb-4">
                <div className="relative h-20 w-full">
                  <Image
                    src="/images/partners/logo-campuscore.png"
                    alt="Logo Campuscore Institute"
                    fill
                    sizes="200px"
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Campuscore Institute
              </h3>
              <span className="text-xs font-medium text-navy-500 uppercase tracking-wider mb-3">
                Société à mission
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                Société à Mission portant deux dispositifs de labellisation des
                campus : Campuscore Design (conception/rénovation) et Campuscore
                Expérience (campus existants).
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Connecteurs verticaux */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          <div className="flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-navy-300 to-navy-100" />
          </div>
          <div />
          <div className="flex justify-center">
            <div className="w-px h-10 bg-gradient-to-b from-navy-300 to-navy-100" />
          </div>
        </div>

        {/* Niveau 2 : Sous-marques */}
        <FadeInUp delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sous ESRre : Citerra Campus + AIM */}
            <div className="grid grid-cols-2 gap-5">
              {/* Citerra Campus */}
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="relative h-20 w-full mb-5">
                  <Image
                    src="/Logo.png"
                    alt="Citerra Campus Immobilier"
                    fill
                    sizes="180px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="text-base font-bold text-navy-800 mb-1">Citerra Campus</h4>
                <span className="text-xs font-medium text-navy-500 uppercase tracking-wider">
                  Professionnels
                </span>
              </div>

              {/* AIM Immobilier */}
              <a
                href="https://www.aimimmo.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="rounded-2xl border p-6 text-center hover:shadow-lg transition-all duration-300 h-full"
                  style={{ backgroundColor: "#FDF6F3", borderColor: "#BD5C4A33" }}
                >
                  <div className="relative h-24 w-full mb-5">
                    <Image
                      src="/images/partners/logo-aim.png"
                      alt="AIM Immobilier"
                      fill
                      sizes="180px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h4 className="text-base font-bold mb-1" style={{ color: "#BD5C4A" }}>
                    AIM Immobilier
                  </h4>
                  <span
                    className="text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1"
                    style={{ color: "#BD5C4A" }}
                  >
                    Particuliers
                    <ExternalLink size={11} />
                  </span>
                </div>
              </a>
            </div>

            {/* Colonne centrale vide */}
            <div />

            {/* Sous Campuscore : Design + Expérience */}
            <div className="grid grid-cols-2 gap-5">
              {/* Campuscore Design */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="relative h-28 w-full mb-4">
                  <Image
                    src="/images/partners/logo-campuscore-design.png"
                    alt="Campuscore Design"
                    fill
                    sizes="180px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="text-base font-bold text-navy-800 mb-1">Design</h4>
                <span className="text-xs text-slate-500">
                  Conception / Rénovation
                </span>
              </div>

              {/* Campuscore Expérience */}
              <div
                className="rounded-2xl border p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: "#FDF6F3", borderColor: "#BD5C4A33" }}
              >
                <div className="relative h-28 w-full mb-4">
                  <Image
                    src="/images/partners/logo-campuscore-experience.png"
                    alt="Campuscore Expérience"
                    fill
                    sizes="180px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4 className="text-base font-bold mb-1" style={{ color: "#BD5C4A" }}>
                  Expérience
                </h4>
                <span className="text-xs" style={{ color: "#BD5C4A99" }}>
                  Campus existants
                </span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
