"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import {
  MapPin,
  Maximize,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
  ArrowRight,
} from "lucide-react";
import BlueprintCanvas from "@/components/ui/BlueprintCanvas";

const gradients = [
  "from-navy-700 to-navy-900",
  "from-navy-600 to-navy-800",
  "from-navy-800 to-navy-950",
  "from-navy-500 to-navy-700",
  "from-navy-700 to-navy-800",
  "from-navy-600 to-navy-900",
];

const GAP = 24;

// Extract unique cities
const ALL_CITIES = Array.from(new Set(PROJECTS.map((p) => p.city))).sort();

// Surface thresholds
const SURFACE_OPTIONS = [
  { label: "Tous", value: 0 },
  { label: "≥ 5 000 m²", value: 5000 },
  { label: "≥ 10 000 m²", value: 10000 },
  { label: "≥ 20 000 m²", value: 20000 },
];

function parseSurface(s: string): number {
  if (!s) return 0;
  return parseInt(s.replace(/\s/g, "").replace("m²", ""), 10) || 0;
}

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filters
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [minSurface, setMinSurface] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (selectedCity && p.city !== selectedCity) return false;
      if (minSurface > 0 && parseSurface(p.surface) < minSurface) return false;
      return true;
    });
  }, [selectedCity, minSurface]);

  const hasActiveFilters = selectedCity !== "" || minSurface > 0;

  // Reset carousel index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCity, minSurface]);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCards(3);
      else if (w >= 640) setVisibleCards(2);
      else setVisibleCards(1);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cardWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCards - 1) * GAP) / visibleCards
      : 0;
  const maxIndex = Math.max(0, filteredProjects.length - visibleCards);
  const offset = -currentIndex * (cardWidth + GAP);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const clearFilters = () => {
    setSelectedCity("");
    setMinSurface(0);
  };

  return (
    <SectionWrapper id="references" className="bg-slate-50">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
        <SectionHeading
          title="Nos offres"
          subtitle="Des campus multi-acteurs et multi-services partout en France"
          className="mb-0"
          centered={false}
        />

        {/* Filters + Navigation */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              filtersOpen || hasActiveFilters
                ? "bg-navy-700 text-white border-navy-700"
                : "bg-white text-navy-700 border-navy-200 hover:bg-navy-50"
            } shadow-sm`}
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filtrer</span>
            {hasActiveFilters && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gold-400 text-navy-900 text-xs font-bold">
                {(selectedCity ? 1 : 0) + (minSurface > 0 ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-navy-200 bg-white text-navy-700 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-navy-200 bg-white text-navy-700 hover:bg-navy-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
              aria-label="Suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center gap-4 mb-8 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              {/* City filter */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Ville
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-transparent min-w-[160px]"
                >
                  <option value="">Toutes les villes</option>
                  {ALL_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Surface filter */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                  Surface minimum
                </label>
                <select
                  value={minSurface}
                  onChange={(e) => setMinSurface(Number(e.target.value))}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 focus:border-transparent min-w-[160px]"
                >
                  {SURFACE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results count + clear */}
              <div className="flex items-end gap-3 ml-auto">
                <span className="text-sm text-slate-500 pb-2">
                  {filteredProjects.length} résultat
                  {filteredProjects.length !== 1 ? "s" : ""}
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 pb-2 transition-colors"
                  >
                    <X size={14} />
                    Réinitialiser
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel */}
      <div className="overflow-hidden" ref={containerRef}>
        {filteredProjects.length > 0 ? (
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: offset }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {filteredProjects.map((project, i) => (
              <div
                key={project.name}
                className="shrink-0"
                style={{ width: cardWidth || "100%" }}
              >
                <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 h-full">
                  <div
                    className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden`}
                  >
                    <BlueprintCanvas seed={project.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    {project.surface && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                        <Maximize size={12} />
                        {project.surface}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-navy-800">
                      <MapPin size={12} />
                      {project.city}
                    </div>
                  </div>

                  <div className="p-6">

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
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-slate-400" />
            </div>
            <p className="text-lg font-medium text-navy-700 mb-2">
              Aucun campus trouvé
            </p>
            <p className="text-sm text-slate-500 mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-navy-600 hover:text-navy-800 underline underline-offset-4 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Dots indicator */}
      {filteredProjects.length > visibleCards && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-navy-700"
                  : "w-2 bg-navy-200 hover:bg-navy-300"
              }`}
              aria-label={`Aller à la position ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile navigation */}
      {filteredProjects.length > visibleCards && (
        <div className="flex sm:hidden justify-center gap-3 mt-4">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-navy-200 bg-white text-navy-700 disabled:opacity-30 transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-navy-200 bg-white text-navy-700 disabled:opacity-30 transition-all"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="/offres"
          className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-navy-700 transition-all duration-300 hover:shadow-xl"
        >
          Voir toutes les offres
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </SectionWrapper>
  );
}

