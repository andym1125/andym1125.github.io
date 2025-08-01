// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Creepster", "cursive"],
        body: ['"Special Elite"', "cursive"],
      },
    },
  },
  plugins: [],
}