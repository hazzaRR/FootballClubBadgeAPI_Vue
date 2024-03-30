<template>
    <div class="mx-auto w-200 h-200">
        <div class="flex justify-center items-center">
            <img :src="`${BASE_URL}/api/badge/${teamName}?width=100&height=100`" :alt="`${teamName} club badge`" class="">
        </div>

        <h2 class="text-lg mx-auto text-center">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
const props = defineProps(['teamName']);


</script>

<style lang="scss" scoped>

</style>