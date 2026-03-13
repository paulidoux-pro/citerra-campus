import type { NavItem, KeyFigure, Service, Project, Partner } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Nos offres", href: "/#references" },
  { label: "Qui sommes-nous ?", href: "/#a-propos" },
  { label: "Nos expertises", href: "/#expertise" },
  { label: "Co-Studying", href: "/#co-studying" },
  { label: "Nos métiers", href: "/#ecosysteme" },
  { label: "Contact", href: "/#contact" },
];

export const KEY_FIGURES: KeyFigure[] = [
  { value: 15, suffix: "+", label: "Campus accompagnés", icon: "graduation" },
  { value: 85000, suffix: "m²", label: "Développés", icon: "ruler" },
  { value: 25, suffix: "+", label: "Villes en France", icon: "globe" },
  { value: 5, suffix: "ans", label: "D'expertise", icon: "calendar" },
];

export const SERVICES: Service[] = [
  {
    title: "Développement de campus",
    description:
      "De l'idéation à la livraison de campus multi-acteurs et multi-activités",
    subtitle:
      "Co-concevoir des campus au service du développement du territoire et de l'expérience étudiante, en logique d'AMO campus.",
    icon: "building",
  },
  {
    title: "Attractivité et expérience étudiante",
    description:
      "Intégrer des offres de services pour garantir l'attractivité du campus",
    subtitle:
      "Résidences étudiantes, co-living, restauration, commerces, transports, activités sportives, coworking, … adaptées aux attentes des nouvelles générations d'étudiants.",
    icon: "home",
  },
  {
    title: "Stratégie territoriale",
    description:
      "Inventer des écosystèmes de formation et d'innovation intégrés au territoire",
    subtitle:
      "En logique de complémentarité, au service du développement économique et connecté aux entreprises.",
    icon: "map",
  },
  {
    title: "Accompagnement des montages juridiques et économiques",
    description:
      "Intégrer la diversité des profils d'établissements d'enseignement (publics, associatifs, privés, consulaires, CFA, …)",
    subtitle:
      "Pour des montages viables, sécurisés et pérennes au service de la réussite et du développement des établissements.",
    icon: "handshake",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Campus François d'Assise",
    city: "Bordeaux",
    description:
      "Campus multi-acteurs de 10 000 m² accueillant JUNIA, ISFEC Aquitaine, AFEPT et des démonstrateurs innovants.",
    surface: "10 000 m²",
    actors: ["JUNIA", "ISFEC Aquitaine", "AFEPT", "DDEC Gironde"],
  },
  {
    name: "Campus Claire d'Assise",
    city: "Bordeaux",
    description:
      "Extension du campus François d'Assise avec IRCOM, Institut Catholique de Toulouse et habitat inclusif.",
    surface: "10 000 m²",
    actors: ["IRCOM", "ICT", "Héméra", "Habitat inclusif"],
  },
  {
    name: "Campus du Pouy",
    city: "Dax",
    description:
      "Campus thématique autour de l'eau de 8 000 m² avec Arts et Métiers et l'Office International de l'Eau.",
    surface: "8 000 m²",
    actors: ["Arts et Métiers", "Campus Landes", "OIEau", "CMA des Landes"],
  },
  {
    name: "BVA Campus",
    city: "Beauvais",
    description:
      "Campus Santé / IA-Data / Supply Chain de 10 000 m² avec plusieurs écoles d'ingénieurs.",
    surface: "10 000 m²",
    actors: ["ITII Proméo", "Centrale Lille", "ISRP", "BIOPRAXIA"],
  },
  {
    name: "Campus Ferney-Voltaire",
    city: "Ferney-Voltaire",
    description:
      "Campus d'excellence de 27 000 m² dans le Franco-Genevois, au carrefour de l'Europe et des savoirs.",
    surface: "27 000 m²",
    actors: ["IRCOM", "Institut Jeanne d'Arc", "OIEau", "Université Claude Bernard"],
  },
  {
    name: "Campus des Fabriques",
    city: "Marseille",
    description:
      "Campus multi-acteurs et multi-services au cœur de la métropole marseillaise.",
    surface: "",
    actors: [],
  },
];

export const PARTNERS: Partner[] = [
  {
    name: "ESRre",
    role: "Agence immobilière",
    description:
      "Agence immobilière portant les marques Citerra Campus Immobilier (professionnels) et AIM Immobilier (particuliers).",
  },
  {
    name: "Winn'UP",
    role: "Cabinet de conseil",
    description:
      "Cabinet de conseils spécialisé en stratégie d'enseignement supérieur et d'accompagnement des territoires.",
  },
  {
    name: "Campuscore Institute",
    role: "Société à mission",
    description:
      "Société à Mission portant deux dispositifs de labellisation des campus : Campuscore Design (pour la conception ou rénovation de campus) et Campuscore Expérience (pour les campus existants).",
  },
];

export const CONTACT_INFO = {
  email: "contact@citerracampus.fr",
  phone: "+33 (0)6 77 84 31 41",
  address: "France",
  website: "www.citerracampus.fr",
};
