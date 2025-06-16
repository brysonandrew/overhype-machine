import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '', // this means it'll use just 'dark' instead of 'dark-mode'
  },
  devtools: { enabled: true },
  srcDir: 'frontend/',
  imports: {
    dirs: ['./utils'],
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
