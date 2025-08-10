<template>
    <ClientOnly>
        <Vue3Marquee
            :pause-on-hover="true"
            class="relative flex flex-row flex-nowrap justify-start items-start gap-12 pt-28 overflow-hidden"
            :duration="60"
        >
            <template
                v-for="user in team"
                :key="user.name"
            >
                <div
                    v-if="user[framework]"
                    class="relative flex flex-col items-center border-2 rounded-xl border-base-300 m-5 p-4 w-96 h-full bg-base-100"
                >
                    <div
                        class="absolute -top-10 bg-base-300 border-2 rounded-full border-base-300"
                    >
                        <img
                            :alt="user.name"
                            :src="`https://github.com/${user.github}.png`"
                            class="size-20 rounded-full"
                        >
                    </div>
                    <div class="py-10 flex flex-col items-center">
                        <h2 class="mb-5 text-2xl">
                            {{ user.name }}
                        </h2>
                        <p class="text-sm mb-3">
                            {{ user.bio }}
                        </p>
                        <!--                        <p class="text-sm text-base-content/60 line-clamp-3"> -->
                        <!--                            {{ user.description }} -->
                        <!--                        </p> -->
                    </div>
                    <div class="flex justify-between w-full">
                        <NuxtLink
                            :to="`https://github.com/${user.github}`"
                            class="flex items-center"
                            target="_blank"
                        >
                            <Icon
                                name="lucide:github"
                                size="16"
                            />
                        </NuxtLink>
                        <NuxtLink
                            v-if="user.twitter"
                            :to="`https://x.com/${user.twitter}`"
                            class="flex items-center gap-1"
                            target="_blank"
                        >
                            <Icon
                                name="prime:twitter"
                                size="16"
                            />
                            <span class="text-base-content/60 text-sm font-semibold">@{{ user.twitter }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </template>
        </Vue3Marquee>
    </ClientOnly>
</template>

<script lang="ts" setup>
import type { IMember } from '~/types'

defineOptions({
    name: 'TeamMember',
})

const props = defineProps<{
    team: IMember[]
    framework: 'vue' | 'vite'
}>()
</script>
