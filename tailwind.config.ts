import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        oxblood: "#57051D",
        ivory: "#FFF9F5",
      },
    },
  },
  plugins: [],
};

export default config;
