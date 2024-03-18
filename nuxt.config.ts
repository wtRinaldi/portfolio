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
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}]
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

  modules: ['@nuxt/image', 'nuxt-icons', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'William Rinaldi portfolio',
      short_name: 'William Rinaldi',
      lang: 'en',
      theme_color: '#000',
      background_color: '#FFF',
      display: 'standalone',
      scope: 'https://williamrinaldi.com/',
      start_url: 'https://williamrinaldi.com/',
      icons: [
        {
          src: 'icon-48-48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon-72-72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon-96-96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon-144-144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon-192-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon-512-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    }
  }
})