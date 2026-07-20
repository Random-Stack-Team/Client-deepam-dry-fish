import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        "navy-mid": "#102A46",
        "navy-deep": "#071A33",
        gold: "#C8862D",
        "gold-light": "#D19A4B",
        cream: "#F7F2EA",
        mist: "#F5F3F0",
        ink: "#1A2B3C",
        line: "#E8D9BE",
        body: "#5B6B7C",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(11, 37, 69, 0.06)",
        soft: "0 8px 30px rgba(11, 37, 69, 0.10)",
      },
      borderRadius: {
        brand: "4px",
        pill: "999px",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "5rem",
      },
    },
  },
  plugins: [],
};

export default config;
