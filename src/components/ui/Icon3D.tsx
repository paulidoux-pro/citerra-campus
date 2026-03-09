import { cn } from "@/lib/utils";

interface Icon3DProps {
  type: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}

function BuildingIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="building-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="building-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect x="12" y="18" width="40" height="38" rx="3" fill="url(#building-grad)" filter="url(#building-shadow)" />
      <rect x="18" y="24" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="30" y="24" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="18" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="30" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="26" y="44" width="12" height="12" rx="2" fill={accent} opacity="0.8" />
      <rect x="20" y="10" width="24" height="10" rx="2" fill={primary} opacity="0.8" />
      <rect x="29" y="5" width="6" height="7" rx="1" fill={accent} />
    </svg>
  );
}

function HomeIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="home-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="home-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <path d="M32 10L8 30H14V52H26V40H38V52H50V30H56L32 10Z" fill="url(#home-grad)" filter="url(#home-shadow)" />
      <rect x="26" y="38" width="12" height="14" rx="2" fill={accent} opacity="0.8" />
      <rect x="20" y="26" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="36" y="26" width="8" height="6" rx="1" fill="white" opacity="0.3" />
    </svg>
  );
}

function MapIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="map-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="map-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <path d="M32 6C22 6 14 14 14 24C14 38 32 58 32 58C32 58 50 38 50 24C50 14 42 6 32 6Z" fill="url(#map-grad)" filter="url(#map-shadow)" />
      <circle cx="32" cy="24" r="8" fill="white" opacity="0.3" />
      <circle cx="32" cy="24" r="4" fill={accent} />
    </svg>
  );
}

function HandshakeIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hand-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="hand-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#hand-grad)" filter="url(#hand-shadow)" />
      <path d="M18 32L26 24L32 30L38 24L46 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M22 36L30 28L32 30L34 28L42 36" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="38" r="3" fill="white" opacity="0.4" />
    </svg>
  );
}

function GraduationIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="grad-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <path d="M32 8L4 24L32 40L60 24L32 8Z" fill="url(#grad-grad)" filter="url(#grad-shadow)" />
      <path d="M16 30V44L32 52L48 44V30" fill={primary} opacity="0.6" />
      <rect x="54" y="24" width="4" height="24" rx="2" fill={accent} />
      <circle cx="56" cy="50" r="3" fill={accent} />
    </svg>
  );
}

function RulerIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ruler-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="ruler-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect x="8" y="22" width="48" height="20" rx="3" fill="url(#ruler-grad)" filter="url(#ruler-shadow)" />
      <rect x="16" y="22" width="2" height="10" fill="white" opacity="0.4" />
      <rect x="24" y="22" width="2" height="14" fill="white" opacity="0.5" />
      <rect x="32" y="22" width="2" height="10" fill="white" opacity="0.4" />
      <rect x="40" y="22" width="2" height="14" fill="white" opacity="0.5" />
      <rect x="48" y="22" width="2" height="10" fill="white" opacity="0.4" />
    </svg>
  );
}

function GlobeIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="globe-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="globe-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#globe-grad)" filter="url(#globe-shadow)" />
      <ellipse cx="32" cy="32" rx="12" ry="26" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <line x1="6" y1="32" x2="58" y2="32" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <line x1="10" y1="20" x2="54" y2="20" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="10" y1="44" x2="54" y2="44" stroke="white" strokeWidth="1" opacity="0.2" />
      <circle cx="24" cy="26" r="3" fill={accent} opacity="0.8" />
      <circle cx="40" cy="38" r="2.5" fill={accent} opacity="0.8" />
    </svg>
  );
}

function CalendarIcon({ light }: { light?: boolean }) {
  const primary = light ? "#6AB4D8" : "#003B5C";
  const secondary = light ? "#A3D1E8" : "#0074AD";
  const accent = light ? "#D4A843" : "#B8860B";
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cal-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </linearGradient>
        <filter id="cal-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>
      <rect x="8" y="14" width="48" height="42" rx="4" fill="url(#cal-grad)" filter="url(#cal-shadow)" />
      <rect x="8" y="14" width="48" height="14" rx="4" fill={accent} />
      <rect x="20" y="8" width="4" height="12" rx="2" fill={primary} />
      <rect x="40" y="8" width="4" height="12" rx="2" fill={primary} />
      <rect x="16" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="28" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="40" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3" />
      <rect x="16" y="44" width="8" height="6" rx="1" fill="white" opacity="0.2" />
      <rect x="28" y="44" width="8" height="6" rx="1" fill="white" opacity="0.2" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ light?: boolean }>> = {
  building: BuildingIcon,
  home: HomeIcon,
  map: MapIcon,
  handshake: HandshakeIcon,
  graduation: GraduationIcon,
  ruler: RulerIcon,
  globe: GlobeIcon,
  calendar: CalendarIcon,
};

const sizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

export default function Icon3D({
  type,
  className,
  size = "md",
  light,
}: Icon3DProps) {
  const IconComponent = iconComponents[type];
  if (!IconComponent) return null;

  return (
    <div className={cn(sizes[size], className)}>
      <IconComponent light={light} />
    </div>
  );
}
