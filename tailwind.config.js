const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      spacing: {
        120: '30rem',
        160: '40rem'
      },
      colors: {
        primary: {
          light: '#212529',
          dark: ''
        },
        secondary: {
          light: '#495057',
          dark: '',
        },
        ternary: {
          light: '',
          dark: ''
        },
        active: '#3b82f6',
        success: '',
        danger: '',
        warning: '',
        info: '',
      }
    },
  },
  plugins: [],
}

