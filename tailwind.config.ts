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
        rose: {
          800: "#7A284E",
          50: "#FFF7FB"
        },
        stone: {
          900: "#312E2C",
          600: "#5F564D",
          150: "#E3DDD7",
          100: "#F3E5D7"
        },
        brown: {
          800: "#854632"
        },
        white: "#FFFFFF"
      },
      fontFamily: {
        sans: "var(--font-outfit)",
        serif: "var(--font-young-serif)"
      }
    },
  },
  plugins: [],
};
export default config;
