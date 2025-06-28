export default defineNuxtConfig({
  ssr: true, // или false, если хотите чисто статический сайт
  app: {
    baseURL: '/', // если репозиторий USERNAME.github.io, то оставьте '/'
  },
  nitro: {
    prerender: {
      crawlLinks: true, 
    },
  },
});