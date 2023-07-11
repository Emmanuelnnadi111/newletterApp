/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./assets/**/*.html', '*.html'],
  theme: {
    extend: {
      colors: {
          DarkSlateGrey: '#242742',
          CharcoalGrey: '#36384e',
          Grey: '#9294a0',
        // primary color
          Tomato: '#ff6257'
      }
    },
  },
  plugins: [],
}

