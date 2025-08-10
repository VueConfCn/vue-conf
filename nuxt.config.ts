import tailwindcss from '@tailwindcss/vite'
import { version as nuxtVersion } from 'nuxt/package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/icon',
        'shadcn-nuxt',
        '@vueuse/nuxt',
    ],
    devtools: { enabled: true },
    app: {
        head: {
            title: 'VueConf | Vue.js Conference Collection',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
            link: [
                {
                    rel: 'shortcut icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        public: {
            github: 'https://github.com/VueConfCn/vue-conf',
            nuxtVersion,
        },
    },

    appDir: './',

    compatibilityDate: '2025-08-07',
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },

})
