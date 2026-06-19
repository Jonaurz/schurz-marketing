import type { ReactNode } from "react";

/** Einheitliche, dünne Linien-Icons (24×24, currentColor). Dekorativ (aria-hidden). */
type IconProps = { className?: string };

function Svg({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Svg>
);

export const Check = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const Phone = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Svg>
);

export const Mail = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Svg>
);

export const MapPin = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const Menu = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
);

export const X = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Svg>
);

export const ChevronDown = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const Layout = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </Svg>
);

export const Video = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="m22 8-5 4 5 4V8Z" />
    <rect x="2" y="6" width="13" height="12" rx="2" />
  </Svg>
);

export const Compass = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="m15.5 8.5-2.1 5-5 2.1 2.1-5 5-2.1Z" />
  </Svg>
);

export const MessageCircle = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />
  </Svg>
);

export const ShieldCheck = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const Accessibility = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="3.8" r="1.6" />
    <path d="M5 8h14" />
    <path d="M12 8v5" />
    <path d="m8.5 21 3.5-6 3.5 6" />
  </Svg>
);

export const Gauge = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M3.6 17.5a9 9 0 1 1 16.8 0" />
    <path d="M12 13.5 15.5 9" />
    <circle cx="12" cy="13.8" r="1.4" />
  </Svg>
);

export const Search = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

export const Sparkles = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 3.5 13.7 8 18 9.7 13.7 11.4 12 16l-1.7-4.6L6 9.7 10.3 8 12 3.5Z" />
    <path d="M19 14.5 19.8 16.7 22 17.5l-2.2.8L19 20.5l-.8-2.2L16 17.5l2.2-.8L19 14.5Z" />
  </Svg>
);

export const Quote = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3" />
    <path d="M19 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v2a3 3 0 0 1-3 3" />
  </Svg>
);

export const Users = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
    <circle cx="9" cy="7" r="3.2" />
    <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
    <path d="M16 3.6a4 4 0 0 1 0 7.75" />
  </Svg>
);
