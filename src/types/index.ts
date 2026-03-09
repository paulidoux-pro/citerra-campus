export interface NavItem {
  label: string;
  href: string;
}

export interface KeyFigure {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  name: string;
  city: string;
  description: string;
  surface: string;
  actors: string[];
}

export interface Partner {
  name: string;
  role: string;
  description: string;
}
