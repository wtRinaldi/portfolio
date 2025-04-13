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
    providers: {
      provider: 'unsplash',
      unsplash: {
        baseUrl: 'https://api.unsplash.com'
      },
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
    imageKey: process.env.UNSPLASH_API_KEY,
  },

  modules: ['@nuxt/image', 'nuxt-icon', '@vite-pwa/nuxt', '@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
    },
    display: 'swap'
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    }
  },

  site: {
    url: 'https://williamrinaldi.com',
  },

  pwa: {
    manifest: {
      name: 'William Rinaldi portfolio',
      short_name: 'WRinaldi',
      description: 'Front End Developer William Rinaldi portfolio website',
      lang: 'en',
      theme_color: '#000000',
      background_color: '#FFFFFF',
      display: 'standalone',
      icons: [
        {
          src: 'maskable_icon_x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable_icon_x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable_icon_x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable_icon_x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable_icon_x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable_icon_x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'maskable_icon_x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    }
  },

  compatibilityDate: '2025-04-12'
})