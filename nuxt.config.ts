import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '', // this means it'll use just 'dark' instead of 'dark-mode'
  },
  devtools: { enabled: true },
  srcDir: "src/",
  imports: {
    dirs: ['./utils'],
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    compatibilityDate: '2025-06-16',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
