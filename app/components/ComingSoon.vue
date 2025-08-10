<template>
    <div class="relative w-full min-h-screen flex justify-center items-center bg-background/65">
        <BlurReveal
            :delay="0.2"
            :duration="0.75"
        >
            <p class="text-5xl font-bold">
                Coming Soon......
            </p>
        </BlurReveal>
    </div>
</template>

<script lang="ts" setup>
import { BlurReveal } from '~/components/ui/blur-reveal'

defineOptions({
    name: 'ComingSoon',
})
</script>
