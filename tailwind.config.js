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
        },
        secondary: {
          light: '#5C6B73',
        },
        ternary: {
          light: '#9DB4C0',
        },
        background: '#fcf6f8',
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

// #fcf6f8