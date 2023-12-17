// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui",'@nuxtjs/i18n',],
  ui: {
    icons: ["mdi", "simple-icons"]
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        name: 'German',
        file: 'de.js'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js'
      }
    ],
    defaultLocale: 'de',
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  }
})
