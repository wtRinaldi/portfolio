// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'William Rinaldi - Senior Front End Developer',
      meta: [{
        name: 'description',
        content: 'Senior Front End Developer'
      }],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },

  image: {
    provider: 'unsplash',
    unsplash: {
      baseUrl: 'https://api.unsplash.com'
    },
    format: ['webp'],
    presets: {
      product: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: '60'
        }
      }
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    imageKey: process.env.UNSPLASH_API_KEY
  },

  modules: ['@nuxt/image', 'nuxt-icons'],


})