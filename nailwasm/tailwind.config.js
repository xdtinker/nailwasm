const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./wwwroot/index.html",
      "./Pages/**/*.{razor,cshtml}", 
      "./Shared/**/*.{razor,cshtml}",
      "./Components/**/*.{razor,cshtml}"],
  theme: {
      extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
    },
  },
    plugins: [require('@tailwindcss/forms')],
}

