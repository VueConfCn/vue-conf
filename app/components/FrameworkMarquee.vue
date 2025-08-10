<template>
    <ClientOnly>
        <Vue3Marquee
            :duration="60"
            :pause-on-hover="true"
            class="py-4 pt-8 overflow-hidden"
        >
            <ul class="relative flex items-center overflow-hidden w-full">
                <li
                    v-for="item in frameworks"
                    :key="item.name"
                    class="relative mx-8 flex-1 w-20"
                >
                    <NuxtLink
                        :title="item.name"
                        :to="item.url"
                        class="flex flex-col items-center gap-3"
                        target="_blank"
                    >
                        <img
                            :alt="item.name"
                            :src="item.img"
                            class="size-10"
                        >
                        <span class="text-base font-semibold text-sm whitespace-nowrap">{{ item.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </Vue3Marquee>
    </ClientOnly>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'FrameworkMarquee',
})

interface IFramework {
    name: string
    img: string
    url: string
}

const frameworks: IFramework[] = [
    {
        name: 'astro',
        img: '/dev/astro.svg',
        url: 'https://astro.build/',
    },
    {
        name: 'esbuild',
        img: '/dev/esbuild.svg',
        url: 'https://esbuild.org/',
    },
    {
        name: 'h3',
        img: '/dev/h3.svg',
        url: 'https://h3.dev/',
    },
    {
        name: 'javascript',
        img: '/dev/javascript.svg',
        url: 'https://www.javascript.com/',
    },
    {
        name: 'nuxt',
        img: '/dev/nuxt.svg',
        url: 'https://nuxt.com/',
    },
    {
        name: 'oxc',
        img: '/dev/oxc.svg',
        url: 'https://oxc.rs/',
    },
    {
        name: 'pinia',
        img: '/dev/pinia.svg',
        url: 'https://pinia.vuejs.org/',
    },
    {
        name: 'vuejs',
        img: '/dev/vue.svg',
        url: 'https://vuejs.org/',
    },
    {
        name: 'vue_devtools',
        img: '/dev/vue_devtools.svg',
        url: 'https://vuejs.org/',
    },
    {
        name: 'vueuse',
        img: '/dev/vueuse.svg',
        url: 'https://vueuse.org/',
    },
    {
        name: 'rolldown',
        img: '/dev/rolldown.svg',
        url: 'https://rolldown.rs/',
    },
    {
        name: 'rollup',
        img: '/dev/rollup.svg',
        url: 'https://rollupjs.org/',
    },
    {
        name: 'solidjs',
        img: '/dev/solidjs.svg',
        url: 'https://solidjs.com/',
    },
    {
        name: 'supabase',
        img: '/dev/supabase.svg',
        url: 'https://supabase.com/',
    },
    {
        name: 'svelte',
        img: '/dev/svelte.svg',
        url: 'https://svelte.dev/',
    },
    {
        name: 'tailwindcss',
        img: '/dev/tailwindcss.svg',
        url: 'https://tailwindcss.com/',
    },
    {
        name: 'tsdown',
        img: '/dev/tsdown.svg',
        url: 'https://tsdown.rs/',
    },
    {
        name: 'typescript',
        img: '/dev/typescript.svg',
        url: 'https://www.typescriptlang.org/',
    },
    {
        name: 'unjs',
        img: '/dev/unjs.svg',
        url: 'https://unjs.io/',
    },
    {
        name: 'unocss',
        img: '/dev/unocss.svg',
        url: 'https://unocss.dev/',
    },
    {
        name: 'vite',
        img: '/dev/vite.svg',
        url: 'https://vitejs.dev/',
    },
    {
        name: 'vitepress',
        img: '/dev/vitepress.svg',
        url: 'https://vitepress.dev/',
    },
    {
        name: 'vitest',
        img: '/dev/vitest.svg',
        url: 'https://vitest.dev/',
    },
]
</script>

<style scoped>

</style>
