import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cv: {
          black: "#000000",
          surface: "#080808",
          red: "#E21D1D",
          "red-bright": "#FF3B3B",
          green: "#00FF41",
          muted: "#A0A0A0",
          border: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "grid-scroll": "grid-scroll 12s linear infinite",
        "border-spin": "border-spin 4s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
        scan: "scan 8s linear infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "grid-scroll": {
          to: { backgroundPosition: "48px 48px" },
        },
        "border-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -2%)" },
          "30%": { transform: "translate(1%, 2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "70%": { transform: "translate(2%, -1%)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
