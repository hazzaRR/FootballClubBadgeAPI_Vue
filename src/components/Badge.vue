<template>
    <div class="rounded-lg flex flex-col justify-between border-[#011489] bg-[#BCA452] border-4">
        <div class="flex justify-center m-6 items-center">
            <img :src="`${BASE_URL}/api/badge/${teamName}?padding=true`" :alt="`${teamName} club badge`" class="">
        </div>
        
        <h2 class="text-lg text-center w-full rounded-md justify-center">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
const props = defineProps(['teamName']);


</script>

<style lang="scss" scoped>

</style>