<template>
    <div class="relative px-4 py-32 pb-0 flex flex-col gap-24">
        <div class="relative w-[60rem] m-auto">
            <div class="flex flex-col gap-5">
                <div class="flex items-center gap-3">
                    <Icon
                        :name="icon"
                        size="34"
                    />
                    <span class="text-xl font-semibold font-mono">{{ name }}</span>
                </div>
                <div class="flex justify-between items-end">
                    <div class="flex flex-col">
                        <span
                            v-if="bio"
                            class="text-4xl font-mono"
                        >{{ bio }}</span>
                        <span
                            v-if="description"
                            class="text-4xl font-mono"
                        >{{ description }}</span>
                    </div>
                    <NuxtLink
                        :title="title"
                        :to="url"
                        class="bg-emerald-500 rounded-full px-6 py-3 text-sm font-medium text-base-100"
                        target="_blank"
                    >
                        Learn more
                    </NuxtLink>
                </div>
            </div>
        </div>

        <TeamMember
            :framework="teamName"
            :team="teamMember"
        />
    </div>
</template>

<script lang="ts" setup>
import type { IMember } from '~/types'

defineOptions({
    name: 'TeamCore',
})

interface IProps {
    icon: string
    name: string
    bio?: string
    description?: string
    title: string
    url: string
    teamName: 'vue' | 'vite'
    teamMember: IMember[]
}

const props = defineProps<IProps>()
</script>

<style scoped>

</style>
