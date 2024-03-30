<template>
    <div class="mx-auto w-100 h-100">
        <img :src="`${BASE_URL}/api/badge/${teamName}`" :alt="`${teamName} club badge`" class="w-50 h-50">

        <h2 class="text-lg mx-auto text-center bottom-0">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
const props = defineProps(['teamName']);


</script>

<style lang="scss" scoped>

</style>