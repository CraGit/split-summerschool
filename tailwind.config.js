/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2d600", //yellow
        secondary: "#ff5400", //orange
        tertiary: "#b8d100", //green
        quaternary: "#23ffff", //blue
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        written: ["var(--font-gochi-hand)", "cursive"],
      },
    },
  },
  plugins: [],
};
