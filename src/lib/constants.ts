import type { NavItem, KeyFigure, Service, Project, Partner } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Co-Schooling", href: "/#co-schooling" },
  { label: "Références", href: "/#references" },
  { label: "Écosystème", href: "/#ecosysteme" },
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
      "Conception et développement de campus d'enseignement supérieur multi-acteurs, de la programmation à la livraison.",
    icon: "building",
  },
  {
    title: "Résidences étudiantes",
    description:
      "Création de résidences étudiantes et co-living connectées aux campus, adaptées aux nouveaux modes de vie.",
    icon: "home",
  },
  {
    title: "Stratégie territoriale",
    description:
      "Diagnostics territoriaux et identification du potentiel d'implantation de nouveaux acteurs d'enseignement supérieur.",
    icon: "map",
  },
  {
    title: "Conseil & accompagnement",
    description:
      "Médiation stratégique entre établissements, collectivités, aménageurs, promoteurs et investisseurs.",
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
    name: "ESRre SAS",
    role: "Groupe holding",
    description:
      "Société holding portant les marques Citerra Campus Immobilier et AIM Immobilier.",
  },
  {
    name: "AIM Immobilier",
    role: "Marché des particuliers",
    description:
      "Marque dédiée au marché immobilier résidentiel des particuliers.",
  },
  {
    name: "Winn'UP",
    role: "Conseil stratégique",
    description:
      "Cabinet de conseil spécialisé dans la transformation des établissements d'enseignement supérieur et des territoires.",
  },
  {
    name: "Campuscore",
    role: "Labellisation campus",
    description:
      "Dispositif de labellisation et d'évaluation de la qualité des campus d'enseignement supérieur.",
  },
];

export const CONTACT_INFO = {
  email: "contact@citerracampus.fr",
  phone: "+33 (0)6 77 84 31 41",
  address: "France",
  website: "www.citerracampus.fr",
};
