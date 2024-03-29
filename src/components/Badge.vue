<template>
    <div class="mx-auto w-20 h-20">
        <img :src="clubBadge.src" :alt="clubBadge.alt">

        <h2 class="text-lg">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['teamName'])

const clubBadge = ref({
    src: null,
    alt: null
})

</script>

<style lang="scss" scoped>

</style>