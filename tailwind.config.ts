import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Hanken Grotesk'", "sans-serif"],
        space: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#0B0C0F",
        orange: "#ED7D31",
        green: "#84E15D",
        purple: "#B79BFF",
        teal: "#34D6B4",
      },
    },
  },
  plugins: [],
};
export default config;
