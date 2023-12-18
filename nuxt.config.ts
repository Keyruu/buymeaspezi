// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        url: 'https://buymeaspezi.com',
    },
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@nuxt/image',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
    ],
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
                file: 'en.js',
                isCatchallLocale: true
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
