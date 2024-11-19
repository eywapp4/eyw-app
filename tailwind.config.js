// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [nextui()],
  theme: {
    extend: {
      colors: {
        eywnavy: {
          250: "#CACFDB",
          500: "#969EB6",
          750: "#626E92",
          1000: "#1D3C70",
        },
        eywblue: {
          250: "#DAEBF0",
          500: "#B6D8E2",
          750: "#92C5D4",
          1000: "#34B3C7",
        },
        eywpurple: {
          250: "#D8D6E7",
          500: "#B0ADCF",
          750: "#8985B7",
          1000: "#655CA3",
        },
        eywcoral: {
          250: "#F2D5D5",
          500: "#E6ABAB",
          750: "#DA8182",
          1000: "#EA5658",
        },
        eywteal: {
          250: "#DDEDE9",
          500: "#BBDBD3",
          750: "#99CABE",
          1000: "#4BB8A9",
        },
        eywyellow: {
          250: "#F6E3C8",
          500: "#EDC890",
          750: "#E5AD59",
          1000: "#EA9200",
        },
      },
    },
  },
};
