/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_pattern': "linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('../bg.jpg')"
      }
    },
  },
  plugins: [],
}