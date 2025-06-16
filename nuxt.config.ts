import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '', // this means it'll use just 'dark' instead of 'dark-mode'
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  routeRules: {
    '/api/**': {
      proxy: process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:9000/api/**' : '/api/**',
    },
  },
  imports: {
    dirs: ['./utils'],
  },
  nitro: {
    compatibilityDate: '2025-06-16',
    preset: 'vercel',
    vercel: {
      config: {
        routes: [
          {
            src: '/api/(.*)',
            dest: 'api/main.py',
          },
        ],
      },
    },
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      hmr: {
        port: 24678
      },
    },
    plugins: [tailwindcss()],
  },
});
