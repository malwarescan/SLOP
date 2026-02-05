import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0b0e11",
        charcoal: "#12161b",
        steel: "#8a99aa",
        cyan: "#59f0ff",
        beamGreen: "#29ff7f",
        warning: "#ffb454",
        heroGlass: "rgba(0,0,0,0.42)",
        heroBorder: "rgba(255,255,255,0.10)"
      },
      boxShadow: {
        cyanGlowShadow: "0 0 20px rgba(89, 240, 255, 0.18)",
        beamGlowShadow: "0 0 22px rgba(41, 255, 127, 0.28)",
        subtleBorder: "inset 0 0 0 1px rgba(140, 160, 180, 0.16)",
        heroUnit: "0 0 0 1px rgba(0,0,0,0.35) inset, 0 18px 60px rgba(0,0,0,0.55)"
      },
      borderRadius: {
        card: "16px",
        button: "14px",
        hero: "24px"
      },
      opacity: {
        14: "0.14",
        15: "0.15",
        18: "0.18",
        85: "0.85",
        88: "0.88",
        92: "0.92"
      },
      backgroundImage: {
        "oracle-grid": "radial-gradient(circle at 20% 20%, rgba(89,240,255,0.12), transparent 45%), radial-gradient(circle at 85% 15%, rgba(41,255,127,0.10), transparent 40%), radial-gradient(circle at 30% 80%, rgba(89,240,255,0.08), transparent 55%)",
        "obsidian-sheen": "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
