// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'William Rinaldi - Senior Front End Developer',
      meta: [{
        name: 'description',
        content: 'Senior Front End Developer'
      }],
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  image: {
    fakeStore: {
      baseURL: 'https://fakestoreapi.com'
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },

  modules: ["@nuxt/image"]
})