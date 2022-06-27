const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: 0,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1196px',
        '2xl': '1196px',
      },
    },
  },
  plugins: [],
}
