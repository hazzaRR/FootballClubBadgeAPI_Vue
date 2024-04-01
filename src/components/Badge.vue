<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="rounded-lg flex flex-col justify-between border-[#011489] bg-[#BCA452] border-4">
        <div class="flex justify-center m-6 items-center">
            <img :src="hover ? `${BASE_URL}/api/badge/${teamName}.png?padding=true&grayscale=true` : `${BASE_URL}/api/badge/${teamName}.png?padding=true`" :alt="`${teamName} club badge`" class="">
        </div>
        
        <h2 class="text-lg text-center w-full rounded-md justify-center pb-2">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
import {ref} from 'vue';
const props = defineProps(['teamName']);


const hover = ref(false);

const grayscaleHover = () => {
    badgeDiv.image.src = `${BASE_URL}/api/badge/${teamName}.png?padding=true&grayscale=true`
};

const originalColour = () => {
    badgeDiv.image.src = `${BASE_URL}/api/badge/${teamName}.png?padding=true`
};



</script>

<style lang="scss" scoped>

</style>