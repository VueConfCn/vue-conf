<template>
    <div class="block flex-shrink-0 my-4 px-4 self-stretch">
        <div class="block basis-lg w-lg h-full overflow-x-hidden overflow-y-auto">
            <div
                class="bg-base-300 w-48 border-l-3 border-base-300 border-l-emerald-500 pl-3 py-2.5 rounded-r-full"
            >
                <span class="text-base-content font-mono font-semibold">{{ year }}</span>
            </div>
            <svg
                class="ml-5 w-[27px] h-[30px] text-base-300"
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

            <div class="relative h-fit pb-4 [&>div:last-child>svg.bottom]:hidden">
                <AppEventsItem
                    v-for="item in events"
                    :key="item.author"
                    :event="item"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IEventItem } from '~/types'

defineOptions({
    name: 'AppEvents',
})

const props = defineProps<{
    year: string
    events: IEventItem[]
}>()
</script>
