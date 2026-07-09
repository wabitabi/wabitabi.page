import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#faf7f0",
        linen: "#f3ede1",
        sand: "#e5dccb",
        ink: "#3d3229",
        taupe: "#8a7a66",
        gold: "#b08b5e",
      },
    },
  },
  plugins: [],
};

export default config;
