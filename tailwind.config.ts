import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1rem",
        xl: "2rem",
        "2xl": "0rem",
      },
    },
    colors: {
      primary: "#377DFF",
      white: "#FFFFFF",
      black: "#212833",
      green: "#38CB89",
      yellow: "#FFAB00",
      grey: "#FAFBFC",
      dark: "#4E5D78",
      "dark-grey": "#B0B7C3",
      red: "#FF5630  ",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
