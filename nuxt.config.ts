export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'] // routes to prerender
    }
  },
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
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

  modules: ['@nuxt/image', 'nuxt-icon', '@vite-pwa/nuxt', '@nuxt/content', '@nuxtjs/sitemap'],

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
  registerType: 'autoUpdate',
  manifest: {
    id: 'com.williamrinaldi.portfolio',  // Pixel/Android app recognition
    name: 'William Rinaldi Portfolio',
    short_name: 'WRinaldi',
    description: 'Front End Developer William Rinaldi portfolio website',
    lang: 'en',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#FFFFFF',
    icons: [
      {
        src: 'maskable_icon_x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: 'maskable_icon_x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  },

  workbox: {
    navigateFallback: '/', 
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    
    // Precache static pages explicitly, no need to precache root '/'
    additionalManifestEntries: [
      { url: '/about', revision: '1' },
      { url: '/experience', revision: '1' },
      { url: '/blog', revision: '1' }
    ],
    navigateFallbackDenylist: [/^\/$/], // prevents the first request from triggering the error

    runtimeCaching: [
      {
        urlPattern: /^https:\/\/williamrinaldi\.com\/.*$/,
        handler: 'NetworkFirst',
        method: 'GET',
        options: {
          cacheName: 'network-cache',
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: /\/$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'html-cache',
        },
      },
    ]
  }
},


  compatibilityDate: '2025-04-12'
})