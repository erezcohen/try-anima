/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}",
    "./.cursorrules", // Enable Tailwind intellisense
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
