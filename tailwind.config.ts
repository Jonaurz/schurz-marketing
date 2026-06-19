import type { Config } from "tailwindcss";

/**
 * Tailwind v3 - Marken-Theme Schurz Marketing v4 "Studio".
 * Helles, redaktionelles System: paper/ink/accent für alle öffentlichen
 * Seiten. Die dunklen Alt-Tokens (obsidian/graphite/...) bleiben für den
 * internen Admin-Bereich und den Cookie-Overlay bestehen.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f5f5f4",
        ink: "#1c1917",
        accent: "#8a6a1e",
        brand: "#c79a34",

        /* Alt-Tokens (Admin/Overlay) */
        obsidian: "#0b0b0d",
        graphite: "#17171a",
        charcoal: "#242428",
        platinum: "#f6f4ef",
        steel: "#707783",
        gold: {
          DEFAULT: "#c79a34",
          deep: "#8f6b1f",
          champagne: "#f2d38a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Archivo", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Archivo", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem", // 1280px
      },
      letterSpacing: {
        label: "0.14em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
