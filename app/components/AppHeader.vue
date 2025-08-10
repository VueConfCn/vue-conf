<template>
    <div class="fixed w-full flex justify-center z-20">
        <div
            :class="cn(
                'relative bg-zinc-900 px-12 py-1 shadow-xl/30 rounded-b-3xl backdrop-blur-xs',
                'flex flex-row justify-center items-center gap-5 text-base font-mono',
                'after:content-[\'\']',
                'after:absolute after:top-0 after:w-5 after:h-5 after:-left-5',
                'after:bg-radial-[circle_at_bottom_left,transparent_20px,_theme(colors.zinc.900)_21px]',
                'before:content-[\'\']',
                'before:absolute before:top-0 before:w-5 before:h-5 before:-right-5',
                'before:bg-radial-[circle_at_bottom_right,transparent_20px,_theme(colors.zinc.900)_21px]',
            )"
        >
            <NuxtLink
                class="text-sm"
                to="/"
            >Home
            </NuxtLink>
            <NuxtLink
                class="text-sm"
                to="/events"
            >Events
            </NuxtLink>
            <NuxtLink
                class="flex items-center"
                title="VueConference"
                to="/"
            >
                <img
                    alt="vue-conf"
                    class="size-8 mx-3"
                    src="/logo.svg"
                >
            </NuxtLink>
            <NuxtLink
                class="text-sm"
                target="_blank"
                to="https://photos.app.goo.gl/PZwmHq1w4Xz344Y18"
            >Photos
            </NuxtLink>
            <NuxtLink
                :to="config.public.github"
                class="flex items-center gap-1"
                target="_blank"
            >
                <Icon
                    name="line-md:github-loop"
                    size="16"
                />
                <span class="text-sm">Github</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'AppHeader',
})

const config = useRuntimeConfig()
</script>
