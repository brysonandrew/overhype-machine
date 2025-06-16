import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://overhype-machine.onrender.com',
    },
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '', // this means it'll use just 'dark' instead of 'dark-mode'
  },
  devtools: { enabled: true },
  srcDir: 'frontend/',
  imports: {
    dirs: ['./utils'],
  },
  nitro: {
    compatibilityDate: '2025-06-16',
    preset: 'vercel',
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      hmr: {
        port: 24678,
      },
    },
    plugins: [tailwindcss()],
  },
});
