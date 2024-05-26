/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'md:hidden'
  ],
  theme: {
    extend: {
      colors: {
        main: '#E1B000',
      },
      fontFamily: {
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
