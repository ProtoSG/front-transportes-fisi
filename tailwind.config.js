/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5EDED',
          100: '#CBDADA',
          200: '#B1C8C8',
          300: '#97B5B5',
          400: '#7DA3A3',
          500: '#658E8E',
          600: '#547676',
          700: '#435F5F',
          800: '#324747',
          900: '#222F2F',
        }
      }
    },
  },
  plugins: [],
}

