<template>
    <div>
        <div
            :class="cn(
                'flex justify-start items-end gap-2 max-w-fit',
                'border border-base-300 rounded-full',
                'px-4 py-1',
            )"
        >
            <img
                :src="`https://github.com/${event.github}.png`"
                alt=""
                class="border-2 border-base-300 size-9 rounded-full"
            >
            <span class="text-lg text-base-content/60 font-mono">{{ event.author }}</span>
        </div>
        <svg
            class="ml-10 w-[27px] h-[30px] text-base-300"
            fill="none"
            viewBox="0 0 27 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="M0.5 0C0.5 18 26.5 12 26.5 30"
                    stroke="currentColor"
                    stroke-width="1px"
                />
            </g>
        </svg>
        <div class="block ml-10 border border-base-300 rounded-lg px-4 py-2 space-y-5">
            <span
                class="text-sm tracking-wide line-clamp-1"
            >{{ event.title }}</span>

            <div class="flex justify-start items-center gap-4">
                <NuxtLink
                    v-if="event.ppt"
                    :to="event.ppt"
                    class="flex items-center"
                    target="_blank"
                >
                    <Icon
                        class="text-success"
                        name="carbon:ppt"
                        size="16"
                    />
                </NuxtLink>
                <NuxtLink
                    v-if="event.video"
                    :to="event.video"
                    class="flex items-center"
                    target="_blank"
                >
                    <Icon
                        class="text-primary"
                        name="lucide:monitor-play"
                        size="16"
                    />
                </NuxtLink>
                <NuxtLink
                    v-if="event.ppt"
                    :to="event.ppt"
                    class="flex items-center"
                    target="_blank"
                >
                    <Icon
                        class="text-primary"
                        name="lucide:monitor-down"
                        size="16"
                    />
                </NuxtLink>
            </div>
        </div>
        <svg
            class="bottom ml-10 w-[27px] h-[30px] text-base-300 -scale-x-100"
            fill="none"
            viewBox="0 0 27 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="M0.5 0C0.5 18 26.5 12 26.5 30"
                    stroke="currentColor"
                    stroke-width="1px"
                />
            </g>
        </svg>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import type { IEventItem } from '~/types'

defineOptions({
    name: 'AppEventsItem',
})

const props = defineProps<{
    event: IEventItem
}>()
</script>
