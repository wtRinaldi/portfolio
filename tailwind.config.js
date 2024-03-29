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
          light: '#253237',
          dark: ''
        },
        secondary: {
          light: '#5C6B73',
          dark: '',
        },
        ternary: {
          light: '#9DB4C0',
          dark: ''
        },
        quaternary: '#C2DFE3',
        quinary: '#E0FBFC',
        active: '#5C6B73',
        link: '#2563EB',
        success: '',
        danger: '',
        warning: '',
        info: '',
      }
    },
  },
  plugins: [],
}

