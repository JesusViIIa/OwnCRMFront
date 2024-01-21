/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          100: '#0A0233',
          200: '#053833',
          300: '#020933',
          400: '#022833',
          500: '#021933',
        }
      },
    },

  },
  plugins: [],
}