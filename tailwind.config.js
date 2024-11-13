/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    ".src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    extend: {
      dropShadow: {
        'shadow': '20px 20px 50px -3px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        '1px': '1px',
      }
    },
  },
  plugins: [],
}



