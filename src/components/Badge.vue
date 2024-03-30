<template>
    <div class="rounded-lg flex flex-col justify-between">
        <div class="flex justify-center m-6 items-center">
            <img :src="`${BASE_URL}/api/badge/${teamName}?padding=true`" :alt="`${teamName} club badge`" class="">
        </div>
        
        <h2 class="text-lg text-center w-full bg-red-100">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
const props = defineProps(['teamName']);


</script>

<style lang="scss" scoped>

</style>