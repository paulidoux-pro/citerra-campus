"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import Icon3D from "@/components/ui/Icon3D";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { KEY_FIGURES } from "@/lib/constants";

export default function KeyFiguresSection() {
  return (
    <SectionWrapper dark className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title="Notre impact en chiffres"
          subtitle="Des projets structurants pour les territoires et l'enseignement supérieur"
          light
        />

        <StaggerContainer className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {KEY_FIGURES.map((figure) => (
            <Counter
              key={figure.label}
              value={figure.value}
              suffix={figure.suffix}
              label={figure.label}
              icon={<Icon3D type={figure.icon} size="md" light />}
            />
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
