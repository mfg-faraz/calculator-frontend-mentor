/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {

    },
  },

  plugins: [
    createThemes({
      dark: {
        'background-main': 'hsl(222, 26%, 31%)',
        'background-toggle': 'hsl(223, 31%, 20%)',
        'background-keypad': 'hsl(223, 31%, 20%)',
        'background-screen': 'hsl(224, 36%, 15%)',
        'secondary-key-background': 'hsl(225, 21%, 49%)',
        'secondary-key-shadow': 'hsl(224, 28%, 35%)',
        'primary-key-toggle': 'hsl(6, 63%, 50%)',
        'primary-key-shadow': 'hsl(6, 70%, 34%)',
        'basic-key-background': 'hsl(30, 25%, 89%)',
        'basic-key-shadow': 'hsl(28, 16%, 65%)',
        'text-dark': 'hsl(221, 14%, 31%)',
        'text-white': 'hsl(0, 0%, 100%)',
      },
      light: {
        'background-main': 'hsl(0, 0%, 90%)',
        'background-toggle': 'hsl(0, 5%, 81%)',
        'background-keypad': 'hsl(0, 5%, 81%)',
        'background-screen': 'hsl(0, 0%, 93%)',
        'secondary-key-background': 'hsl(185, 42%, 37%)',
        'secondary-key-shadow': 'hsl(185, 58%, 25%)',
        'primary-key-toggle': 'hsl(25, 98%, 40%)',
        'primary-key-shadow': 'hsl(25, 99%, 27%)',
        'basic-key-background': 'hsl(45, 7%, 89%)',
        'basic-key-shadow': 'hsl(35, 11%, 61%)',
        'text-dark': 'hsl(60, 10%, 19%)',
        'text-white': 'hsl(0, 0%, 100%)',
      },
      contrast: {
        'background-main': 'hsl(268, 75%, 9%)',
        'background-toggle': 'hsl(268, 71%, 12%)',
        'background-keypad': 'hsl(268, 71%, 12%)',
        'background-screen': 'hsl(268, 71%, 12%)',
        'secondary-key-background': 'hsl(281, 89%, 26%)',
        'secondary-key-shadow': 'hsl(285, 91%, 52%)',
        'primary-key-toggle': 'hsl(176, 100%, 44%)',
        'primary-key-shadow': 'hsl(177, 92%, 70%)',
        'basic-key-background': 'hsl(268, 47%, 21%)',
        'basic-key-shadow': 'hsl(290, 70%, 36%)',
        'text-dark': 'hsl(52, 100%, 62%)',
        'text-white': 'hsl(0, 0%, 100%)',
        'text-light': 'hsl(52, 100%, 62%)',//hsl(198, 20%, 13%)
      },
    })
  ],
}

