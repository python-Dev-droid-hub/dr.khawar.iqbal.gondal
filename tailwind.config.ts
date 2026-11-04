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
        teal: {
          950: "rgb(var(--teal-950) / <alpha-value>)",
          900: "rgb(var(--teal-900) / <alpha-value>)",
          800: "rgb(var(--teal-800) / <alpha-value>)",
        },
        cream: {
          DEFAULT: "rgb(var(--cream) / <alpha-value>)",
          dark: "rgb(var(--cream-dark) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          light: "rgb(var(--gold-light) / <alpha-value>)",
          dark: "rgb(var(--gold-dark) / <alpha-value>)",
        },
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        heading: "#011839",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        card: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 46, 51, 0.06), 0 12px 40px rgba(11, 46, 51, 0.08)",
        glass:
          "0 8px 32px rgba(11, 46, 51, 0.08), 0 2px 8px rgba(11, 46, 51, 0.04)",
        gold: "0 8px 24px rgba(201, 161, 91, 0.35)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, rgb(var(--gold-light)) 0%, rgb(var(--gold)) 55%, rgb(var(--gold-dark)) 100%)",
        "teal-hero":
          "linear-gradient(160deg, rgb(var(--teal-950)) 0%, rgb(var(--teal-900)) 45%, rgb(var(--teal-800)) 100%)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
