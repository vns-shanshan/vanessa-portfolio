import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#faf7f0",
          dark: "#192227",
        },
        secondary: {
          light: "#4a4947",
          dark: "#CAC9C4",
        },
        accent: {
          light: "#4a6473",
          dark: "#6A8EA3",
        },
        text: {
          light: "#b0b0b0",
          dark: "#8C8C8C",
        },
        important: {
          light: "#8c8c8c",
          dark: "#B0B0B0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
