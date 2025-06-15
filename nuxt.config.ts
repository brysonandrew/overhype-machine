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
    '/docs': {
      proxy: 'http://0.0.0.0:9000/docs',
    },
    '/openapi.json': {
      proxy: 'http://0.0.0.0:9000/openapi.json',
    },
  },
  nitro: {
    vercel: {
      config: {
        routes: [
          {
            src: '/api/(.*)',
            dest: 'api/index.py',
          },
        ],
      },
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
