/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': 'rgba(255, 132, 0, 0.7)',
        'neon-gold': 'rgba(255, 215, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
