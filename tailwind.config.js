/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111", // Deep Charcoal
        secondary: "#C8A96A", // Warm Gold
        background: "#F8F8F8", // Off-white
        accent1: "#8B897D", // Muted Olive
        accent2: "#E5E1D8", // Beige
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        body: ["'Inter'", 'sans-serif'],
      }
    },
  },
  plugins: [],
}
