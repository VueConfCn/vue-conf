<template>
    <!-- TODO: Vue Conf Collection: 2025、2024 -->
    <div class="relative flex flex-col w-full h-screen pb-4 overflow-hidden">
        <div
            :class="cn(
                'relative z-10',
                'py-32',
                'before:content-[\'asd\']',
                'before:absolute before:inset-0 before:-z-1',
                'before:bg-[url(/img/background-event.png)] before:bg-no-repeat before:bg-cover before:bg-center',

                'after:content-[\'\']',
                'after:absolute after:inset-0 after:-z-1',
                'after:bg-linear-to-t after:from-base-200 after:to-dark/10',
            )"
        >
            <div class="container mx-auto max-w-[1200px] px-4 xl:max-w-full text-center text-emerald-500/85">
                <h1 class="text-6xl font-medium ">
                    All Events
                </h1>
            </div>
        </div>

        <div class="flex-1  overflow-x-auto overflow-y-hidden">
            <div class="flex flex-row w-full h-full">
                <AppEvents
                    v-for="(item, index) in AllEvents"
                    :key="index"
                    :events="item"
                    :year="index as string"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import AppEvents from '~/components/AppEvents.vue'
import { AllEvents } from '~/data/event'

useSeoMeta({
    title: `All Events`,
})
</script>
