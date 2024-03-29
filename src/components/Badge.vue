<template>
    <div class="mx-auto w-20 h-20">
        <!-- <img :src="clubBadge.src" :alt="clubBadge.alt"> -->

        <h2 class="text-lg">{{ teamName }}</h2>

    </div>
</template>

<script setup>
const props = defineProps(['clubBadge', 'teamName'])

</script>

<style lang="scss" scoped>

</style>