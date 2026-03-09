"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";
import { PROJECTS } from "@/lib/constants";
import { MapPin, Maximize } from "lucide-react";

const gradients = [
  "from-navy-700 to-navy-900",
  "from-navy-600 to-navy-800",
  "from-navy-800 to-navy-950",
  "from-navy-500 to-navy-700",
  "from-navy-700 to-navy-800",
  "from-navy-600 to-navy-900",
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="references" className="bg-slate-50">
      <SectionHeading
        title="Nos références"
        subtitle="Des campus multi-acteurs et multi-services partout en France"
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.name}
            variants={staggerItemVariants}
            className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
          >
            {/* Image placeholder avec gradient */}
            <div
              className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/30">
                  <Building3D />
                </div>
              </div>
              {project.surface && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                  <Maximize size={12} />
                  {project.surface}
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-1.5 text-sm text-navy-500 mb-2">
                <MapPin size={14} />
                {project.city}
              </div>

              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {project.actors.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.actors.slice(0, 3).map((actor) => (
                    <span
                      key={actor}
                      className="inline-flex items-center rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700"
                    >
                      {actor}
                    </span>
                  ))}
                  {project.actors.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">
                      +{project.actors.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}

function Building3D() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className="w-16 h-16 opacity-40"
    >
      <rect x="15" y="20" width="50" height="45" rx="3" fill="white" opacity="0.15" />
      <rect x="22" y="27" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="36" y="27" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="49" y="27" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="22" y="38" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="36" y="38" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="49" y="38" width="10" height="7" rx="1.5" fill="white" opacity="0.1" />
      <rect x="33" y="50" width="14" height="15" rx="2" fill="white" opacity="0.15" />
    </svg>
  );
}
