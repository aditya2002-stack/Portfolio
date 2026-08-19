import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F1C",
        surface: "#111A2C",
        "surface-alt": "#16213A",
        border: {
          DEFAULT: "#213052",
          soft: "#1A2740",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          dim: "#1B9E8F",
          soft: "#0F2E2C",
        },
        amber: {
          DEFAULT: "#F0A93B",
          soft: "#2E220E",
        },
        ink: {
          DEFAULT: "#E9EEF7",
          muted: "#93A0BC",
          faint: "#7C89A8",
        },
      },
      fontFamily: {
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          '"JetBrains Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #16213A 1px, transparent 1px), linear-gradient(to bottom, #16213A 1px, transparent 1px)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "draw": "draw 1.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        draw: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
