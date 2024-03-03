// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'Nuxt Shop',
      meta: [{
        name: 'description',
        content: 'Simple Sales Website'
      }],
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
