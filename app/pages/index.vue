<template>
    <div
        :class="cn(
            'flex min-h-screen',
            'bg-cover bg-no-repeat bg-center',
            'bg-[url(/img/background-over.jpeg)]',
            'before:content-[\'\']',
            'before:absolute before:inset-0',
            'before:bg-linear-to-t before:from-neutral before:to-dark/10',

        )"
    >
        <div class="min-h-full z-10 font-mono m-auto w-3xl">
            <BlurReveal
                :delay="0.2"
                :duration="0.75"
            >
                <div class="flex flex-col items-start space-y-8">
                    <span class="text-8xl text-base font-semibold">Vue.js Conference</span>
                    <span
                        class="text-3xl text-base font-semibold"
                    >Bring a technical feast to Vue.js developers around the world</span>
                    <div class="flex justify-start gap-4">
                        <NuxtLink
                            class="bg-emerald-500 text-sm font-semibold font-mono px-3 py-2 rounded-full text-base"
                            to="/events"
                        >
                            View History Events
                        </NuxtLink>

                        <NuxtLink
                            class="flex items-center gap-4 bg-zinc-900/75 text-sm font-semibold font-mono px-5 py-2 rounded-full text-base"
                            target="_blank"
                            to="https://github.com/vuejs/"
                        >
                            Vue.js Github
                            <Icon name="lucide:move-right" />
                        </NuxtLink>
                    </div>
                </div>
            </BlurReveal>
        </div>
    </div>

    <div class="bg-neutral">
        <FrameworkMarquee />

        <div class="relative flex flex-row justify-start gap-20 container m-auto py-32">
            <div class="w-1/2 shrink-0">
                <img
                    alt="VueConf speakers"
                    class="object-cover object-center w-full h-auto rounded-[25%_2%]"
                    loading="lazy"
                    src="/img/speakers.jpg"
                >
            </div>
            <div class="flex flex-col justify-between space-y-8 text-base-100 font-mono min-h-full">
                <span class="text-3xl font-mono font-semibold text-emerald-500">Highest annually anticipated update for the Vue Community</span>
                <span class="mb-auto">What is the State of Vue in 2025?Hear about Alien Signals, Devtools v7, Vapor Mode, Rolldown Vite, Vue Plus.</span>
                <ul class="space-y-2">
                    <li>🔥 4.6m weekly npm downloads</li>
                    <li>😱 1 billion+ monthly CDN requests</li>
                    <li>🌎 2 million users world wide</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="pb-32">
        <TeamCore
            :team-member="member"
            bio="Diversity and inclusion,"
            description="Developers with ingenious ideas"
            icon="logos:vue"
            name="Vue Team"
            team-name="vue"
            title="Vue.js - The Progressive JavaScript Framework"
            url="https://vuejs.org"
        />

        <TeamCore
            :team-member="member"
            bio="Global developers join forces,"
            description="Forge application benchmarks"
            icon="logos:vitejs"
            name="Vite Team"
            team-name="vite"
            title="Vite | Next Generation Frontend Tooling"
            url="https://vite.dev"
        />
    </div>

    <div
        :class="cn(
            'before:content-[\'\']',
            'before:absolute before:inset-0',
            'before:bg-[url(/img/opengraph-image.png)] before:bg-cover',
            'after:content-[\'\']',
            'after:absolute after:inset-0',
            'after:bg-white/85 after:backdrop-blur-xs',
        )"
        class="relative flex min-h-screen"
    >
        <div class="w-full flex flex-col justify-between p-4 z-20">
            <BlurReveal
                :delay="0.2"
                :duration="0.75"
                class="flex flex-col items-center m-auto w-[80%] gap-4"
            >
                <span class="text-3xl font-serif">That’s a wrap? Maybe not.</span>
                <div class="flex items-end gap-3">
                    <span class="text-5xl font-semibold font-mono">Great projects start with 'vue'!</span>
                    <img
                        alt="happy"
                        class="size-24"
                        src="/happy.svg"
                    >
                </div>

                <div class="flex items-center gap-6 mt-[50%]">
                    <NuxtLink
                        class="flex items-center border-2 p-2 rounded-full"
                        target="_blank"
                        to="https://vuejs.org/"
                    >
                        <Icon
                            name="mynaui:desktop"
                            size="32"
                        />
                    </NuxtLink>
                    <NuxtLink
                        class="flex items-center border-2 p-2 rounded-full"
                        target="_blank"
                        to="https://github.com/vuejs/"
                    >
                        <Icon
                            name="line-md:github-loop"
                            size="32"
                        />
                    </NuxtLink>
                    <NuxtLink
                        class="flex items-center border-2 p-2 rounded-full"
                        target="_blank"
                        to="https://chat.vuejs.org/"
                    >
                        <Icon
                            name="ic:baseline-discord"
                            size="32"
                        />
                    </NuxtLink>
                    <NuxtLink
                        class="flex items-center border-2 p-2 rounded-full"
                        target="_blank"
                        to="https://x.com/vuejs"
                    >
                        <Icon
                            name="prime:twitter"
                            size="32"
                        />
                    </NuxtLink>
                    <NuxtLink
                        class="flex items-center border-2 p-2 rounded-full"
                        target="_blank"
                        to="https://dev.to/t/vue"
                    >
                        <Icon
                            name="lineicons:dev"
                            size="32"
                        />
                    </NuxtLink>
                </div>
            </BlurReveal>
            <div class="flex flex-row justify-between border-t-2 border-t-base pt-5">
                <ClientOnly>
                    <div>
                        <span class="text-sm text-base-content/60">&copy; build with <NuxtLink
                            target="_blank"
                            to="https://nuxt.com/"
                        >NuxtJs v{{ version }}</NuxtLink> & <NuxtLink
                            target="_blank"
                            to="https://tailwindcss.com/"
                        >Tailwindcss</NuxtLink>. Source is on <NuxtLink
                            :to="config.public.github"
                            target="_blank"
                        >Github</NuxtLink></span>
                    </div>
                    <p class="flex items-center gap-2 text-sm font-mono uppercase text-base-content/60">
                        Made with
                        <Icon
                            name="mdi:heart"
                            size="16"
                            class="text-red-500"
                        />
                        by <NuxtLink
                            to="https://github.com/lonewolfyx/"
                            target="_blank"
                            title="OldDriver"
                        >lonewolfyx</NuxtLink>
                    </p>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils.js'
import { BlurReveal } from '~/components/ui/blur-reveal'
import TeamCore from '~/components/TeamCore.vue'
import { member } from '~/data/member'

const config = useRuntimeConfig()
const version = config.public.nuxtVersion
</script>
